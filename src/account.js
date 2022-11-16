class Account {
  constructor() {
    this.balance = 0;
    this.transactions = [];
  };

  getBalance() {
    return this.balance;
  };

  // if entering the date manually, you must enter as a string (deposit & withdraw)
  // if no date is entered, the default value will be today's date
  // here, we're pushing an object into the transactions array to be formatted in the Statement class (deposit & withdraw)
  deposit(money, date = this.getDate()) { 
    this.balance += money;
    this.transactions.push(
      { transactionDate: date,
        amount: money,
        remainingBalance: this.getBalance()
      });
  };

  withdraw(money, date = this.getDate()) {
    this.balance -= money;
    this.transactions.push(
      { transactionDate: date,
        amount: -money,
        remainingBalance: this.getBalance()
      });
    };

  getTransactions() {
    return this.transactions;
  };

  getDate() {
    let date = new Date().toLocaleString('en-GB').slice(0,-10)
    return `${date}`
  };
};

module.exports = Account;
