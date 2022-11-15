const Account = require('../src/account');
const Statement = require('../src/statement');

describe('Statement', () => {

  beforeEach(() => {
    account = new Account();
    statement = new Statement();

    jest
    .useFakeTimers()
    .setSystemTime(new Date('2023-05-27'))
  });

  describe('#formatTransactions', () => {
     it('pulls through transactions array from Account to be formatted', () => {
      account.deposit(100)
      account.withdraw(50)
      expect(statement.formatTransactions()).toEqual([
        { "amount": 100, "remainingBalance": 100, "transactionDate": '27/05/2023'},
        {"amount": -50, "remainingBalance": 50, "transactionDate": "27/05/2023"}]);
      expect(statement.formatTransactions().length).toBe(2)
    });

    it('returns a statement showing one deposit', () => {
      account.deposit(100)
      expect(statement.displayTransactions()).toEqual('date || credit || debit || balance\n27/05/2023 || £100.00 || || £100.00');
    });

  });







  describe('#displayTransactions', () => {
    it('initialises with header', () => {
      expect(statement.displayTransactions()).toEqual('date || credit || debit || balance\n')
    });
  });
});