import readlineSync from 'readline-sync';
import getUserName from '../src/cli.js';

const MAX_NUMBER = 100;

const gcd = (a,b) => {
    a = Math.abs(a);
    b = Math.abs(b);
    if (b > a) {var temp = a; a = b; b = temp;}
    while (true) {
        if (b == 0) return a;
        a %= b;
        if (a == 0) return b;
        b %= a;
    }
};

const playGCD = () => {
    const name = getUserName('Find the greatest common divisor of given numbers.');

    let i = 3;
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