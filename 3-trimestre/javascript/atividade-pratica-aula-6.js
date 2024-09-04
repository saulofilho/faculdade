// Atividade Prática
// Título da Prática: Estrutura de decisão
// Objetivos: Compreender a implementação de estrutura de decisão.
// Materiais, Métodos e Ferramentas: Para realizar esta prática vamos utilizar o Visual Studio Code

// Prática
// Escreva um código em que, após o cliente solicitar a escolha da bebida, a opção ‘switch’ deve avaliar a opção selecionada 
// e atribuir o valor correspondente à variável ‘valor’. Caso o cliente escolha uma opção inválida, uma mensagem informativa é exibida, 
// indicando que a escolha deve ser feita entre café, leite ou chá. Por fim, se uma opção válida for selecionada, 
// exibimos uma mensagem personalizada informando o nome da bebida escolhida e o valor a ser pago, formatado com duas casas decimais.

let bebidaEscolhida;
let valor;
const bebidas = ['café', 'leite', 'chá']

switch (bebidaEscolhida) {
    case bebidas[0]:
        valor = 2.00;
        console.log(`A bebida escolhida foi o café. O valor a ser pago é R$ ${valor.toFixed(2)}`);
        break;
    case bebidas[1]:
        valor = 3.00;
        console.log(`A bebida escolhida foi o leite. O valor a ser pago é R$ ${valor.toFixed(2)}`);
        break;
    case bebidas[2]:
        valor = 1.50;
        console.log(`A bebida escolhida foi o chá. O valor a ser pago é R$ ${valor.toFixed(2)}`);
        break;
    default:
        console.log('Opção inválida. Por favor, escolha entre café, leite ou chá.');
}
