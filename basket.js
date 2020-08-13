var johnPoints = (89 + 120 + 103) / 3
var markPoints = (116 + 94 + 123) / 3
var maryPoints = (97 + 134 + 105) / 3

if (johnPoints > markPoints && johnPoints > maryPoints){
  console.log("john team wins with " + johnPoints + " points!!")
}
else if(johnPoints < markPoints && markPoints > maryPoints){
  console.log("mark team wins with " + markPoints + " points!!")
}
else if(maryPoints > johnPoints && maryPoints > markPoints){
  console.log("mary team wins with " + maryPoints + " points!!")
}
else{
  console.log(`There's an draw !!, with john points : ${johnPoints} , mark points ${markPoints} and mary with ${markPoints}`)
}