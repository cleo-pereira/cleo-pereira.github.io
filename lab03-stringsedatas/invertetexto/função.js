window.onload= function(){
    let resultado = document.getElementById("inverter");

    resultado.addEventListener("click", inverteOpostos);
};

function inverteOpostos(){
    var inv= document.getElementById("texto").value
    , resultado= document.getElementById("resultado")
    , parte1, parte2;
    parte1 = inv.split("");
    parte2= parte1.reverse()
    resultado.textContent = parte2;
}