function checkNumber(userNumber,generateNumber,game,count){
  if(userNumber==generateNumber){
    console.log ('You guessed the number');
    return game = false;
  } else if (userNumber>generateNumber) {
    console.log ('Your number more');
    return game = true;
  } else if (userNumber<generateNumber) {
    console.log ('Your number less');
    
    return game = true;
  } else {
    count--;
    console.log ('Your number wrong');
    return game = true;
  } 
}
function guessTheNumber(userNumber){
  let game = true;
  const generateNumber=7;
  let count = 0;
  while(game){
    game=checkNumber(userNumber,generateNumber,game,count);
    if(game===true){
      count++;
      userNumber=Number(prompt('enter number :') );
    }
  }
  console.log ('You win ');
  console.log ('Attempts: '+count);
}




guessTheNumber(5);
