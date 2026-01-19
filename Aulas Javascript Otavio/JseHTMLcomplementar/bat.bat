@echo off
chcp 65001
echo ==========================================
echo      CRIANDO SEU PORTFOLIO DE ESTUDOS
echo ==========================================

:: Cria a pasta Mestra
mkdir "Meus_Projetos_JS"
cd "Meus_Projetos_JS"

:: --- PROJETO 1: Mochila Simples (Array Push/Pop) ---
mkdir "01_Mochila_Array_Basico"
cd "01_Mochila_Array_Basico"
type nul > index.html
cd ..
echo [OK] Pasta 01 criada...

:: --- PROJETO 2: Mochila Avançada (Busca e Splice) ---
mkdir "02_Mochila_Busca_e_Splice"
cd "02_Mochila_Busca_e_Splice"
type nul > index.html
cd ..
echo [OK] Pasta 02 criada...

:: --- PROJETO 3: Tamagotchi Completo (Objetos e Interval) ---
mkdir "03_Tamagotchi_Objetos_Final"
cd "03_Tamagotchi_Objetos_Final"
type nul > index.html
cd ..
echo [OK] Pasta 03 criada...

echo ==========================================
echo      TUDO PRONTO! ESTRUTURA CRIADA.
echo ==========================================
echo Agora copie os codigos do chat e cole nos arquivos index.html
pause