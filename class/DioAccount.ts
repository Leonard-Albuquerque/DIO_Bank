export abstract class DioAccount {
  private readonly name: string;
  private readonly accountNumber: number;
  balance: number = 0;
  private status: boolean = true;

  constructor(name: string, accountNumber: number) {
    this.name = name;
    this.accountNumber = accountNumber;
  }

  /*setName = (name: string): void => {
    this.name = name;
    console.log('Nome alterado com sucesso!');
  }*/

  getName = (): string => {
    return this.name;
  }

  deposit = (amount: number): void => {
    if (this.validateStatus()) {
      if (amount > 0) {
        this.balance += amount;
        console.log(`Depósito de ${amount} realizado com sucesso.`);
      } else {
        console.log('O valor do depósito deve ser maior que zero.');
      }
    }
  }

  withdraw = (amount: number): void => {
    if (this.validateStatus()) {
      if (amount > 0 && amount <= this.balance) {
        this.balance -= amount;
        console.log(`Saque de ${amount} realizado com sucesso.`);
      } else {
        console.log('Valor de saque inválido ou saldo insuficiente.');
      }
    }
  }

  getBalance = (): void => {
    console.log(`Saldo: ${this.balance}`);
  }

  private validateStatus = (): boolean => {
    if (this.status) {
      return true;
    }

    throw new Error('Conta inválida');
  }
}
