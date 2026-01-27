@echo off
chcp 65001 > nul
cls
echo ==========================================
echo 🛒 GERADOR: LISTA DE COMPRAS (HARD MODE)
echo ==========================================

:: --- NAVEGACAO ---


mkdir Exercicio_Compras
cd Exercicio_Compras

echo Gerando script.js...

echo const inputProduto = document.querySelector('#input-produto'); > script.js
echo const inputQtd = document.querySelector('#input-qtd'); >> script.js
echo const btnAdicionar = document.querySelector('#btn-add'); >> script.js
echo const listaCompras = document.querySelector('.lista-compras'); >> script.js
echo. >> script.js
echo // Agora e com voce. Crie as funcoes e os eventos! >> script.js

echo Gerando index.html...

echo ^<!DOCTYPE html^> > index.html
echo ^<html lang="pt-BR"^> >> index.html
echo ^<head^> >> index.html
echo     ^<meta charset="UTF-8"^> >> index.html
echo     ^<title^>Lista de Compras^</title^> >> index.html
echo     ^<style^> >> index.html
echo         body { font-family: 'Verdana', sans-serif; background: #fdf2e9; display: flex; flex-direction: column; align-items: center; padding-top: 50px; } >> index.html
echo         .container { background: white; padding: 25px; border-radius: 15px; width: 350px; box-shadow: 0 4px 15px rgba(0,0,0,0.1); } >> index.html
echo         h2 { color: #d35400; text-align: center; margin-top: 0; } >> index.html
echo         .inputs { display: flex; gap: 5px; margin-bottom: 15px; } >> index.html
echo         input#input-produto { flex: 2; padding: 10px; border: 1px solid #ddd; border-radius: 5px; } >> index.html
echo         input#input-qtd { flex: 1; padding: 10px; border: 1px solid #ddd; border-radius: 5px; } >> index.html
echo         button#btn-add { width: 100%%; padding: 10px; background: #e67e22; color: white; border: none; font-weight: bold; cursor: pointer; border-radius: 5px; } >> index.html
echo         button#btn-add:hover { background: #d35400; } >> index.html
echo         ul { list-style: none; padding: 0; margin-top: 20px; } >> index.html
echo         li { background: #fff3e0; border-bottom: 1px solid #ffe0b2; padding: 10px; display: flex; justify-content: space-between; align-items: center; margin-bottom: 5px; border-radius: 5px; animation: slideUp 0.3s; } >> index.html
echo         li strong { color: #333; } >> index.html
echo         li span { color: #7f8c8d; font-size: 0.9em; } >> index.html
echo         .btn-delete { background: #ff7675; color: white; border: none; padding: 5px 10px; border-radius: 4px; cursor: pointer; font-size: 12px; } >> index.html
echo         @keyframes slideUp { from { opacity: 0; transform: translateY(10px); } to { opacity: 1; transform: translateY(0); } } >> index.html
echo     ^</style^> >> index.html
echo ^</head^> >> index.html
echo ^<body^> >> index.html
echo     ^<div class="container"^> >> index.html
echo         ^<h2^>🛒 Minha Lista^</h2^> >> index.html
echo         ^<div class="inputs"^> >> index.html
echo             ^<input type="text" id="input-produto" placeholder="Ex: Leite"^> >> index.html
echo             ^<input type="number" id="input-qtd" placeholder="Qtd"^> >> index.html
echo         ^</div^> >> index.html
echo         ^<button id="btn-add"^>Adicionar Item^</button^> >> index.html
echo         ^<ul class="lista-compras"^>^</ul^> >> index.html
echo     ^</div^> >> index.html
echo     ^<script src="script.js"^>^</script^> >> index.html
echo ^</body^> >> index.html
echo ^</html^> >> index.html

echo.
echo Tudo pronto em Meus_Projetos_JS\Exercicio_Compras !
code .