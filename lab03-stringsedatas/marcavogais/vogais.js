window.onload= function(){
    let resultado = document.getElementById("marcar");

    resultado.addEventListener("click", marcaVogais);
};

function marcaVogais(){
    var inv = new String(document.getElementById("texto").value)
    , parte1;
    parte1 = inv.split("");
    for(let i = 0; i <= parte1.length; i++){
        if(parte1[i] == 'A' || parte1[i] == 'a'){
            parte1[i] = parte1[i].bold();
        }else{
            if(parte1[i] == 'U' || parte1[i] == 'u'){
                parte1[i] = parte1[i].bold();
        }
        document.getElementById("resultado").innerHTML = parte1.join('');
}
    }
}