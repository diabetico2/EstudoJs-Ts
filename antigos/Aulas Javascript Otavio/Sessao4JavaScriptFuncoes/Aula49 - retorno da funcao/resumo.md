📄 Resumo: Retorno da Função e Closures
Nesta aula, aprofundamos o funcionamento do return e descobrimos que funções podem retornar muito mais do que apenas números ou textos.

1. O Básico do Return

O comando return tem duas funções:

Retorna um valor para quem chamou a função.

Termina a execução da função imediatamente.

Se uma função não tiver return, ela retorna undefined por padrão.

2. Funções Retornando Funções

Como funções são valores no JavaScript, uma função pode criar e retornar outra função.

Isso é útil para criar "fábricas" de funções especializadas.

3. O Conceito de Closure (Fechamento)

É a "memória" da função.

Quando uma função interna é criada, ela "lembra" do ambiente onde nasceu.

Mesmo depois que a função "pai" termina de rodar, a função "filha" ainda tem acesso às variáveis do pai.

Exemplo Prático: No criaMultiplicador(2), o número 2 fica guardado na memória da função criada, pronto para ser usado quando fizermos a multiplicação depois.