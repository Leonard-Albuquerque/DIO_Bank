import { DioAccount } from "./DioAccount"

export class CompanyAccount extends DioAccount {

  constructor(name: string, accountNumber: number){
    super(name, accountNumber)
  }

  getLoan = (balanceplusLoan: number): void => {
      this.balance +=  balanceplusLoan
      console.log('Voce pegou um empréstimo')
      console.log(`Seu emprestimo foi de: ${balanceplusLoan}.`);
  }
}
