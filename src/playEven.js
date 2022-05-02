import readlineSync from 'readline-sync';
import getUserName from './cli.js';

const MAX_NUMBER = 100;
const ROUNDS_NUMBER = 3;

const playEven = () => {
  const name = getUserName('Answer "yes" if the number is even, otherwise answer "no".');

  let i = ROUNDS_NUMBER;
  do {
    const number = Math.trunc(Math.random() * MAX_NUMBER);
    const answer = readlineSync.question(`Question: ${number}\nYour answer: `);
    const correct = (number % 2 === 0 && answer === 'yes') || (number % 2 === 1 && answer === 'no');
    if (!correct) {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      console.log('Let\'s try again, Sam!');
      return false;
    }
    console.log('Correct!');
    i -= 1;
  } while (i > 0);
  console.log(`Congratulations, ${name}!`);
  return true;
};

export default playEven;
