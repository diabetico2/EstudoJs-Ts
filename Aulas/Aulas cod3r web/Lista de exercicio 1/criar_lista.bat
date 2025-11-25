@echo off
chcp 65001 > nul
echo ==================================================
echo   TERMINANDO A LISTA (33 ao 40)
echo ==================================================

:: Entra na pasta que o script anterior já criou
cd "Lista_Exercicios_WebModerno"

echo Criando exercicio33.js...
(
echo const prompt = require^('prompt-sync'^)^(^);
echo // 33^) Crie vetores Inteiro, String, Double. Una-os usando concat^(^) de 2 maneiras.
echo // TODO: Implementar
) > exercicio33.js

echo Criando exercicio34.js...
(
echo const prompt = require^('prompt-sync'^)^(^);
echo // 34^) Compare duas strings: Retorne true se contem os mesmos caracteres ^(case insensitive^).
echo function compararStrings^(s1, s2^) {
echo     // TODO
echo }
) > exercicio34.js

echo Criando exercicio35.js...
(
echo const prompt = require^('prompt-sync'^)^(^);
echo // 35^) Adicione vetorAdiciona ao vetorPilha. Mostre no console.
echo let vetorPilha = [1, 2, 3, 4, 5];
echo let vetorAdiciona = [6, 7, 8, 9, 10];
echo function adicionarVetor^(pilha, add^) {
echo     // TODO
echo }
) > exercicio35.js

echo Criando exercicio36.js...
(
echo const prompt = require^('prompt-sync'^)^(^);
echo // 36^) Funcao 1: Multiplica elemento por numero. Funcao 2: Multiplica so se valor for maior que 5.
echo function multiplicaVetor^(vetor, num^) {}
echo function multiplicaSeMaiorQue5^(vetor, num^) {}
) > exercicio36.js

echo Criando exercicio37.js...
(
echo const prompt = require^('prompt-sync'^)^(^);
echo // 37^) PA e PG: Receba n, a1, r. Imprima termos e soma.
echo function pA^(n, a1, r^) {}
echo function pG^(n, a1, r^) {}
) > exercicio37.js

echo Criando exercicio38.js...
(
echo const prompt = require^('prompt-sync'^)^(^);
echo // 38^) Imprima impares entre inicio e fim. Se inicio maior que fim, troque-os. Default: 0 a 100.
echo function imprimirImpares^(inicio = 0, fim = 100^) {
echo     // TODO
echo }
) > exercicio38.js

echo Criando exercicio39.js...
(
echo const prompt = require^('prompt-sync'^)^(^);
echo // 39^) Troque elementos de dois vetores de mesmo tamanho sem variavel auxiliar.
echo function trocarVetores^(vA, vB^) {
echo     // TODO
echo }
) > exercicio39.js

echo Criando exercicio40.js...
(
echo const prompt = require^('prompt-sync'^)^(^);
echo // 40^) Conceitos de notas: 0-4.9 D, 5-6.9 C, 7-8.9 B, 9-10 A.
echo function conceitoNotas^(notas^) {
echo     // TODO
echo }
) > exercicio40.js

echo ==================================================
echo    FINALIZADO! Arquivos 33 a 40 criados.
echo ==================================================
pause