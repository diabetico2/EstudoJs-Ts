@echo off
chcp 65001 > nul
cls
echo ==========================================
echo 🔮 GERADOR: O ORACULO (LOGICA PURA)
echo ==========================================

cd JseHTMLcomplementar
cd Meus_Projetos_JS

mkdir Exercicio_Oraculo
cd Exercicio_Oraculo

echo Gerando script.js...
echo const inputChute = document.querySelector('#input-chute'); > script.js
echo const btnChutar = document.querySelector('#btn-chutar'); >> script.js
echo const msgResultado = document.querySelector('.resultado'); >> script.js
echo const msgTentativas = document.querySelector('.tentativas'); >> script.js
echo. >> script.js
echo // 1. Crie uma variavel global para guardar o "Numero Secreto" (Math.random) >> script.js
echo // 2. Crie uma variavel para contar as tentativas (comeca em 0) >> script.js
echo. >> script.js
echo function gerarNumeroAleatorio() { >> script.js
echo    // DICA: Math.floor(Math.random() * 100) + 1 >> script.js
echo    // Retorne esse numero >> script.js
echo } >> script.js
echo. >> script.js
echo // --- SEU CODIGO COMEC AQUI --- >> script.js

echo Gerando index.html...
echo ^<!DOCTYPE html^> > index.html
echo ^<html lang="pt-BR"^> >> index.html
echo ^<head^> >> index.html
echo     ^<meta charset="UTF-8"^> >> index.html
echo     ^<title^>O Oráculo^</title^> >> index.html
echo     ^<style^> >> index.html
echo         body { font-family: 'Courier New', monospace; background: #2c3e50; color: #ecf0f1; display: flex; flex-direction: column; align-items: center; justify-content: center; height: 100vh; margin: 0; } >> index.html
echo         .game-box { background: #34495e; padding: 40px; border-radius: 10px; text-align: center; box-shadow: 0 10px 25px rgba(0,0,0,0.3); border: 2px solid #f1c40f; } >> index.html
echo         h1 { color: #f1c40f; margin-bottom: 20px; } >> index.html
echo         input { padding: 15px; font-size: 20px; width: 100px; text-align: center; border-radius: 5px; border: none; margin-right: 10px; } >> index.html
echo         button { padding: 15px 30px; font-size: 18px; background: #e74c3c; color: white; border: none; border-radius: 5px; cursor: pointer; font-weight: bold; } >> index.html
echo         button:hover { background: #c0392b; } >> index.html
echo         .resultado { margin-top: 30px; font-size: 24px; font-weight: bold; min-height: 30px; } >> index.html
echo         .tentativas { margin-top: 15px; font-size: 14px; color: #95a5a6; } >> index.html
echo         .acertou { color: #2ecc71; } >> index.html
echo     ^</style^> >> index.html
echo ^</head^> >> index.html
echo ^<body^> >> index.html
echo     ^<div class="game-box"^> >> index.html
echo         ^<h1^>🔮 O Oráculo^</h1^> >> index.html
echo         ^<p^>Pensei em um número entre 1 e 100...</p^> >> index.html
echo         ^<div^> >> index.html
echo             ^<input type="number" id="input-chute" placeholder="0"^> >> index.html
echo             ^<button id="btn-chutar"^>Chutar!^</button^> >> index.html
echo         ^</div^> >> index.html
echo         ^<div class="resultado"^>^</div^> >> index.html
echo         ^<div class="tentativas"^>Tentativas: 0^</div^> >> index.html
echo     ^</div^> >> index.html
echo     ^<script src="script.js"^>^</script^> >> index.html
echo ^</body^> >> index.html
echo ^</html^> >> index.html

code .