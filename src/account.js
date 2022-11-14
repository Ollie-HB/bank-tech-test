class Account {
  constructor() {
    this.balance = 0;
    this.transactions = [];
  };

  getBalance() {
    return this.balance;
  };

  deposit(money) {
    this.balance += money;
    this.transactions.push(
    `${this.getDate()} || £${money.toFixed(2)} || || £${this.getBalance().toFixed(2)}`
    );
  };

  withdraw(money) {
    this.balance -= money;
    this.transactions.push(
    `${this.getDate()} || || £${money.toFixed(2)} || £${this.getBalance().toFixed(2)}`
    );
  };

  getTransactions() {
    return this.transactions;
  };

  getDate() {
    let date = new Date().toLocaleString('en-GB').slice(0,-10)
    return `${date}`
  };

   displayTransactions() {
    console.log('date || credit || debit || balance')
    this.transactions.forEach((transaction) => {
      console.log(transaction);
    });
  };
};

module.exports = Account;
