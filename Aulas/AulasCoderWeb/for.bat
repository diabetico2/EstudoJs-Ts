@echo off
chcp 65001 > nul
echo ==================================================
echo   TREINO DE FATORIAL (MATEMATICA E LOGICA)
echo ==================================================

if not exist "Treino_Fatorial" mkdir "Treino_Fatorial"
cd "Treino_Fatorial"

if not exist "package.json" (
    echo { "type": "module" } > package.json
)

echo [1/3] Criando 1_exemplo_fatorial.js (Entendendo a Logica)...
(
echo // EXERCICIO 1: FATORIAL DE 5 ^(EXEMPLO PRONTO^)
echo // Objetivo: Entender como o loop multiplica para tras.
echo.
echo const numero = 5;
echo let resultado = 1; // ! IMPORTANTE: Comeca com 1, nao com 0!
echo.
echo // Vamos do 5 ate o 1, diminuindo ^(i--^)
echo for ^(let i = numero; i ^> 1; i--^) {
echo     console.log^(`Multiplicando ${resultado} * ${i}`^);
echo     resultado = resultado * i;
echo }
echo.
echo console.log^(`O fatorial de ${numero} e: ${resultado}`^);
) > 1_exemplo_fatorial.js

echo [2/3] Criando 2_erro_comum.js (Caca Bugs)...
(
echo // EXERCICIO 2: O ERRO DO ZERO
echo // Objetivo: Esse codigo deveria calcular o fatorial de 10.
echo // MAS... ele esta imprimindo 0. Por que?
echo.
echo const numero = 10;
echo.
echo // ! O BUG ESTA NA LINHA ABAIXO:
echo let fatorial = 0; 
echo.
echo for ^(let i = numero; i ^> 1; i--^) {
echo     fatorial = fatorial * i;
echo }
echo.
echo console.log^(`Fatorial de 10 deveria ser 3 milhoes, mas deu: ${fatorial}`^);
echo // DICA: Quanto e 0 vezes qualquer coisa?
) > 2_erro_comum.js

echo [3/3] Criando 3_solo_fatorial.js (Fazer sozinho)...
(
echo // EXERCICIO 3: SOLO
echo // Objetivo: Calcule o fatorial de 7.
echo // Lembre-se: 7 * 6 * 5 * 4 * 3 * 2 * 1
echo.
echo const numero = 7;
echo let total = 1;
echo.
echo // TODO: Crie o loop for aqui.
echo // Pode fazer subindo ^(1 ate 7^) ou descendo ^(7 ate 1^), o resultado e o mesmo.
echo.
echo // ESCREVA SEU CODIGO AQUI:
) > 3_solo_fatorial.js

echo.
echo ==================================================
echo    TUDO PRONTO. ARQUIVOS CRIADOS!
echo ==================================================
pause