@echo off
:: Define o título da janela
title Sincronizador GitHub (Casa e Trabalho)

:menu
cls
echo =======================================================
echo           GERENCIADOR DO GITHUB (SYNC)
echo =======================================================
echo.
echo  [1] ENVIAR para o GitHub (Upload / Push)
echo      - Use quando terminar de programar.
echo.
echo  [2] BAIXAR do GitHub (Atualizar / Pull)
echo      - Use ASSIM QUE LIGAR O PC, antes de mexer.
echo.
echo =======================================================
set /p opcao="Digite o numero da opcao (1 ou 2): "

if "%opcao%"=="1" goto enviar
if "%opcao%"=="2" goto baixar
echo.
echo Opcao invalida! Tente novamente.
pause
goto menu

:: =======================================================
:: BLOCO DE ENVIO (PUSH)
:: =======================================================
:enviar
cls
echo =======================================================
echo              ENVIANDO ARQUIVOS (PUSH)
echo =======================================================
echo.

:: Captura data e hora
set "data_atual=%DATE%"
set "hora_atual=%TIME:~0,5%"
set "mensagem_commit=Codigo atualizado em %data_atual% as %hora_atual%"

echo Mensagem: "%mensagem_commit%"
echo.

echo --- 1/3: Adicionando arquivos...
git add .

echo --- 2/3: Criando commit...
git commit -m "%mensagem_commit%"

echo --- 3/3: Enviando para nuvem...
git push

echo.
echo [SUCESSO] Seus arquivos estao no GitHub!
goto fim

:: =======================================================
:: BLOCO DE BAIXAR (PULL)
:: =======================================================
:baixar
cls
echo =======================================================
echo              BAIXANDO ARQUIVOS (PULL)
echo =======================================================
echo.
echo Verificando se ha novidades no GitHub...
echo.

git pull

echo.
echo [SUCESSO] Seu PC esta atualizado com a versao mais recente!
goto fim

:fim
echo.
echo =======================================================
echo Pressione qualquer tecla para sair.
pause > nul