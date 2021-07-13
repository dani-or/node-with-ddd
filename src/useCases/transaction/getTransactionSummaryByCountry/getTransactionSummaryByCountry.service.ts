import { IGetTransactionsRequestDTO } from "./getTransactionSummaryByCountryRequestDTO.dto";
import { ITransactionSummaryRepository } from "../../../repositories/ITransactionSummaryRepository";
import { TransactionSummary } from "../../../entities/TransactionSummary";

export class GetTransactionSummaryService {
  constructor(
    private transactionRepository: ITransactionSummaryRepository,
  ) {}

  async execute(data: IGetTransactionsRequestDTO) {
    let response = {};
    //Acá va la logica de mi negocio
    let transactionsSummaries : Array<TransactionSummary> =await this.transactionRepository.getTransactionsSummaries(data.country);
    //Clasificar por Año Cada summary
    transactionsSummaries.forEach(sumary => {
      if(!response.hasOwnProperty(sumary.getYear().toString()) ){
        response[sumary.getYear().toString()] ={ organizations:[]};
      }
      response[sumary.getYear().toString()].organizations.push( { organization:sumary.getOrganization(), value:sumary.getValue()});
    });

    for(let year in response){
      response[year].organizations.sort(function (a, b) {
        return a.value - b.value;
      });
    }
    return response;
  }
}
