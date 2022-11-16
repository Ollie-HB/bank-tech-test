# Bank tech test

This is the first tech test I undertook during Week 10 of Makers. This week, our focus was on code quality and understanding/working through various tech tests.

### Project Description

The purpose of this project is to build a bank account program that can recieve deposit and withdrawal requests and update the account balance accordingly, whilst also being able to provide a formatted bank statement showing transaction history.

### Project setup and installation

This project was written in JavaScript, with Jest for testing, and Node used to run the program.

We use NPM (Node Package Manager) to setup and manage this JS project and its dependencies. This guidance assumes you have NVM (the Node Version Manager) installed - if not, head to [this page](https://github.com/nvm-sh/nvm#installing-and-updating) to install it. Then:

1. Start by cloning this repo:
```
git clone https://github.com/Ollie-HB/bank-tech-test
```
After cloning the repo, you will have package.json and package-lock.json installed (with an updated Jest package too) so no need to initialize/install them.

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
### Requirements and Acceptance Criteria

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
5. You are now able to make deposit(), withdraw(), getBalance() and getTransactions() on the account instance, and then displayTransactions() on the Statement class. Please see the [Screenshot](./instructions.png) to see this in action.

