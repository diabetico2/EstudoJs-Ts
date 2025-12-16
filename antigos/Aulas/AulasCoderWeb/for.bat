@echo off
chcp 65001 >nul
title Gerador de Exercicios JS
echo ==========================================
echo      GERADOR DE EXERCICIOS JAVASCRIPT
echo ==========================================
echo.
echo Criando pasta "Lista_Exercicios_JS"...

if not exist "Lista_Exercicios_JS" mkdir "Lista_Exercicios_JS"
cd "Lista_Exercicios_JS"

echo Gerando arquivos de 01 a 40...

:: Exercicio 01 [cite: 3]
echo /* 01) Crie uma funcao que dado dois valores (passados como parametros) mostre no console a soma, subtracao, multiplicacao e divisao desses valores. */ > exercicio01.js

:: Exercicio 02 [cite: 4, 6]
echo /* 02) Os triangulos podem ser classificados em 3 tipos quanto ao tamanho de seus lados: Equilatero, Isosceles e Escaleno. Crie uma funcao que recebe os comprimentos dos tres lados de um triangulo e retorne sua classificacao quanto ao tamanho de seus lados. */ > exercicio02.js

:: Exercicio 03 [cite: 8]
echo /* 03) Crie uma funcao que recebe dois parametros, base e expoente, e retorne a base elevada ao expoente. */ > exercicio03.js

:: Exercicio 04 [cite: 9, 10]
echo /* 04) Crie uma funcao que ira receber dois valores, o dividendo e o divisor. A funcao devera imprimir o resultado e o resto da divisao destes dois valores. */ > exercicio04.js

:: Exercicio 05 [cite: 15]
echo /* 05) Desenvolva uma funcao JavaScript para que ela receba um valor como 0.30000000000000004 e retorne R$0,30 (observe a virgula e o ponto). */ > exercicio05.js

:: Exercicio 06 [cite: 16, 17]
echo /* 06) Elabore duas funcoes que recebem tres parametros: capital inicial, taxa de juros e tempo de aplicacao. A primeira funcao retornara o montante da aplicacao financeira sob o regime de juros simples e a segunda retornara o valor da aplicacao sob o regime de juros compostos. */ > exercicio06.js

:: Exercicio 07 [cite: 19, 21]
echo /* 07) Elabore uma funcao cujo objetivo e resolver a formula de Bhaskara. Retorne um vetor com os dois resultados. Caso o delta seja negativo, retorne 'Delta e negativo'. */ > exercicio07.js

:: Exercicio 08 [cite: 24]
echo /* 08) Dada uma lista string = 'pontuacao1 pontuacao2 pontuacao3...', escreva uma funcao que ao recebe-la ira comparar os valores um a um e ira retornar um vetor com o numero de vezes que ele bateu seu recorde de maior numero de pontos e quando fez seu pior jogo. */ > exercicio08.js

:: Exercicio 09 [cite: 30, 31]
echo /* 09) Construa uma funcao para um sistema de notas de uma instituicao que possui a seguinte politica de classificacao: Todo aluno recebe uma nota de 0 a 100. Alunos com nota abaixo de 40 sao reprovados. As notas possuem regra de arredondamento (verificar enunciado completo). */ > exercicio09.js

:: Exercicio 10 [cite: 34]
echo /* 10) Crie uma funcao que verifica se um numero inteiro passado como parametro e divisivel por 3 e retorne true ou false. */ > exercicio10.js

:: Exercicio 11 [cite: 40]
echo /* 11) Elabore uma funcao que recebe um ano e calcula se ele e ano bissexto, imprimindo no console a mensagem e retornando true ou false. */ > exercicio11.js

:: Exercicio 12 [cite: 41]
echo /* 12) Faca um algoritmo que calcule o fatorial de um numero. */ > exercicio12.js

:: Exercicio 13 [cite: 42, 43]
echo /* 13) Crie um programa que exibe se um dia e dia util, fim de semana ou dia invalido dado o numero referente ao dia. Considere que domingo e o dia 1 e sabado e o dia 7. Utilize a estrutura Switch. */ > exercicio13.js

