import _ from 'lodash';
import startBrainGame from '../index.js';

const rulesOfGame = 'Find the greatest common divisor of given numbers.';

const generateRound = () => {
  const number1 = _.random(1, 51);
  const number2 = _.random(1, 51);
  const question = `${number1} ${number2}`;

  const nod = (a, b) => {
    if (b !== 0) {
      const c = a % b;
      return nod(b, c);
    }
    return a;
  };
  const answer = `${nod(number1, number2)}`;
  return [question, answer];
};

const gcdGame = () => startBrainGame(rulesOfGame, generateRound);

export default gcdGame;
