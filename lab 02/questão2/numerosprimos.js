function NumerosPrimos(num1, num2) {
    // tem duas opções: se passarem apenas 1 parâmetro, será o número de primos da lista
    // se passarem 2 parâmetros, será o intervalo de primos
    let VetorDePrimos = new Array();
    //independente das opções, vc precisará de um array para armazenar os primos
    // caso 1   
    if (num2 == undefined) {
        VetorDePrimos.length = num1;
        for(let n = 0; n < num1; n++){
            
        }
    }    
    else {       
        // aqui, os parâmetros representam o primeiro número abaixo ou igual ao primeiro primo e o primeiro número acima ou igual ao último primo 
        // a primeira coisa é testar se num1 é menor ou igual a num2; caso contrário, entregar o array vazio
        // se estiver ok, começar a iteração verificando quais números entre num1 e num2 são primos     
    }
}