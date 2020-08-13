//criando novo array 
var core = new Array // ou []
console.log(typeof core) // saber qual o tipo é esta variavel 
core = ['Gustavo','Joyce']

//mutação de dados do array
console.log(core.length)
console.log(core)
core[core.length] = 'Isis' //o valor 'isis' é adicionado de acordo com a quantidade de numeros no array, que no caso era 1 graças aos dois valore 0=gustavo 1=joyce
console.log(core)

//methods to array

core.push('Zephyrus') // Adiciona um valor no fim do array 
core.unshift('Gomes') // Adiciona um valor no inicio do array
console.log(core)
core.pop() // apaga o ultimo valor do array 'Zephyrus'
console.log(core)
core.shift() // apaga o primeiro valor do array 'Gomes'
console.log(core)
console.log(core.indexOf('Gustavo')) // procura a posição do valor indicado, dentro do array.

var proof = core.indexOf('Batman') === -1 ? 'Gustavo é o batman' : 'Batman está no array ????' //devolve um valor -1 caso não encontrar o local do requisitado
console.log(proof)