:: Exercicio 14 [cite: 44]
echo /* 14) Crie uma estrutura condicional switch que receba uma string com o nome de uma fruta e que possua tres casos: Maca, Kiwi e Melancia. */ > exercicio14.js

:: Exercicio 15 [cite: 47, 49]
echo /* 15) Um homem decidiu ir a uma revenda comprar um carro. Ele deseja comprar um carro hatch, e a revenda possui, alem de carros hatch, sedans, motocicletas e caminhonetes. Utilizando uma estrutura switch, caso o comprador queira o hatch, retorne: 'Compra efetuada com sucesso'. Nas outras opcoes, retorne: 'Tem certeza que nao prefere este modelo?'. */ > exercicio15.js

:: Exercicio 16 [cite: 52]
echo /* 16) Utilizando a estrutura do Switch faca um programa que simule uma calculadora basica. O programa recebe como parametros dois valores numericos e uma string referente a operacao e a realize com os valores numericos na ordem que foram inseridos. */ > exercicio16.js

:: Exercicio 17 [cite: 58]
echo /* 17) Faca uma funcao que leia o plano de trabalho e o salario atual de um funcionario e calcula e imprime o seu novo salario. Use a estrutura switch e faca um caso default que indique que o plano e invalido. */ > exercicio17.js

:: Exercicio 18 [cite: 60]
echo /* 18) Faca um programa que leia um numero entre 0 e 10, e escreva este numero por extenso. Use o comando switch. */ > exercicio18.js

:: Exercicio 19 [cite: 64]
echo /* 19) Implemente uma funcao que receba como parametros o codigo do item pedido, a quantidade e calcule o valor a ser pago por aquele lanche. Considere que a cada execucao somente sera calculado um item. Use o comando switch. */ > exercicio19.js

:: Exercicio 20 [cite: 67]
echo /* 20) Crie um programa para informar quais e quantas notas sao necessarias para entregar o minimo de cedulas para um determinado valor informado pelo usuario considerando notas de R$ 100, R$ 50, R$ 10 e R$ 5 e R$ 1. Seu programa deve mostrar apenas as notas utilizadas. */ > exercicio20.js

:: Exercicio 21 [cite: 69]
echo /* 21) Criar um programa para identificar o valor a ser pago por um plano de saude dada a idade do conveniado considerando que todos pagam R$ 100 mais um adicional conforme a tabela descrita no enunciado. */ > exercicio21.js

:: Exercicio 22 [cite: 73]
echo /* 22) Criar uma funcao para calcular o valor a ser pago de anuidade de uma associacao. A funcao recebe como parametro um inteiro que representa o mes (1-12) que foi paga e o valor da anuidade. A anuidade deve ser paga no mes de janeiro. Por mes, e cobrado 5 por cento de juros (sob o regime de juros compostos). */ > exercicio22.js

:: Exercicio 23 [cite: 77, 78]
echo /* 23) Escreva um algoritmo que leia o codigo de um aluno e suas tres notas. Calcule a media ponderada do aluno, considerando que o peso para a maior nota seja 4 e para as duas restantes, 3. Mostre o codigo, notas, media e status (Aprovado/Reprovado). */ > exercicio23.js

:: Exercicio 24 [cite: 79]
echo /* 24) Crie um programa que imprima 11 vezes a frase 'Hello World!' utilizando uma estrutura de repeticao while. */ > exercicio24.js

:: Exercicio 25 [cite: 80]
echo /* 25) Escrever um programa para exibir os numeros de 1 ate 50 na tela. */ > exercicio25.js

:: Exercicio 26 [cite: 81]
echo /* 26) Fazer um programa para encontrar todos os pares entre 1 e 100. */ > exercicio26.js

:: Exercicio 27 [cite: 82]
echo /* 27) Construa uma funcao que receba como parametros as alturas e as taxas de crescimento anuais de duas criancas e calcule se existe uma crianca menor, caso exista se a crianca menor ultrapassara a maior e em quantos anos isso acontecera. */ > exercicio27.js

