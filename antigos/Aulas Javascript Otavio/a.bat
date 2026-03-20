@echo off
:: Muda a codificação para aceitar acentos
chcp 65001 > nul
cls

echo ===================================================
echo 🌳 MAPEANDO SEU PROGRESSO DE ESTUDOS...
echo ===================================================
echo.
echo Varrendo todas as pastas e arquivos. Aguarde...

:: O comando 'tree /F' lista as pastas e os arquivos dentro delas.
:: O sinal '>' joga esse resultado dentro de um arquivo de texto.
tree /F > meus_estudos_lista.txt

echo.
echo ✅ Sucesso! O arquivo "meus_estudos_lista.txt" foi gerado!
echo Abrindo o arquivo para voce ver...

:: Abre o arquivo de texto automaticamente no Bloco de Notas
start meus_estudos_lista.txt

pause