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
});