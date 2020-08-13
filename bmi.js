var johnHeight = prompt('John height: ');
var johnMass = prompt('John mass: ');
var markHeight = prompt('mark height: ');
var markMass = prompt('mark mass: ');

var johnBmi = johnMass / (johnHeight * johnHeight)
var markBmi = markMass / (markHeight * markHeight)

finalBmi = markBmi >= johnBmi

if (markBmi > johnBmi){
console.log("Mark's bmi is higher than john's")
}
else{
  console.log("john's bmi is higher than mark's")
}