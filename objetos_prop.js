/* Objetos e suas propriedades */

var guto = {
  firstName: 'Gustavo',
  lastName: 'Gomes',
  birthYear: 2000,
  job: 'Developer',
  isHeMarried: false,
  family: ['delso', 'joyce', 'guelso']
};

/* Mostrando dados do objeto */
console.log(guto.firstName);
console.log(guto['lastName']);
var verdade = 'isHeMarried';
console.log(guto[verdade]);
/////////////////////////

/* Inserindo dados no objeto */
guto.job = "Animator";
guto['firstName'] = "Isaque";
console.log(guto);
/////////////////////////

/* Criando objeto */
var nucleo = new Object();  // or- var nucleo = {}
nucleo.ligaMotor = true;
nucleo['year'] = 1982;