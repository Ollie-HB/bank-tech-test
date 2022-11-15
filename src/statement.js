class Statement {
  constructor() {
    this.header = 'date || credit || debit || balance\n'
    this.account = account;
  }

  formatTransactions() {
    let transactionObjects = this.account.getTransactions()
    let formatedStatementLines = transactionObjects.map(transaction => {
        if (transaction['amount'] > 0) {
          return (`${transaction['transactionDate']} || £${transaction['amount'].toFixed(2)} || || £${transaction['remainingBalance'].toFixed(2)}\n`)
        } else {
          // multiplying withdrawal 'amount' by -1 to change it from a negative number into a positive number
          return (`${transaction['transactionDate']} || || £${(transaction['amount'] * -1).toFixed(2)} || £${transaction['remainingBalance'].toFixed(2)}\n`)
        }
      });
      return formatedStatementLines
      // attempting to organise the statement lines in the correct order
      // let orderedStatement = formatedStatementLines.sort(
      //   (objA, objB) => Number(objB.date) - Number(objA.date),
      //   );
      // return orderedStatement
  };

  displayTransactions() {
    return `${this.header + this.formatTransactions()}`
  };
};

module.exports = Statement;