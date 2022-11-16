class Statement {
  constructor() {
    this.header = 'date || credit || debit || balance\n'
    this.account = account;
  }

  formatTransactions() {
    let transactionArray = this.account.getTransactions()
    let formattedStatementLines = transactionArray.map(transaction => {
        if (transaction['amount'] > 0) {
           return (`${transaction['transactionDate']} || £${transaction['amount'].toFixed(2)} || || £${transaction['remainingBalance'].toFixed(2)}\n`)
        } else {
          // multiplying withdrawal 'amount' by -1 to change it from a negative number into a positive number
          return (`${transaction['transactionDate']} || || £${(transaction['amount'] * -1).toFixed(2)} || £${transaction['remainingBalance'].toFixed(2)}\n`)
        }
      });
      // statement rows only print in order if the oldest transaction is entered first
      return formattedStatementLines.reverse().join('');
  };

  displayTransactions() {
     return `${this.header + this.formatTransactions()}`
  };
};

module.exports = Statement;
