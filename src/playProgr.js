import readlineSync from 'readline-sync';
import getUserName from './cli';

const ROUNDS_NUMBER = 3;
const MAX_FIRST_NUMBER = 5;
const MAX_PROG_BASE = 10;
const MIN_PROG_SIZE = 5;
const ADD_PROG_SIZE = 7;

const playProgr = () => {
  const name = getUserName('What number is missing in the progression?');

  let i = ROUNDS_NUMBER;
  do {
    const firstNumber = Math.trunc(Math.random() * MAX_FIRST_NUMBER);
    const progBase = Math.trunc(Math.random() * MAX_PROG_BASE);
    const progSize = Math.trunc(Math.random() * ADD_PROG_SIZE) + MIN_PROG_SIZE;
    const omitedPosition = Math.trunc(Math.random() * (progSize - 1));
    const progression = [];
    for (let j = 0; j < progSize; j += 1) {
      progression.push(firstNumber + progBase * j);
    }
    const correctAnswer = progression[omitedPosition];
    progression[omitedPosition] = '..';
    console.log('Question: ', progression.join(' '));

    const answer = Number(readlineSync.question('Your answer: '));
    const correct = answer === correctAnswer;
    if (!correct) {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      console.log(`Let's try again, ${name}!`);
      return false;
    }
    console.log('Correct!');
    i -= 1;
  } while (i > 0);
  console.log(`Congratulations, ${name}!`);
  return true;
};

export default playProgr;
