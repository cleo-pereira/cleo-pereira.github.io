function NumeroPrimo(numero){
    for(let divisor = 2; divisor < numero; divisor++){
        if (numero % divisor === 0){
            return false;
        }
    }
    return true;
}

function exibirNumerosPrimos(limite){
    for(let numero = 2; numero <= limite; numero++){
        if (NumeroPrimo(numero)) console.log(numero);
    }
}

exibirNumerosPrimos(1000);