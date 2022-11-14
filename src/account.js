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
    `${this.getDate()} || || £${money.toFixed(2)} || £${this.getBalance().toFixed(2)}`
    );
  };

  withdraw(money) {
    this.balance -= money;
    this.transactions.push(
    `${this.getDate()} || £${money.toFixed(2)} || || £${this.getBalance().toFixed(2)}`
    );
  };

  getTransactions() {
    return this.transactions;
  };

  getDate() {
    let date = new Date().toLocaleString('en-GB').slice(0,-10)
    return `${date}`
  }

  // displayTransactions() {
  //   const header = 'date || credit || debit || balance'
  //   const format = this.transactions.forEach((transaction)
    // console.log(transaction)
  //   )
  //   return header
  //  };
};

module.exports = Account;



// `${this.getTodaysDate()} || || ${this.formatValue(withdrawal)} || ${this.getBalance()}`

