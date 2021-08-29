function saqueminimo (valor){
    var cedulas, resto;
        if (valor >= 100){
            cedulas = Math.floor(valor/100);
            console.log("100: ", cedulas);
            resto = valor % 100;

            if(resto >= 50){
                cedulas = Math.floor(resto/50);
                console.log("50:  ", cedulas)
                resto = resto % 50;

                if(resto >= 20){
                    cedulas = Math.floor(resto/20);
                    console.log("20:  ", cedulas); 
                    resto = resto % 20;

                    if(resto >= 10){
                        cedulas = Math.floor(resto/10);
                        console.log("10:  ", cedulas);  
                        resto = resto % 10;
                            
                        if(resto >= 5){
                            cedulas = Math.floor(resto/5);
                            console.log("5:   ", cedulas);  
                            resto = resto % 5;

                            if(resto >= 2){
                                cedulas = Math.floor(resto/2);
                                console.log("2:   ", cedulas);                                     
                            }
                        }
                    }
                }
            }
 
        }
    }

saqueminimo(600);