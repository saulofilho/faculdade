// A - Com os conhecimentos adquiridos até agora, 
// desenvolva um algoritmo em pseudocódigo que solicite ao usuário 10 números 
// e calcule a multiplicação desses números digitados pelo usuário. 
// Apresente o resultado da multiplicação na tela.

Algoritmo "RepitaMulti10"

Var
    i, multi, num: inteiro

Inicio
    multi <- 1
    REPITA
        ESCREVAL("Digite um número do tipo inteiro, por favor: ")
        LEIA(num)
        multi <- multi * num
        i <- i + 1
    ATE i >= 10
    ESCREVAL("Resultado da Multiplicação: ", multi, ".")

Fimalgoritmo

// ================================================================ //

// B - Agora desenvolva um algoritmo em pseudocódigo que utilize uma estrutura de repetição diferente 
// (da que você utilizou na letra A) para resolver o mesmo problema do exercício A.
// Após desenvolver seu código conforme a descrição acima, copie e cole na caixa de texto 
// (a resposta da Atividade Prática sempre será em código (pseudocódigo))

Algoritmo "ParaMulti10"

Var
    i, multi, num: inteiro

Inicio
    multi <- 1
    PARA i DE 1 ATE 10 FACA
        ESCREVAL("Digite um número do tipo inteiro, por favor: ")
        LEIA(num)
        multi <- multi * num
        i <- i + i
    FIMPARA
    ESCREVAL("Resultado da Multiplicação: ", multi, ".")

Fimalgoritmo
