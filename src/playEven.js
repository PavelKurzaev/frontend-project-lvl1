import readlineSync from 'readline-sync';
import getUserName from '../src/cli.js';

const playEven = () => {
    const name = getUserName('Answer "yes" if the number is even, otherwise answer "no".');

    let i = 3;
    do {
        const number = Math.trunc(Math.random() * 100);
        const answer = readlineSync.question(`Question: ${number}\nYour answer: `);
        const correct = (number % 2 === 0 && answer === 'yes') || (number % 2 === 1 && answer === 'no');
        if (!correct) 
            return false;
        console.log('Correct!');
        i -= 1;
    } while (i > 0);
    console.log(`Congratulations, ${name}!`);
    return true;
};

export default playEven;