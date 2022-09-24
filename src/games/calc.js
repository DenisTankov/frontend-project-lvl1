import _ from 'lodash';
import startBrainGame from '../index.js';

const rulesOfGame = 'What is the result of the expression?';

const generateRound = () => {
  const operations = ['+', '-', '*'];
  const operator = _.sample(operations);
  const number1 = _.random(10, 30);
  const number2 = _.random(1, 10);
  const question = `${number1} ${operator} ${number2}`;

  const correctValue = () => {
    switch (operator) {
      case '+':
        return number1 + number2;
      case '-':
        return number1 - number2;
      case '*':
        return number1 * number2;
      default:
        return null;
    }
  };
  const answer = `${correctValue(operator)}`;
  return [question, answer];
};

const calcGame = () => startBrainGame(rulesOfGame, generateRound);

export default calcGame;
