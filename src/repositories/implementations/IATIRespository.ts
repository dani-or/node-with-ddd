import { ITransactionSummaryRepository } from "../ITransactionSummaryRepository";
import { TransactionSummary } from "../../entities/TransactionSummary";
import * as request from "request-promise-native";

export class IATIRespository implements ITransactionSummaryRepository {
  private lista : Array<TransactionSummary>;
  private lastModification : number = new Date().getTime();

  async getTransactionsSummaries(country:string) {
    //https://iatidatastore.iatistandard.org/api/transactions/aggregations/?aggregations=count,value,expenditure,activity_count,commitment,incoming_fund,transaction_date_year&format=json&recipient_country=SD&group_by=provider_org,transaction_date_year&convert_to=usd
    const baseUrl = 'https://iatidatastore.iatistandard.org/api/transactions/aggregations/';
    const queryString = '?aggregations=count,value,expenditure,activity_count,commitment,incoming_fund,transaction_date_year&format=json&recipient_country=' + country +'&group_by=provider_org,transaction_date_year&convert_to=usd';
    var options = {
        uri: baseUrl + queryString,
    };
    let diffInMinutesV = this.diffInMinutes(this.lastModification, new Date().getTime());
    if( (this.lista == null || this.lista == undefined) || diffInMinutesV> 5  ){
      this.lista  = new Array();
      this.lastModification = new Date().getTime();
      const result = await request.get(options);
      const jsonResponse = JSON.parse(result);
      jsonResponse.results.forEach(transaction => {
        const transactionSummary  = new TransactionSummary({
          organization: transaction.provider_org,
          year: transaction.transaction_date_year,
          value: transaction.value,
          activity_count: transaction.activity_count,
          count: transaction.count
        });
        this.lista.push(transactionSummary);
      });
    }    
    return this.lista;
  }

  private diffInMinutes(date1, date2){
    let diffInMilliSeconds = Math.abs(date1 - date2) / 1000;
    const minutes = Math.floor(diffInMilliSeconds / 60) % 60;
    diffInMilliSeconds -= minutes * 60;
    return minutes;
  }
  
}
