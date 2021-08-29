let traduzindoParaRomano = [
    [1000, 'M'],
    [900, 'CM'],
    [500, 'D'],
    [400, 'CD'],
    [100, 'C'],
    [90, 'XC'],
    [50, 'L'],
    [40, 'XL'],
    [10, 'X'],
    [9, 'IX'],
    [5, 'V'],
    [4, 'IV'],
    [1, 'I']
  ];

function Converção(numero) {
  if (numero === 0) {
    return '';
  }
  for (let n = 0; n < traduzindoParaRomano.length; n++) {
    if (numero >= traduzindoParaRomano[n][0]) {
      return traduzindoParaRomano[n][1] + Converção(numero - traduzindoParaRomano[n][0]);
    }
  }
}

console.log(Converção(27))