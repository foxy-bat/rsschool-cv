
 // RACE DAY

let raceNumber = Math.floor(Math.random() * 1000);
const registeredEarly = true;
let age = 18;

if(age > 18 && registeredEarly) {
  raceNumber += 1000;
  console.log(`${raceNumber} will race at 9:30 am`);
} else if(age > 18 && !registeredEarly) {
  console.log(`${raceNumber} will race at 11:00 am`);
} else if(age < 18) {
  console.log(`${raceNumber} will race at 12:30 pm`);
} else {
  console.log('See the registration desk');
}

// MAGIC EIGHT BALL

let userName = ' ';
userName ? console.log(`Hello, ${userName}`) : console.log('Hello!');
let userQuestion = '"Will I be happy tomorrow?"';
console.log(`The user asked: ${userQuestion}`);
const randomNumber = Math.floor(Math.random() * 8);
let eightBall = '';

switch (randomNumber) {
  case  0 :
    eightBall = 'It is certain';
    break;
  case 1 :
    eightBall = 'It is decidedly so';
    break;
  case 2 :
   eightBall = 'Reply hazy try again';
    break;
  case 3 :
    eightBall = 'Cannot predict now';
    break;
  case 4 :
    eightBall = 'Do not count on it';
    break;
  case 5 :
    eightBall = 'My sources say no';
    break;
  case 6 :
   eightBall = 'Outlook not so good';
    break;
  case 7 :
    eightBall = 'Signs point to yes';
    break;
}
console.log(eightBall);
