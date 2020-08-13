// Objets with methods 
var guto = {
  firstName: 'Gustavo',
  lastName: 'Gomes',
  birthYear: 2000, // this.birthYear == 2000
  calcAge: function(){
    this.age = 2020 - this.birthYear; // this.age == propriedade age: 20  
  }
};

guto.calcAge(); // instanciando o methodo
console.log(guto)