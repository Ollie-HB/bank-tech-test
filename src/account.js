class Account {
  constructor() {
    this.balance = 0;
    this.transactions = [];
  };

  getBalance() {
    return this.balance;
  };

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
