class Account {
  constructor() {
    this.balance = 0;
    this.transactions = [];
  };

  getBalance() {
    return this.balance;
  };

  // if entering date manually, must enter as a string (deposit & withdraw)
  // if no date is etered, the default value will be todays date
  // pushing object into transactions array to be formatted in Statement class (deposit & withdraw)
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
