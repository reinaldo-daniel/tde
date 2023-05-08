// 1 -> Escreva na tela todos os números pares de 0 a 100

// function numPar(){
//     for(let i=0;i<=100;i++) {
//        if(i%2 === 0) {
//             console.log(`${i}`);
//        }
//    };
// }

// numPar()

// 2 -> Criar um algoritmo que percorre um array de números qualquer e retorna a soma total desses números

// const array = [4,5,6,2,5];
// let soma = 0;

// array.map((index) => {
//     soma+=index;
// })

// console.log(soma);

// 3 -> Crie uma função que remova todos os números negativos de um array

// const array = [-1, 1, -2, 2, -3, 3].filter((num) => {
//     return num>=0;
// });

// console.log(array);

// 4 -> Percorra um array de numeros qualquer.. e crie um novo array com todos os numeros do primeiro multiplicado por 2

// const array = [1, 2, 3, 4, 5].map((index) => {
//     console.log(index*2); 
// })

// [[Bonus]] -> Crie uma função que soma dois numeros e devolve uma Promise. Caso a soma seja Par o valor deve ser resolvido e caso seja Impar deve ser rejeitado

// async function soma(a,b) {
//     const soma = await a + b;
//     if(soma%2 != 0) {
//         throw new Error()
//     }
// }

// soma(1, 5).then(res => {
//     console.log("Valor é par")
// }).catch(err => {
//     console.log("Valor é impar")
// })
