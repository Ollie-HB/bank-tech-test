const Account = require('./account')

class Statement {
  constructor() {
    this.header = 'date || credit || debit || balance'
    this.account = new Account;
  }

  // formatTransactions() {
  //   
  // };

  displayTransactions() {
    return `${this.header}`
  };
};

module.exports = Statement;