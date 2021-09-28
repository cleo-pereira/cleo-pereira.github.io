//questão 1

function soma(n1, n2){
    total = n1 + n2;
    console.log(total);
}
soma(4, 7);

//questão 2

function maioroumenor(n1, n2){
    if(n1 > n2){
        console.log(n1+" é maior que "+n2+".");
    }else if(n1 < n2){
        console.log(n2+" é maior que "+n1+".");
    }
}
maioroumenor(3, 5);

//questão 3

function ehprimo(numero){
    for(let divisor = 2; divisor < numero; divisor++){
        if (numero % divisor === 0){
            console.log(numero+ " não é primo.")
        }
    }
 console.log(numero+ " é primo.")
}
ehprimo(7);

//questão 4

function hipotenusa(cateto1, cateto2){
    let hipo;
    let h = (cateto1 ** 2) + (cateto2 ** 2);
    hipo = Math.sqrt(h);
    console.log(hipo);
}
hipotenusa(4, 3);

//questão 5



//questão 6

function paraCelsius(fahrenheit){
    let celsius = (fahrenheit - 32) / 9;
    celsius = celsius * 5;
    console.log(celsius);
}
paraCelsius(212);

//questão 7

function media(n1, n2, n3){
    let mediaFinal = ((n1 * 2) + (n2 * 3) + (n3 * 5)) / 10;
    console.log(mediaFinal);
}
media(7, 2, 3)