@echo off
chcp 65001 > nul
cls
echo ==========================================
echo 🍕 GERADOR: PIZZARIA MODULAR (BLINDADO)
echo ==========================================

:: 1. Cria a pasta e entra nela
mkdir Exercicio_Pizzaria
cd Exercicio_Pizzaria

:: 2. Cria o arquivo SCRIPT.JS (Escrevendo linha por linha para nao travar)
echo Gerando script.js...

echo const inputSabor = document.querySelector('#input-sabor'); > script.js
echo const btnPedir = document.querySelector('#btn-pedir'); >> script.js
echo const forno = document.querySelector('.lista-pizzas'); >> script.js
echo. >> script.js
echo // --- FUNCIONARIO 1: A MASSA --- >> script.js
echo function criaLi() { >> script.js
echo     // 1. Crie um elemento 'li' >> script.js
echo     // 2. Adicione a classe 'pizza-item' >> script.js
echo     // 3. Retorne o li >> script.js
echo } >> script.js
echo. >> script.js
echo // --- FUNCIONARIO 2: O RECHEIO --- >> script.js
echo function criaSpan(sabor) { >> script.js
echo     // 1. Crie um 'span' >> script.js
echo     // 2. Coloque o innerText sendo o sabor >> script.js
echo     // 3. Retorne o span >> script.js
echo } >> script.js
echo. >> script.js
echo // --- FUNCIONARIO 3: O CORTADOR --- >> script.js
echo function criaBotao() { >> script.js
echo     // 1. Crie um 'button' >> script.js
echo     // 2. innerText = 'Comer 😋' >> script.js
echo     // 3. Adicione a classe 'btn-comer' >> script.js
echo     // 4. Retorne o botao >> script.js
echo } >> script.js
echo. >> script.js
echo // --- A CHEF (GERENTE) --- >> script.js
echo function montarPizza(sabor) { >> script.js
echo     // AQUI A MAGICA ACONTECE: >> script.js
echo     // 1. Chame const li = criaLi(); >> script.js
echo     // 2. Chame const span = criaSpan(sabor); >> script.js
echo     // 3. Chame const btn = criaBotao(); >> script.js
echo. >> script.js
echo     // 4. Pendure o span e o btn dentro do li >> script.js
echo     // 5. Retorne o li completo >> script.js
echo } >> script.js
echo. >> script.js
echo // --- EVENTOS --- >> script.js
echo btnPedir.addEventListener('click', function() { >> script.js
echo     const sabor = inputSabor.value; >> script.js
echo     if (sabor === '') return; >> script.js
echo. >> script.js
echo     // Chame a Chef para montar a pizza: >> script.js
echo     const pizzaPronta = montarPizza(sabor); >> script.js
echo. >> script.js
echo     // Coloque no forno >> script.js
echo     forno.appendChild(pizzaPronta); >> script.js
echo. >> script.js
echo     inputSabor.value = ''; >> script.js
echo     inputSabor.focus(); >> script.js
echo }); >> script.js
echo. >> script.js
echo // --- RECEPCIONISTA (APAGAR) --- >> script.js
echo forno.addEventListener('click', function(e) { >> script.js
echo     const el = e.target; >> script.js
echo     if (el.classList.contains('btn-comer')) { >> script.js
echo        el.parentElement.remove(); >> script.js
echo     } >> script.js
echo }); >> script.js

:: 3. Cria o arquivo INDEX.HTML
echo Gerando index.html...

echo ^<!DOCTYPE html^> > index.html
echo ^<html lang="pt-BR"^> >> index.html
echo ^<head^> >> index.html
echo     ^<meta charset="UTF-8"^> >> index.html
echo     ^<title^>Pizzaria Dev^</title^> >> index.html
echo     ^<style^> >> index.html
echo         body { font-family: sans-serif; background: #fff3e0; display: flex; flex-direction: column; align-items: center; padding-top: 50px; } >> index.html
echo         h1 { color: #e65100; } >> index.html
echo         .caixa { background: white; padding: 20px; border-radius: 15px; box-shadow: 0 4px 15px rgba(0,0,0,0.1); width: 350px; text-align: center; } >> index.html
echo         input { padding: 10px; width: 60%%; border: 1px solid #ffcc80; border-radius: 5px; outline: none; } >> index.html
echo         button#btn-pedir { padding: 10px 15px; background: #ef6c00; color: white; border: none; border-radius: 5px; cursor: pointer; font-weight: bold; } >> index.html
echo         ul { list-style: none; padding: 0; margin-top: 20px; text-align: left; } >> index.html
echo         li.pizza-item { background: #fff8e1; border: 1px solid #ffe0b2; padding: 10px; margin-bottom: 8px; border-radius: 8px; display: flex; justify-content: space-between; align-items: center; } >> index.html
echo         .btn-comer { background: #4caf50; color: white; border: none; padding: 5px 10px; border-radius: 4px; cursor: pointer; font-size: 12px; } >> index.html
echo         .btn-comer:hover { background: #388e3c; } >> index.html
echo     ^</style^> >> index.html
echo ^</head^> >> index.html
echo ^<body^> >> index.html
echo     ^<div class="caixa"^> >> index.html
echo         ^<h1^>🍕 Pizzaria JS^</h1^> >> index.html
echo         ^<input type="text" id="input-sabor" placeholder="Sabor da pizza..."^> >> index.html
echo         ^<button id="btn-pedir"^>Assar^</button^> >> index.html
echo         ^<ul class="lista-pizzas"^>^</ul^> >> index.html
echo     ^</div^> >> index.html
echo     ^<script src="script.js"^>^</script^> >> index.html
echo ^</body^> >> index.html
echo ^</html^> >> index.html

echo.
echo Tudo pronto!
pause