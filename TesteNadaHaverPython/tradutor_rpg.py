import os
import fitz  # Biblioteca PyMuPDF para ler o PDF
from google import genai  # IMPORTANTE: Esta é a biblioteca nova!
import time  #
from dotenv import load_dotenv

# Carrega as configurações do arquivo .env
load_dotenv()

# 1. Configuração da API usando a chave escondida
CHAVE_API = os.getenv("GEMINI_API_KEY")

if not CHAVE_API:
    raise ValueError("Chave da API não encontrada! Verifique seu arquivo .env")

# Novo jeito de inicializar a conexão com o Gemini
client = genai.Client(api_key=CHAVE_API)

def traduzir_pdf(caminho_pdf, caminho_saida):
    print("Abrindo o PDF...")
    doc = fitz.open(caminho_pdf)
    texto_final = ""

    # 2. Lendo e traduzindo página por página
    for num_pagina in range(len(doc)):
        print(f"Lendo e traduzindo página {num_pagina + 1} de {len(doc)}...")
        pagina = doc.load_page(num_pagina)
        texto_original = pagina.get_text()

        # Pula páginas vazias (só com imagens, por exemplo)
        if not texto_original.strip():
            print(f"Página {num_pagina + 1} vazia ou só com imagens. Pulando.")
            continue

        # 3. O Prompt focado em RPG
        prompt = f"""
        Você é um tradutor especialista em RPG de mesa e Elden Ring.
        Traduza o texto abaixo do inglês para o português do Brasil.
        
        Regras importantes:
        - Mantenha o jargão de RPG (ex: 'Saving Throw' = Teste de Resistência, 'Melee' = Corpo a Corpo, 'Hit Points' = Pontos de Vida).
        - Adapte termos do universo de Elden Ring (ex: 'Tarnished' = Maculado, 'Grace' = Graça, 'Erdtree' = Térvore).
        - Mantenha a formatação do texto o mais limpa possível.

        Texto a ser traduzido:
        {texto_original}
        """

        try:
            resposta = client.models.generate_content(
                model='gemini-2.5-flash',
                contents=prompt
            )
            texto_final += f"\n\n================ PÁGINA {num_pagina + 1} ================\n\n"
            texto_final += resposta.text
            
            print("Esperando 5 segundos para não estourar o limite da API...")
            time.sleep(5)  # <-- NOVO: Pausa de 5 segundos

        except Exception as e:
            print(f"Erro na página {num_pagina + 1}: {e}")

    # 4. Salvando o resultado
    with open(caminho_saida, "w", encoding="utf-8") as arquivo:
        arquivo.write(texto_final)
    print(f"\nSucesso! Tradução salva em: {caminho_saida}")

# Execute o script aqui
if __name__ == "__main__":
    # NÃO ESQUEÇA: Substitua pelo nome exato do seu PDF que está na pasta
    nome_do_pdf = "Elden Ring PlayerBook.pdf" 
    traduzir_pdf(nome_do_pdf, "traducao_elden_ring.txt")