function checkNumber(userNumber,generateNumber,game){
  if (userNumber>generateNumber) {
    console.log ('Your number more');
    return game = true;
  } else if (userNumber<generateNumber) {
    console.log ('Your number less');
    
    return game = true;
  } else {
    console.log ('You guessed the number');
    return game = false;
  } 
}
function guessTheNumber(userNumber){
  let game = true;
  const generateNumber=7;
  let count = 0;
  while(game){
    game=checkNumber(userNumber,generateNumber,game);
    if(game===true){
      count++;
      userNumber=Number(prompt('enter number') );
    }
  }
  console.log ('You win ');
  console.log ('Attempts: '+count);
}



guessTheNumber(5);