class Account {
  constructor() {
    this.balance = 0;
    this.transactions = [];
  };

  getBalance() {
    return this.balance;
  };

  deposit(money, date = new Date) {
    this.balance += money;
    this.transactions.push(
      { transactionDate: date,
        amountDeposited: money,
        remainingBalance: this.getBalance()
      });
  };


  withdraw(money, date = new Date) {
    this.balance -= money;
    this.transactions.push(
      { transactionDate: date,
        amountWithdrawn: money,
        remainingBalance: this.getBalance()
      });
  };

  getTransactions() {
    return this.transactions;
  };
};

module.exports = Account;

// new Date().toLocaleString('en-GB').slice(0,-10)

