Algoritmo "ProcedimentoMultiplicacao"

procedimento multiplica(x,y:inteiro)
var
    aux: inteiro
inicio
    aux <- x * y
    res <- aux
    ESCREVAL("Resultado da Multiplicação: ", res, ".")
fimprocedimento

Var
res, n, m: inteiro

Inicio
    ESCREVAL("Digite um número do tipo inteiro, por favor: ")
    LEIA(n)
    ESCREVAL("Digite outro número do tipo inteiro, por favor: ")
    LEIA(m)
    multiplica(n,m)
Fimalgoritmo
