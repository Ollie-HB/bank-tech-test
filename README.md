# Bank tech test

This is the first tech test I undertook during Week 10 of Makers. This week, our focus was on code quality and understanding/working through various tech tests.

### Project Description

The purpose of this project is to build a bank account program that can recieve deposit and withdrawal requests and update the account balance accordingly, whilst also being able to offer a formatted bank statement showing transaction history.

### Project setup and installation

This project was written in JavaScript, with Jest for testing, and Node for running the program.

We use NPM (Node Package Manager) to setup and manage this JS project and its dependencies. This guidance assumes you have NVM (the Node Version Manager) installed - if not, head to [this page](https://github.com/nvm-sh/nvm#installing-and-updating) to install it first. Then:

1. First, start by cloning this repo:
```
git clone https://github.com/Ollie-HB/bank-tech-test
```
2. Setup the environment to use node’s latest version:
```
nvm use node
```
3. Initialise the NPM project (this will create a file package.json), and install the NPM package:
```
npm init -y
npm install
```
4. Add the jest package to our project - (this will update package.json and package-lock.json)
```
npm add jest
```
5. Install jest "globally" - (this is so we can run the `jest` command)
```
npm install -g jest
```
6. Run the Jest command:
```
jest
```
This completes the project setup.
### Requirements and Acceptance Criteria

The program must have:

- Deposits/withdrawal functionality
- A printable account statement (date, amount, balance).

 A user can interact with the code via a REPL (in this case, Node). There is no command line interface that takes input from STDIN, and data is stored in memory (no databse).

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
