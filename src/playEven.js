import readlineSync from 'readline-sync';

const playEven = () => {
    console.log('Welcome to the Brain Games!');
    const name = readlineSync.question('May I have your name? ');
    console.log(`Hello, ${name}!`);
    console.log('Answer "yes" if the number is even, otherwise answer "no".');

    let correct = true;
    let i = 3;
    while (i > 0 && correct) {
        const number = Math.trunc(Math.random() * 100);
        const answer = readlineSync.question(`Question: ${number}\nYour answer: `);
        correct = (number % 2 === 0 && answer === 'yes') || (number % 2 === 1 && answer === 'no');
        if (!correct) 
            return false;
        console.log('Correct!');
        i -= 1;
    }
    console.log(`Congratulations, ${name}!`);
    return true;
};

export default playEven;