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
    account.deposit(100, '13/11/2022')
    expect(account.getTransactions()).toEqual([
      {"transactionDate": "13/11/2022", "amountDeposited": 100, "remainingBalance": 100}
    ]);
    expect(account.getBalance()).toEqual(100);
  });
  
  it('adds multiple "transaction" objects to the array via deposit/withdrawal and updates balance', () => {
    account.deposit(100, '13/11/2022')
    account.withdraw(50, '14/11/2022')
    expect(account.getTransactions()).toEqual([
      {"transactionDate": "13/11/2022", "amountDeposited": 100, "remainingBalance": 100},
      {"transactionDate": "14/11/2022", "amountWithdrawn": 50, "remainingBalance": 50}
    ]);
    expect(account.getBalance()).toEqual(50);
  });
});