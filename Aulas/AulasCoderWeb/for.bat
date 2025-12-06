@echo off
chcp 65001 > nul
echo ==================================================
echo   TREINO NIVEL 2: ARRAYS E LOGICA
echo ==================================================

if not exist "Treino_Arrays_Nivel2" mkdir "Treino_Arrays_Nivel2"
cd "Treino_Arrays_Nivel2"

if not exist "package.json" (
    echo { "type": "module" } > package.json
)

echo [1/3] Criando 1_caixa_mercado.js...
(
echo // EXERCICIO 1: O ACUMULADOR ^(QUASE PRONTO^)
echo // Objetivo: Somar todos os valores do array 'precos' na variavel 'total'.
echo.
echo const precos = [10.50, 20.00, 5.50, 100.00];
echo let total = 0;
echo.
echo for ^(let i = 0; i ^< precos.length; i++^) {
echo     // TODO: Pegue o preco atual ^(precos[i]^) e adicione a variavel 'total'.
echo     // Dica: total = total + ...  OU  total += ...
echo }
echo.
echo console.log^("O total da compra e: R$" + total^);
) > 1_caixa_mercado.js

echo [2/3] Criando 2_achar_maior.js...
(
echo // EXERCICIO 2: CACA BUGS ^(LOGICA INVERTIDA^)
echo // Objetivo: Encontrar o MAIOR numero da lista.
echo // Problema atual: Ele esta imprimindo o numero errado ou o menor.
echo.
echo const numeros = [10, 50, 3, 99, 2];
echo let maiorNumero = 0;
echo.
echo for ^(let i = 0; i ^< numeros.length; i++^) {
echo     // ! O BUG ESTA NESTE IF:
echo     // Estamos querendo o MAIOR. Se o numero atual for ... que o maiorNumero, devemos trocar.
echo     if ^(numeros[i] ^< maiorNumero^) { 
echo         maiorNumero = numeros[i];
echo     }
echo }
echo.
echo console.log^("O maior numero e: " + maiorNumero^);
) > 2_achar_maior.js

echo [3/3] Criando 3_correio.js...
(
echo // EXERCICIO 3: SOLO ^(DO ZERO^)
echo // Objetivo: Mandar um ola para cada pessoa da lista.
echo.
echo const amigos = ["Ana", "Bia", "Carlos", "Daniel"];
echo.
echo // TODO: Faca um loop que percorra a lista 'amigos'.
echo // Em cada volta, imprima: "Ola [Nome], feliz aniversario!"
echo.
echo // SEU CODIGO AQUI:
) > 3_correio.js

echo.
echo ==================================================
echo    TUDO PRONTO. ARQUIVOS CRIADOS!
echo ==================================================
pause