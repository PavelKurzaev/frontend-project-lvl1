import readlineSync from 'readline-sync';
import getUserName from './cli.js';

const MAX_NUMBER = 100;
const ROUNDS_NUMBER = 3;

const playCalc = () => {
  const name = getUserName('What is the result of the expression?');

  let i = ROUNDS_NUMBER;
  const operArray = ['+', '-', '*', '/'];
  do {
    const number1 = Math.trunc(Math.random() * MAX_NUMBER);
    const number2 = Math.trunc(Math.random() * MAX_NUMBER);
    const operation = Math.trunc(Math.random() * operArray.length - 1);
    let correctAnswer = 0;
    let answer = 0;
    switch (operation) {
      case 0:
        correctAnswer = number1 + number2;
        break;
      case 1:
        correctAnswer = number1 - number2;
        break;
      case 2:
        correctAnswer = number1 * number2;
        break;
      default:
        break;
    }
    const operSymbol = operArray[operation];
    answer = Number(readlineSync.question(`Question: ${number1} ${operSymbol} ${number2}\nYour answer: `));
    const correct = answer === correctAnswer;
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

export default playCalc;
