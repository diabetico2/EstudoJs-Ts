@echo off
chcp 65001 > nul
cls
echo ==========================================
echo 💬 GERADOR: FEED DE COMENTARIOS
echo ==========================================

:: --- NAVEGACAO ---
cd JseHTMLcomplementar
cd Meus_Projetos_JS

mkdir Exercicio_Comentarios
cd Exercicio_Comentarios

echo Gerando script.js (Limpo)...

echo const inputNome = document.querySelector('#input-nome'); > script.js
echo const inputMsg = document.querySelector('#input-msg'); >> script.js
echo const btnPostar = document.querySelector('#btn-postar'); >> script.js
echo const feed = document.querySelector('#feed-comentarios'); >> script.js
echo. >> script.js
echo // --- DESAFIO DE AMANHA --- >> script.js
echo // 1. Use createElement('li') para o item principal. >> script.js
echo // 2. Use condicao (nome === '' ^|^| msg === '') para validar. >> script.js

echo Gerando index.html...

echo ^<!DOCTYPE html^> > index.html
echo ^<html lang="pt-BR"^> >> index.html
echo ^<head^> >> index.html
echo     ^<meta charset="UTF-8"^> >> index.html
echo     ^<title^>Sistema de Comentários^</title^> >> index.html
echo     ^<style^> >> index.html
echo         body { font-family: 'Helvetica Neue', sans-serif; background: #eef2f3; display: flex; flex-direction: column; align-items: center; padding-top: 40px; } >> index.html
echo         .post-area { background: white; padding: 25px; border-radius: 8px; width: 400px; box-shadow: 0 2px 10px rgba(0,0,0,0.1); } >> index.html
echo         h2 { color: #2c3e50; text-align: center; margin-top: 0; } >> index.html
echo         input, textarea { width: 100%%; padding: 10px; margin-bottom: 10px; border: 1px solid #ddd; border-radius: 4px; box-sizing: border-box; } >> index.html
echo         textarea { height: 80px; resize: none; } >> index.html
echo         button#btn-postar { width: 100%%; padding: 10px; background: #3498db; color: white; border: none; font-weight: bold; cursor: pointer; border-radius: 4px; transition: 0.3s; } >> index.html
echo         button#btn-postar:hover { background: #2980b9; } >> index.html
echo         ul { list-style: none; padding: 0; margin-top: 20px; width: 400px; } >> index.html
echo         li { background: white; border-left: 5px solid #3498db; padding: 15px; margin-bottom: 10px; border-radius: 4px; box-shadow: 0 2px 5px rgba(0,0,0,0.05); position: relative; animation: fadeIn 0.4s; } >> index.html
echo         li h3 { margin: 0 0 5px 0; font-size: 16px; color: #333; } >> index.html
echo         li p { margin: 0; color: #666; font-size: 14px; word-wrap: break-word; } >> index.html
echo         .btn-delete { position: absolute; top: 10px; right: 10px; background: transparent; border: none; color: #e74c3c; cursor: pointer; font-weight: bold; font-size: 14px; } >> index.html
echo         .btn-delete:hover { color: #c0392b; text-decoration: underline; } >> index.html
echo         @keyframes fadeIn { from { opacity: 0; transform: translateY(-10px); } to { opacity: 1; transform: translateY(0); } } >> index.html
echo     ^</style^> >> index.html
echo ^</head^> >> index.html
echo ^<body^> >> index.html
echo     ^<div class="post-area"^> >> index.html
echo         ^<h2^>💬 Deixe seu comentário^</h2^> >> index.html
echo         ^<input type="text" id="input-nome" placeholder="Seu Nome"^> >> index.html
echo         ^<textarea id="input-msg" placeholder="Sua mensagem..."^>^</textarea^> >> index.html
echo         ^<button id="btn-postar"^>Postar Comentário^</button^> >> index.html
echo     ^</div^> >> index.html
echo     ^<ul id="feed-comentarios"^>^</ul^> >> index.html
echo     ^<script src="script.js"^>^</script^> >> index.html
echo ^</body^> >> index.html
echo ^</html^> >> index.html

echo.
echo Tudo pronto em Meus_Projetos_JS\Exercicio_Comentarios !
code .