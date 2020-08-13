function calculateTriangles(sideA,sideB,baseY){

  switch (true) {
    case sideA === sideB && sideB != baseY: // verifica se é um triangulo isosceles
      return 'É um triângulo isósceles' 

    case sideA === sideB && sideB === baseY: // verifica se é um triangulo equilatero
      return 'É um triângulo Equilatero'

    case sideA != sideB && sideB != baseY && sideA != baseY: // verifica se é um triangulo escaleno
      return 'É um triângulo Escaleno'

    default:
      return 'Esse triângulo não existe'
  } 
}

let objIsoceles = calculateTriangles(2,2,6)
let objEquilatero = calculateTriangles(5,5,5)
let objEscaleno = calculateTriangles(3,4,7)
let objInvalido = calculateTriangles(3,0,0) // teste para inválidação

console.log(objIsoceles)
console.log(objEquilatero)
console.log(objEscaleno)
console.log(objInvalido)