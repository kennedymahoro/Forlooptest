let count = 0;
let Answer = [[1,2,3],[1,4,7],[1,5,9],[2,5,8],[4,5,6],[3,5,7],[3,6,9],[7,8,9]];
let playerX = [1,7,8,9];
let ArrayOfAnswerX = [];


for(let i=0;i<Answer.length;i++){
  for(let j=0;j<Answer[i].length;j++){
    for(let k=0;k<Answer[i].length;k++){
      if(Answer[i][k] == playerX[j]){
        ArrayOfAnswerX.push(playerX[j]);
      }
    }
  }
  if(ArrayOfAnswerX.length != 3){
    ArrayOfAnswerX.shift()
  }
  if(ArrayOfAnswerX.length == 3){
    console.log(ArrayOfAnswerX);
    console.log("You Win!!!");
    break;
  }
}
//console.log(ArrayOfAnswerX)
