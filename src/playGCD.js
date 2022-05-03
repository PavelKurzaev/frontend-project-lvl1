import readlineSync from 'readline-sync';
import getUserName from './cli.js';

const MAX_NUMBER = 100;
const ROUNDS_NUMBER = 3;

const gcd = (a, b) => {
  let a1 = Math.abs(a);
  let b1 = Math.abs(b);
  if (b1 > a1) {
    const temp = a1;
    a1 = b1;
    b1 = temp;
  }
  while (true) {
    if (b1 === 0) return a1;
    a1 %= b1;
    if (a1 === 0) return b1;
    b1 %= a1;
  }
};

const playGCD = () => {
  const name = getUserName('Find the greatest common divisor of given numbers.');

  let i = ROUNDS_NUMBER;
  do {
    const number1 = Math.trunc(Math.random() * MAX_NUMBER);
    const number2 = Math.trunc(Math.random() * MAX_NUMBER);
    const correctAnswer = gcd(number1, number2);

    const answer = Number(readlineSync.question(`Question: ${number1} ${number2}\nYour answer: `));
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

export default playGCD;
