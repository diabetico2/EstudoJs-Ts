@echo off
chcp 65001 > nul
cls
echo ==========================================
echo 🛡️ GERADOR: GUILDA RPG (SELECT INPUT)
echo ==========================================

:: --- NAVEGACAO ---
cd JseHTMLcomplementar
cd Meus_Projetos_JS

mkdir Exercicio_Guilda
cd Exercicio_Guilda

echo Gerando script.js...

echo const inputNome = document.querySelector('#input-nome'); > script.js
echo const selectClasse = document.querySelector('#select-classe'); >> script.js
echo const btnRecrutar = document.querySelector('#btn-recrutar'); >> script.js
echo const guilda = document.querySelector('.guilda'); >> script.js
echo. >> script.js
echo // --- 1. ELEMENTO NOME (H3) --- >> script.js
echo function criaNome(nome) { >> script.js
echo. >> script.js
echo } >> script.js
echo. >> script.js
echo // --- 2. ELEMENTO CLASSE (P) --- >> script.js
echo function criaClasse(classe) { >> script.js
echo. >> script.js
echo } >> script.js
echo. >> script.js
echo // --- 3. BOTAO EXPULSAR (X) --- >> script.js
echo function criaBotaoExpulsar() { >> script.js
echo. >> script.js
echo } >> script.js
echo. >> script.js
echo // --- 4. O GERENTE (MONTA O CARD) --- >> script.js
echo function montaCard(nome, classe) { >> script.js
echo    // DICA: A div precisa ter a classe 'card' E a classe que veio no argumento. >> script.js
echo    // Ex: div.classList.add('card', classe) >> script.js
echo. >> script.js
echo } >> script.js
echo. >> script.js
echo // --- EVENTOS --- >> script.js
echo btnRecrutar.addEventListener('click', function() { >> script.js
echo. >> script.js
echo }); >> script.js
echo. >> script.js
echo guilda.addEventListener('click', function(e) { >> script.js
echo. >> script.js
echo }); >> script.js

echo Gerando index.html...

echo ^<!DOCTYPE html^> > index.html
echo ^<html lang="pt-BR"^> >> index.html
echo ^<head^> >> index.html
echo     ^<meta charset="UTF-8"^> >> index.html
echo     ^<title^>Guilda de Heróis^</title^> >> index.html
echo     ^<style^> >> index.html
echo         body { font-family: 'Segoe UI', sans-serif; background: #2c3e50; color: white; display: flex; flex-direction: column; align-items: center; padding-top: 30px; } >> index.html
echo         .painel { background: #34495e; padding: 20px; border-radius: 10px; width: 300px; text-align: center; margin-bottom: 20px; } >> index.html
echo         input, select { padding: 10px; width: 90%%; margin-bottom: 10px; border-radius: 5px; border: none; } >> index.html
echo         button#btn-recrutar { width: 100%%; padding: 10px; background: #f1c40f; border: none; font-weight: bold; cursor: pointer; border-radius: 5px; color: #2c3e50; } >> index.html
echo         .guilda { display: flex; gap: 10px; flex-wrap: wrap; justify-content: center; width: 80%%; } >> index.html
echo         .card { width: 150px; padding: 15px; border-radius: 8px; position: relative; text-align: center; box-shadow: 0 4px 6px rgba(0,0,0,0.3); animation: popIn 0.3s; } >> index.html
echo         .card h3 { margin: 10px 0 5px 0; } >> index.html
echo         .card p { margin: 0; font-size: 0.9em; opacity: 0.8; text-transform: uppercase; letter-spacing: 1px; } >> index.html
echo         .btn-expulsar { position: absolute; top: 5px; right: 5px; background: rgba(0,0,0,0.2); color: white; border: none; border-radius: 50%%; width: 25px; height: 25px; cursor: pointer; } >> index.html
echo         /* CORES DAS CLASSES */ >> index.html
echo         .guerreiro { background: #e74c3c; } >> index.html
echo         .mago { background: #3498db; } >> index.html
echo         .arqueiro { background: #2ecc71; } >> index.html
echo         @keyframes popIn { from { transform: scale(0); } to { transform: scale(1); } } >> index.html
echo     ^</style^> >> index.html
echo ^</head^> >> index.html
echo ^<body^> >> index.html
echo     ^<div class="painel"^> >> index.html
echo         ^<h2^>🏰 Nova Recruta^</h2^> >> index.html
echo         ^<input type="text" id="input-nome" placeholder="Nome do Herói..."^> >> index.html
echo         ^<select id="select-classe"^> >> index.html
echo             ^<option value="guerreiro"^>Guerreiro ⚔️^</option^> >> index.html
echo             ^<option value="mago"^>Mago 🔮^</option^> >> index.html
echo             ^<option value="arqueiro"^>Arqueiro 🏹^</option^> >> index.html
echo         ^</select^> >> index.html
echo         ^<button id="btn-recrutar"^>Recrutar^</button^> >> index.html
echo     ^</div^> >> index.html
echo     ^<div class="guilda"^>^</div^> >> index.html
echo     ^<script src="script.js"^>^</script^> >> index.html
echo ^</body^> >> index.html
echo ^</html^> >> index.html

echo.
echo Tudo pronto em Meus_Projetos_JS\Exercicio_Guilda !
code .