//funções de afirmação ou expressão. statements or expressions


//funções de afirmação não trazem um valor imediato, como por exemplo
function soma(a, b){
  res = a + b
  return res;
}

//funções de expressão trazem o valor imediato
var somado = function plus(a, b){
  res = a + b
  return res; 
}

console.log(somado(5,5) + ' Função de expressão')

var calc = soma(4,5)
console.log(calc + ' Função de afirmação')
