import { CompanyAccount } from './class/CompanyAccount'
import { PeopleAccount } from './class/PeopleAccount'
import { JuridicAccount } from './class/JuridicAccount'


    const peopleAccount: PeopleAccount = new PeopleAccount(1, 'Nath', 10)
        console.log(peopleAccount)
        peopleAccount.deposit(20)
        console.log(peopleAccount.balance)

    const companyAccount: CompanyAccount = new CompanyAccount('DIO', 20)
        companyAccount.deposit(20)
        console.log(companyAccount.balance)
        companyAccount.getLoan(200)
        console.log(companyAccount.balance)

    const PessoaJuridica: JuridicAccount = new JuridicAccount('Matheus',20) 
        PessoaJuridica.deposit(150)
        
        