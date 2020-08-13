var age = 18

age >= 18 ? console.log("drinks beer. ") : console.log("drinks juice") // Ternary operator

//switch case 
var a = 2
var b = 2 
var y = 2

switch (true) {
  case a == b && b == y:
    console.log('triangulo equilatero')
    break;

  case a == 2 && b == 2 && y == 3:
    console.log('triangulo isoceles')
    break;

  default:
    console.log('Não existe um numero valido')
    break;
}