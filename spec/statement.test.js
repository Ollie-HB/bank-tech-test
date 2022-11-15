const Account = require('../src/account');
const Statement = require('../src/statement');

describe('Statement', () => {

  beforeEach(() => {
    account = new Account();
    statement = new Statement();

    jest
    .useFakeTimers()
    .setSystemTime(new Date('2023-05-27'))

    // plan to add mock deposits/withdrawals here for use in testing
    
  });

  describe('#formatTransactions', () => {
     it('pulls through transactions array from Account to be formatted', () => {
      account.deposit(100)
      account.withdraw(50)
      expect(statement.formatTransactions().length).toBe(2)
    });
  });

  describe('#displayTransactions', () => {
    it('initialises with header', () => {
      expect(statement.displayTransactions()).toEqual('date || credit || debit || balance\n')
    });

    it('returns a statement showing one deposit', () => {
      account.deposit(100)
      expect(statement.displayTransactions()).toEqual('date || credit || debit || balance\n27/05/2023 || £100.00 || || £100.00\n');
    });

    // currently not in the correct order + unknown comma after new lines + line 41 is far too long
    it('returns statement with multiple entries correctly formatted', () => {
      account.deposit(1000, '10/01/2023')
      account.deposit(2000, '13/01/2023')
      account.withdraw(500, '14/01/2023')
      expect(statement.displayTransactions()).toEqual('date || credit || debit || balance\n10/01/2023 || £1000.00 || || £1000.00\n13/01/2023 || £2000.00 || || £3000.00\n14/01/2023 || || £500.00 || £2500.00');
    })
  });
});