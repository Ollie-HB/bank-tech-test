const Account = require('../src/account.js');

describe('Account', () => {
  beforeEach(() => {
    account = new Account();

    jest
    .useFakeTimers()
    .setSystemTime(new Date('2023-05-27'))
  });
   
  describe('#getBalance', () => {
    it('initializes with a balance of 0', () => {
        expect(account.getBalance()).toEqual(0);
    });
  });

  describe('#deposit', () => {  
    it('can make a deposit and increase the balance', () => {
        account.deposit(100)
        expect(account.getBalance()).toEqual(100);
    });

    it('adds a "transaction" object to the array via deposit', () => {
      account.deposit(100)
      expect(account.getTransactions()).toEqual([
        {"amount": 100, "remainingBalance": 100, "transactionDate": '27/05/2023'}]);
    });
  });

  describe('#withdraw', () => {  
    it('can make a withdrawal and decrease the balance', () => {
        account.withdraw(50)
        expect(account.getBalance()).toEqual(-50);
    });

    it('adds a "transaction" object to the array via withdraw', () => {
      account.withdraw(50)
      expect(account.getTransactions()).toEqual([
        {"amount": -50, "remainingBalance": -50, "transactionDate": '27/05/2023'}]);
    });

    it('#withdraw/deposit - can make withdrawals & deposits, updating the balance correctly', () => {
      account.deposit(100)
      account.withdraw(50)
      expect(account.getBalance()).toEqual(50);
    });
  });

  describe('#getTransactions', () => { 
    it('initialises with an empty transactions array', () => {
      expect(account.getTransactions()).toEqual([]);
    });

    it('adds multiple "transaction" objects to the array via deposit/withdrawal and updates balance', () => {
      account.deposit(100)
      account.withdraw(50)
      expect(account.getTransactions()).toEqual([
        { "amount": 100, "remainingBalance": 100, "transactionDate": '27/05/2023' },
        { "amount": -50, "remainingBalance": 50, "transactionDate": '27/05/2023' }]);
      expect(account.getBalance()).toEqual(50);
    });
  });
});