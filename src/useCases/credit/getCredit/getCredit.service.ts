import { IGetCreditRequestDTO } from "./getCredit.dto";
import { ICreditRepository } from "../../../repositories/ICreditRepository";
import { Credit } from "../../../entities/Credit";

export class GetCreditService {
  constructor(
    private creditRepository: ICreditRepository,
  ) {}

  async execute(data: IGetCreditRequestDTO) {
    //Acá va la logica de mi negocio
    let credit : Credit =await this.creditRepository.getCredit(data.customerId, data.debenture);
    return credit;
  }
}
