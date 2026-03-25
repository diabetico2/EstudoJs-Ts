import os
import fitz  
import time  
from google import genai
from google.genai import errors # NOVO: Importando os erros para o script saber quando insistir
from dotenv import load_dotenv

load_dotenv()

CHAVE_API = os.getenv("GEMINI_API_KEY")
if not CHAVE_API:
    raise ValueError("Chave da API não encontrada! Verifique seu arquivo .env")

client = genai.Client(api_key=CHAVE_API)

def traduzir_pdf(caminho_pdf, caminho_saida):
    print(f"Abrindo o arquivo: {caminho_pdf}")
    doc = fitz.open(caminho_pdf)
    texto_final = ""

    for num_pagina in range(len(doc)):
        numero_real_pagina = num_pagina + 1
        print(f"\nLendo e traduzindo página {numero_real_pagina} de {len(doc)}...")
        
        pagina = doc.load_page(num_pagina)
        texto_original = pagina.get_text()

        if not texto_original.strip():
            print(f"Página {numero_real_pagina} vazia ou só com imagens. Pulando.")
            texto_final += f"\n\n================ PÁGINA {numero_real_pagina} (Vazia/Imagens) ================\n\n"
            continue

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

        # NOVO: O script vai tentar até 5 vezes traduzir a mesma página antes de desistir
        tentativas = 0
        max_tentativas = 5
        sucesso = False

        while tentativas < max_tentativas and not sucesso:
            try:
                resposta = client.models.generate_content(
                    model='gemini-2.5-flash',
                    contents=prompt
                )
                
                texto_final += f"\n\n================ PÁGINA {numero_real_pagina} ================\n\n"
                texto_final += resposta.text
                
                print(f"Página {numero_real_pagina} traduzida com sucesso! Esperando 8 segundos (por segurança)...")
                time.sleep(8) # Aumentei um pouquinho a pausa normal
                sucesso = True # Se chegou aqui, deu certo e sai do loop while

            except errors.APIError as e:
                tentativas += 1
                print(f"Ops, limite atingido ou servidor ocupado (Tentativa {tentativas}/{max_tentativas}).")
                if tentativas < max_tentativas:
                    print("Esperando 60 segundos antes de tentar de novo...")
                    time.sleep(60) # Se der erro, espera um bom tempo antes de tentar a mesma página
                else:
                    print(f"Desisti da página {numero_real_pagina} após {max_tentativas} tentativas. Erro: {e}")
                    texto_final += f"\n\n================ ERRO NA PÁGINA {numero_real_pagina} ================\n\n"
            except Exception as e:
                # Se for um erro diferente, não insiste e pula a página
                print(f"Erro inesperado na página {numero_real_pagina}: {e}")
                texto_final += f"\n\n================ ERRO NA PÁGINA {numero_real_pagina} ================\n\n"
                sucesso = True # Finge que deu certo só pra sair do while

    with open(caminho_saida, "w", encoding="utf-8") as arquivo:
        arquivo.write(texto_final)
    print(f"\nSucesso absoluto! A tradução completa foi salva em: {caminho_saida}")

if __name__ == "__main__":
    nome_do_pdf = "Elden Ring PlayerBook.pdf" 
    traduzir_pdf(nome_do_pdf, "traducao_elden_ring.txt")