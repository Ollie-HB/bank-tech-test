# Bank tech test

This is the first tech test I undertook during Week 10 of Makers bootcamp. The focus for the tech tests was on producing high quality code.

### Project description

The purpose of this project is to build a bank account program that can receive deposit and withdrawal requests and update the account balance accordingly, whilst also being able to provide a formatted bank statement showing transaction history.

### Project setup and installation

1. Start by cloning this repo:
```
git clone https://github.com/Ollie-HB/bank-tech-test
```
After cloning the repo, you will have package.json and package-lock.json installed (with the Jest package updated too) so no need to initialize/install them.

2. Setup the environment to use node’s latest version:
```
nvm use node
```
3. Install jest "globally" - (this is so we can run the `jest` command)
```
npm install -g jest
```
4. Run the Jest command:
```
jest
```
This completes the project setup.

### How to run the project in Node

1. When in the project directory, run node in your terminal
```
node
```
2. Require the Statement class
```
const Statement = require('./src/statement');
```
3. Require the Account class
```
const Account = require('./src/account');
```
4. Set up new instances of both Account and Statement classes (Note: you must name the Account class instance 'account', or else it won't be found by the Statement class).
```
const account = new Account();

const statement = new Statement();
```
5. You are now able to deposit(), withdraw(), getBalance() and getTransactions() with the 'account' instance, and then displayTransactions() using the 'statement' instance. Please see this [screenshot](./images/instructions.png) for a visual guide.

### My process and challenges

For this tech test, my approach centred around the idea of having two classes, ‘Account’ and ‘Statement’ - Account for ‘input’, and Statement to give the desired ‘output’. 

Following a TDD process, I started by creating a basic Account class, dealing with balance, deposits and withdrawals. Once these functions were passing tests, I then moved on to the more challenging aspect of obtaining and storing transaction data. After considering both objects and formatted strings for the array, I eventually decided to store transactions as objects with a transactionDate, amount and remainingBalance, leaving the formatting to the Statement class. For this, I wrote a getTodaysDate() function to get today’s date, but soon realised that for the acceptance criteria, the user would need to be able to input specific dates. Therefore, I implemented a default value of today’s date, but dates can also be entered manually as a string if desired. I used the getBalance() function to add the balance to the object after it had been updated, then these objects are pushed to the transactions array in the constructor.

Next, I moved on to the Statement class. I started by running simple tests to pull through the transaction array, then wrote a test for the header. Once I was happy that transaction data was being pulled through, I wrote tests for my desired output. To get this output formatted was the most challenging part of the tech test. It involved going back to my account class and changing the withdraw object’s ‘amount’ property to a negative number, so I could then use an if/else conditional to distinguish between deposits and withdrawals, by checking whether the number was positive or negative. After sorting them and formatting them as strings (with newlines), I then changed the withdraw ‘amount’ number back to a positive number (so it would appear as required on the statement in node).

Remaining tasks/bugs

I implemented a .reverse().join(‘’) feature on the new formatted array, so the output would match the desired criteria and appear in reverse chronological order (most recent transaction first). This feature needs improving, as if transactions are not entered in chronological order (oldest first), they will not be displayed in the correct order. Therefore, my current goal is to create a function that orders all transactions by date. I am also getting extra ‘+’ symbols and '\n' characters in my node output, which I plan to debug and remove as well. Finally, I hope to add mocks to my tests of the Statement class, to conduct more thorough unit testing.

[Screenshot of my TDD process](./images/tdd.png)

### Requirements and acceptance criteria

The program must have:

- Deposit/withdrawal functionality
- A printable account statement (date, amount, balance).

 A user can interact with the code via a REPL (in this case, Node). There is no command line interface that takes input from STDIN, and data is stored in memory (no database).

 Acceptance criteria:

- Given a client makes a deposit of 1000 on 10-01-2023
- And a deposit of 2000 on 13-01-2023
- And a withdrawal of 500 on 14-01-2023
- When she prints her bank statement, she would see:

 ```
date || credit || debit || balance

14/01/2023 || || 500.00 || 2500.00
13/01/2023 || 2000.00 || || 3000.00
10/01/2023 || 1000.00 || || 1000.00
 ```

### Testing

Use the jest --coverage command to see test coverage (currently at 100%).
```
jest --coverage
```