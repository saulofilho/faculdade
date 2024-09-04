// const carro = {
//     modelo: 'Audi A3',
//     marca: 'Audi',
//     ano: 2020
// };

// for (let caracteristica in carro) {
//     console.log(caracteristica + ': ' + carro[caracteristica]);
// }

// ======================================================================================================

// const carros = [
//     { modelo: 'Audi A3', marca: 'Audi', ano: 2020 },
//     { modelo: 'Jeep Compact', marca: 'Jeep', ano: 2021 }
// ];

// for (let indice in carros) {
//     console.log('Carro ' + (parseInt(indice) + 1) + ':');
//     for (let atributo in carros[indice]) {
//         console.log(atributo + ': ' + carros[indice][atributo]);
//     }
//     console.log('-----');
// }

// ======================================================================================================

const numeros = [2, 4, 6, 8, 10];
let soma = 0;

for (let i = 0; i < numeros.length; i++) {
  if (numeros[i] % 2 === 0) {
    soma += numeros[i];
  }
}

console.log(soma);
