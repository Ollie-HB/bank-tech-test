class Statement {
  constructor() {
    this.header = 'date || credit || debit || balance\n'
    this.account = account;
  }

  formatTransactions() {
    let format = this.account.getTransactions()
      format.forEach(transaction => {
        if (transaction['amount'] > 0) {
          console.log(`${transaction['transactionDate']} || £${transaction['amount'].toFixed(2)} || || £${transaction['remainingBalance'].toFixed(2)}`)
        } else {
        console.log(`${transaction['transactionDate']} || || £${transaction['amount'].toFixed(2)} || £${transaction['remainingBalance'].toFixed(2)}`)
        }
      });
    return format
  };

  displayTransactions() {
    return `${this.header}`
  };
};

module.exports = Statement;