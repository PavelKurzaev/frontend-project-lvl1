import readlineSync from 'readline-sync';
import getUserName from './cli.js';

const MAX_NUMBER = 1000;
const ROUNDS_NUMBER = 3;

const isPrime = (n) => {
  if (Number.isNaN(n) || !Number.isFinite(n) || n % 1) return false;
  if (n === 1) return true;
  if (n % 2 === 0) return (n === 2); // only '2' is prime
  const maxToTry = Math.sqrt(n);
  for (let i = 3; i <= maxToTry; i += 2) {
    if (n % i === 0) return false;
  }
  return true;
};

const playPrime = () => {
  const name = getUserName('Answer "yes" if given number is prime. Otherwise answer "no".');

  let i = ROUNDS_NUMBER;
  do {
    const number = Math.trunc(Math.random() * MAX_NUMBER);
    const answer = readlineSync.question(`Question: ${number}\nYour answer: `);
    const correct = (isPrime(number) && answer === 'yes') || (!isPrime(number) && answer === 'no');
    if (!correct) {
      console.log(`Let's try again, ${name}!`);
      return false;
    }
    console.log('Correct!');
    i -= 1;
  } while (i > 0);
  console.log(`Congratulations, ${name}!`);
  return true;
};

export default playPrime;
