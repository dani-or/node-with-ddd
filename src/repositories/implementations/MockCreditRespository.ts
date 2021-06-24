import { ICreditRepository } from "../ICreditRepository";
import { Credit } from "../../entities/Credit";
export class MockCreditRespository implements ICreditRepository {

  async getCredit(customerId:string,debenture:string) {
    let credit = new Credit({
       value: 10000,
       debenture : "122323",    
       endDate : 2343242343,    
       startDate : 34234234,    
       status : 1
    });
    return credit;
  }
}
