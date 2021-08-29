const numeros = [1, 2, 3, 4, 5];
let tamanho = numeros.length;

function sum(){
    soma = 0;
    for(let n = 0; n < tamanho; n++){
        soma = soma + numeros[n];
    }
    return soma;
}

sum();
console.log(soma)

function sumOdds(){
    somaodds = 0;
    for(let n = 0; n < tamanho; n++){
        if (numeros[n] % 2 != 0) {
            somaodds = somaodds + numeros[n];
        }
    }
    return soma;
}

sumOdds();
console.log(somaodds)

function product(){
    produto = 1;
    for(let n = 0; n < tamanho; n++){
        produto = produto * numeros[n];
    }
    return produto;
}

product();
console.log(produto)