:: Exercicio 28 [cite: 84]
echo /* 28) Ler um vetor de numeros inteiros e imprimir quantos sao pares e quantos sao impares. */ > exercicio28.js

:: Exercicio 29 [cite: 85]
echo /* 29) Utilizando a estrutura de repeticao for, faca uma funcao que percorra um vetor e conte quantos numeros deste vetor estao no intervalo [10,20] e quantos deles estao fora do intervalo. */ > exercicio29.js

:: Exercicio 30 [cite: 86]
echo /* 30) Escreva um algoritmo que percorre um vetor de inteiros e defina o maior e menor valor dentro do vetor. */ > exercicio30.js

:: Exercicio 31 [cite: 87]
echo /* 31) Escrever um algoritmo que percorre um vetor de inteiros, conta quantos numeros negativos ha nesse vetor e imprime a quantidade no console. */ > exercicio31.js

:: Exercicio 32 [cite: 88]
echo /* 32) Construir um algoritmo que calcule a media aritmetica dos valores de um vetor de inteiros. */ > exercicio32.js

:: Exercicio 33 [cite: 89, 90]
echo /* 33) Crie tres vetores, chamados vetorInteiro, vetorString e vetorDouble. Cada um destes vetores devera conter quatro valores. Utilize a funcao de uniao concat() de duas maneiras diferentes para unir os vetores, e mostre o resultado no console. */ > exercicio33.js

:: Exercicio 34 [cite: 92]
echo /* 34) Construa uma funcao que recebera duas Strings de tamanhos variados e que retornara True ou False caso todos os caracteres (independentemente de ser maiusculo ou minusculo) estejam contidos em ambas palavras. */ > exercicio34.js

:: Exercicio 35 [cite: 93, 94]
echo /* 35) Crie dois vetores chamados vetorPilha e vetorAdiciona. Inicialmente, o vetorPilha contera cinco elementos inteiros: [1, 2, 3, 4, 5]. Voce devera adicionar os valores contidos no vetorAdiciona [6, 7, 8, 9, 10] ao vetor pilha e mostra-los no console. */ > exercicio35.js

:: Exercicio 36 [cite: 97, 98]
echo /* 36) Crie duas funcoes que recebem dois parametros, um vetor com apenas valores numericos e um numero inteiro. Faca com que a primeira funcao retorne outro vetor que sera resultado da multiplicacao de cada elemento pelo numero passado como parametro. A segunda funcao fara o mesmo da primeira se e somente se o valor do elemento for maior que 5. */ > exercicio36.js

:: Exercicio 37 [cite: 100]
echo /* 37) Escreva duas funcoes, uma para progressao aritmetica e uma para progressao geometrica que recebam como parametros um numero n (numero de termo), a1 (o primeiro termo) e r (a razao) e escreva os n termos, bem como a soma dos elementos. */ > exercicio37.js

:: Exercicio 38 [cite: 101, 102]
echo /* 38) Escreva uma funcao que receba dois parametros inicio e fim. Essa funcao deve imprimir todos os numeros impares que estao entre esses valores. Por padrao os valores devem ser 0 para inicio e 100 para fim. */ > exercicio38.js

:: Exercicio 39 [cite: 105]
echo /* 39) Crie uma funcao que receba dois vetores de igual tamanho e troque seus elementos de modo que o primeiro elemento do vetorA passe a ser o primeiro elemento do vetorB e vice versa e assim sucessivamente. Faca a troca sem utilizar uma variavel auxiliar. */ > exercicio39.js

:: Exercicio 40 [cite: 107]
echo /* 40) Faca uma funcao que receba como parametro um vetor de notas e mostre os conceitos de cada uma de modo que de 0,0 a 4,9 seja atribuido o conceito D, de 5,0 a 6,9 seja atribuido o conceito C, de 7,0 a 8,9 o conceito B e de 9,0 a 10,0 o conceito A. */ > exercicio40.js

echo.
echo ==========================================
echo       ARQUIVOS CRIADOS COM SUCESSO!
echo ==========================================
echo A pasta "Lista_Exercicios_JS" contem 40 arquivos JS prontos para edicao.
pause