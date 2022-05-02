import readlineSync from 'readline-sync';

const func = (message) => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  if (message.length > 0) console.log(message);
  return name;
};

export default func;
