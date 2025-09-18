@echo off
:: Define o título da janela do console
title Automatizador de Push para o GitHub

:: Captura a data e a hora do sistema
:: A variável %DATE% geralmente vem como DD/MM/AAAA
:: A variável %TIME% geralmente vem como HH:MM:SS,ms. Pegamos apenas os 5 primeiros caracteres (HH:MM)
set "data_atual=%DATE%"
set "hora_atual=%TIME:~0,5%"

:: Cria a mensagem de commit
set "mensagem_commit=Codigo upado em %data_atual% as %hora_atual%"

echo.
echo =======================================================
echo           Automatizador de Push para o GitHub
echo =======================================================
echo.
echo Mensagem de Commit: "%mensagem_commit%"
echo.
echo Pressione qualquer tecla para iniciar o processo...
pause > nul

:: Executa os comandos do Git
echo.
echo --- 1/3: Adicionando todos os arquivos (git add .)...
git add .

echo.
echo --- 2/3: Criando o commit (git commit)...
git commit -m "%mensagem_commit%"

echo.
echo --- 3/3: Enviando para o GitHub (git push)...
git push

echo.
echo =======================================================
echo Processo finalizado!
echo =======================================================
echo.
echo Pressione qualquer tecla para fechar esta janela.
pause > nul