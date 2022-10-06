import _ from 'lodash';
import startBrainGame from '../index.js';

const rulesOfGame = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const generateRound = () => {
  const randomNumber = _.random(2, 100);
  const question = `${randomNumber}`;

  const isPrime = () => {
    for (let i = 2; i < randomNumber; i += 1) {
      if (randomNumber % i === 0) {
        return 'no';
      }
    }
    return 'yes';
  };
  const answer = `${isPrime()}`;
  return [question, answer];
};

const primeGame = () => startBrainGame(rulesOfGame, generateRound);

export default primeGame;
