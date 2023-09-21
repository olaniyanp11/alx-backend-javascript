const readline = require('readline');

// Prompts a new message
console.log('Welcome to Holberton School, what is your name?');

// Creates a new child process
const child = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// collects data from one line on tne cmd
child.on('line', (input) => {
  console.log(`Your name is: ${input}`);
  child.close();
});

// closes the process with some text
child.on('close', () => {
  console.log('\nThis important software is now closing');
});
