const Account = require('../src/account');
const Statement = require('../src/statement');

beforeEach(() => {
  account = new Account();
  statement = new Statement();
});

describe('Statement', () => {
  it('initialises with just a header', () => {
    expect(statement.displayTransactions()).toEqual('date || credit || debit || balance')
  });

  // it('returns a statement showing one deposit', () => {
  //   const fakeDeposit = {
  //     deposit: () => 100
  //   }

  //   const statement = new Statement(fakeDeposit);

  //   console.log('1. getBalance', account.getBalance())
  //   console.log('2. getTransactions', account.getTransactions())
  //   console.log('3. displayTransactions', account.displayTransactions())

  //   expect(statement.displayTransactions().toContain(`${account.getDate()} || £100.00 || || £100.00`));
  // });

});