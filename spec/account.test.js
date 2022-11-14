const Account = require('../src/account.js');

beforeEach(() => {
  account = new Account();
});

describe('Account', () => {
  it('initialises with a balance of 0', () => {
      expect(account.getBalance()).toEqual(0);
  });

  it('#deposit - can make a deposit and increase the balance', () => {
      account.deposit(100)
      expect(account.getBalance()).toEqual(100);
  });

  it('#withdraw - can make a withdrawal and decrease the balance', () => {
      account.withdraw(50)
      expect(account.getBalance()).toEqual(-50);
  });

  it('#deposit/withdraw - can make withdrawals & deposits, updating the balance correctly', () => {
      account.deposit(100)
      account.withdraw(50)
      expect(account.getBalance()).toEqual(50);
  });

  it('initialises with an empty transactions array', () => {
    expect(account.getTransactions()).toEqual([]);
  });

  it('adds a "transaction" object to the array via deposit and updates balance', () => {
    account.deposit(100)
    expect(account.getTransactions()).toEqual([`${account.getDate()} || || £100.00 || £100.00`]);
    expect(account.getBalance()).toEqual(100);
  });

  it('adds multiple "transaction" objects to the array via deposit/withdrawal and updates balance', () => {
    account.deposit(100)
    account.withdraw(50)
    expect(account.getTransactions()).toEqual([`${account.getDate()} || || £100.00 || £100.00`,
    `${account.getDate()} || £50.00 || || £50.00`]);
    expect(account.getBalance()).toEqual(50);
  });

  // it('#displayTransactions - shows header', () => {
  //     expect(account.displayTransactions()).toContain('date || credit || debit || balance')
  //   });
  
    // it('returns a statement showing one deposit', () => {
    //   account.deposit(100, '11/11/2022')
    //   expect(statement.displayTransactions()).includes('13/11/2022 || 100.00 || 100.00')
  


});