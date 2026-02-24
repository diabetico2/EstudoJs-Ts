@echo off
chcp 65001 >nul
mkdir RespostasJS
cd RespostasJS

(
echo function operacoes(a, b^) {
echo     console.log(a + b, a - b, a * b, a / b^);
echo }
echo operacoes(10, 5^);
) > 01_operacoes.js

(
echo function triangulo(a, b, c^) {
echo     if (a == b ^&^& b == c^) return 'Equilatero';
echo     if (a == b ^|^| b == c ^|^| a == c^) return 'Isosceles';
echo     return 'Escaleno';
echo }
echo console.log(triangulo(2, 2, 2^)^);
) > 02_triangulos.js

(
echo function divisao(dividendo, divisor^) {
echo     console.log("Resultado: " + Math.floor(dividendo / divisor^)^);
echo     console.log("Resto: " + (dividendo %% divisor^)^);
echo }
echo divisao(11, 4^);
) > 03_resto.js

(
echo function formatarDinheiro(valor^) {
echo     return `R$ ${valor.toFixed(2^).replace('.', ','^)}`;
echo }
echo console.log(formatarDinheiro(0.3000004^)^);
) > 04_dinheiro.js

(
echo function avaliarPontuacao(stringPontuacoes^) {
echo     let pontuacoes = stringPontuacoes.split(" "^).map(Number^);
echo     let quebraRecorde = 0;
echo     let piorJogo = 1;
echo     let maior = pontuacoes[0];
echo     let menor = pontuacoes[0];
echo.
echo     for (let i = 1; i ^< pontuacoes.length; i++^) {
echo         if (pontuacoes[i] ^> maior^) { maior = pontuacoes[i]; quebraRecorde++; }
echo         else if (pontuacoes[i] ^< menor^) { menor = pontuacoes[i]; piorJogo = i + 1; }
echo     }
echo     return [quebraRecorde, piorJogo];
echo }
echo console.log(avaliarPontuacao("10 20 20 8 25 3 0 30 1"^)^);
) > 05_recordes.js

(
echo function classificarAluno(nota^) {
echo     let notaCorrigida = arredondar(nota^);
echo     if (notaCorrigida ^>= 40^) console.log("Aprovado com " + notaCorrigida^);
echo     else console.log("Reprovado com " + notaCorrigida^);
echo }
echo function arredondar(nota^) {
echo     if (nota ^< 38^) return nota;
echo     if (nota %% 5 ^>= 3^) return nota + (5 - (nota %% 5^)^);
echo     return nota;
echo }
echo classificarAluno(84^);
) > 06_notas.js

(
echo function fatorial(numero^) {
echo     if (numero == 0^) return 1;
echo     return numero * fatorial(numero - 1^);
echo }
echo console.log(fatorial(5^)^);
) > 07_fatorial.js

(
echo function calculadora(v1, op, v2^) {
echo     switch (op^) {
echo         case '+': return v1 + v2;
echo         case '-': return v1 - v2;
echo         case '*': return v1 * v2;
echo         case '/': return v1 / v2;
echo         default: return 'Operacao invalida';
echo     }
echo }
echo console.log(calculadora(2, '+', 3^)^);
) > 08_calculadora.js

(
echo function sacarDinheiro(valorSaque^) {
echo     const notas = [100, 50, 10, 5, 1];
echo     let valor = valorSaque;
echo     for (let nota of notas^) {
echo         let qtd = Math.floor(valor / nota^);
echo         if (qtd ^> 0^) {
echo             console.log(`${qtd} nota(s^) de R$ ${nota}`);
echo             valor = valor %% nota;
echo         }
echo     }
echo }
echo sacarDinheiro(153^);
) > 09_cedulas.js

(
echo function calcularCrescimento(altura1, taxa1, altura2, taxa2^) {
echo     let anos = 0;
echo     while (altura1 ^< altura2^) {
echo         altura1 += taxa1;
echo         altura2 += taxa2;
echo         anos++;
echo     }
echo     console.log(anos);
echo }
echo calcularCrescimento(110, 10, 130, 5^);
) > 10_crescimento.js

(
echo function maiorMenor(vetor^) {
echo     let maior = vetor[0], menor = vetor[0];
echo     for (let i = 0; i ^< vetor.length; i++^) {
echo         if (vetor[i] ^> maior^) maior = vetor[i];
echo         if (vetor[i] ^< menor^) menor = vetor[i];
echo     }
echo     console.log(maior, menor^);
echo }
echo maiorMenor([10, 5, 7, 3, 1, 30]^);
) > 11_maiormenor.js

(
echo function contarNegativos(vetor^) {
echo     let qtd = 0;
echo     for(let i = 0; i ^< vetor.length; i++^) {
echo         if(vetor[i] ^< 0^) qtd++;
echo     }
echo     return qtd;
echo }
echo console.log(contarNegativos([10, -5, 7, -3, 1, -30]^)^);
) > 12_negativos.js

(
echo function mediaVetor(vetor^) {
echo     let soma = 0;
echo     for(let i=0; i^<vetor.length; i++^) {
echo         soma += vetor[i];
echo     }
echo     return soma / vetor.length;
echo }
echo console.log(mediaVetor([1, 2, 3, 4, 5]^)^);
) > 13_media.js

(
echo function compararStrings(s1, s2^) {
echo     return s1.toLowerCase(^).split(''^).sort(^).join(''^) === s2.toLowerCase(^).split(''^).sort(^).join(''^);
echo }
echo console.log(compararStrings("Amor", "Roma"^)^);
) > 14_strings.js

(
echo function multiplicarVetor(vetor, numero^) {
echo     return vetor.map(el =^> el * numero^);
echo }
echo function multiplicarSeMaiorQue5(vetor, numero^) {
echo     return vetor.map(el =^> el ^> 5 ? el * numero : el^);
echo }
echo console.log(multiplicarSeMaiorQue5([1, 6, 3, 8], 2^)^);
) > 15_multiplicacao.js

(
echo function trocarVetores(vetorA, vetorB^) {
echo     if (vetorA.length != vetorB.length^) return;
echo     for(let i = 0; i ^< vetorA.length; i++^) {
echo         let aux = vetorA[i];
echo         vetorA[i] = vetorB[i];
echo         vetorB[i] = aux;
echo     }
echo     console.log('Novo A: ' + vetorA^);
echo     console.log('Novo B: ' + vetorB^);
echo }
echo trocarVetores([1, 2, 3], [4, 5, 6]^);
) > 16_troca.js

echo ---------------------------------------------------
echo Respostas criadas na pasta "RespostasJS"!
pause