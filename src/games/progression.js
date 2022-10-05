import _ from 'lodash';
import startBrainGame from '../index.js';

const rulesOfGame = 'What number is missing in the progression?';

const generateRound = () => {
  const array = [];
  let a = _.random(1, 50);
  const p = _.random(2, 5);

  for (let i = 0; i < _.random(5, 11); i += 1, a += p) {
    array[i] = a;
  }

  const randomNumber = _.sample(array);
  const array2 = array;

  for (let i = 0; i < array2.length; i += 1) {
    if (array2[i] === randomNumber) {
      array2[i] = '..';
    }
  }
  const question = `${array2.join(' ')}`;
  const answer = `${randomNumber}`;
  return [question, answer];
};

const progressionGame = () => startBrainGame(rulesOfGame, generateRound);

export default progressionGame;
