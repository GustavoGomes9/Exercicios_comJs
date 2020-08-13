// BMI CHALLENGE 

var ninjaChoji = {
name: 'choji',
mass: 120,
height: 1.40,
calcBmi: function(){
this.bmi = this.mass / (this.height * this.height)
  }
};

ninjaChoji.calcBmi();
console.log(ninjaChoji);

///////////////////////////////

var ninjaSai = {
  name: 'Sai',
  mass: 60,
  height: 1.76,
  calcBmi: function(){
  this.bmi = this.mass / (this.height * this.height)
    }
};

ninjaSai.calcBmi();
console.log(ninjaSai);

//////////////////////////////

function aposta(desc1,bm1,desc2,bm2){
  if(bm1 > bm2){
  console.log(`${desc1} Wins ${desc2} with a total BMI of ${bm1} `)
  }
  else if(bm2 > bm1){
  console.log(`${desc2} Wins with ${bm2}`)
  }
  else{
    console.log(`${desc1} and ${desc2} DRAW`)
  }
};

console.log(aposta(ninjaChoji['name'],ninjaChoji['bmi'],ninjaSai['name'],ninjaSai['bmi']));