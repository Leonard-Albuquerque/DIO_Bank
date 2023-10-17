import { DioAccount } from "./DioAccount"


export class JuridicAccount extends DioAccount {
    

    constructor(name: string, accountNumber: number){
      super(name, accountNumber)
    }

    deposit = (amount: number): void => {
       
          if (amount > 0) {
            this.balance += (amount + 10);
            console.log(`Depósito de ${amount} realizado com sucesso.`);
          } else {
            console.log('O valor do depósito deve ser maior que zero.');
          }
        }
    
  }