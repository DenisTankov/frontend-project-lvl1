import readlineSync from 'readline-sync';

console.log('Welcome to the Brain Games!');
const userName = readlineSync.question('May I have your name? ');
console.log(`${'Hello'}, ${userName}!`);

const rightAnswer = (number) => {
  if (number % 2 === 0) return 'yes';
  return 'no';
};

const getRandomInt = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
};

const evenCheck = () => {
  let result = 0;
  console.log('Answer "yes" if the number is even, otherwise answer "no".');

  while (result < 3) {
    const randomNumber = getRandomInt(1, 100);
    console.log(`${'Question: '} ${randomNumber}`);
    const userAnswer = readlineSync.question('Your answer: ');
    if (randomNumber % 2 === 0 & userAnswer === 'yes') {
      console.log('Correct!');
      result += 1;
    } else if (randomNumber % 2 !== 0 & userAnswer === 'no') {
      console.log('Correct!');
      result += 1;
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${rightAnswer(randomNumber)}'.`);
      return console.log(`Let's try again, ${userName}!`);
    }
  }
  console.log(`${'Congratulations'}, ${userName}!`);
};
export default evenCheck;
