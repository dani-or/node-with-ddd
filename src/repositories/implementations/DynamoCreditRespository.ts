import { ICreditRepository } from "../ICreditRepository";
import { Credit } from "../../entities/Credit";
import { DynamoDB } from 'aws-sdk';

//export 
export class DynamoCreditRespository implements ICreditRepository {

private client = new DynamoDB({ region: "us-east-1" });

  async getCredit(customerId:string,debenture:string) {
    let params = {
        TableName: process.env.NEQUI_CREDITS_TABLE_NAME,
        Key: {
          'customerId': {S: customerId},
          'debenture': {S: debenture}
        }
    };
    let r = await this.client.getItem(params).promise();
    if(!!r && !!r.Item){
        let credit = new Credit({
            value: parseInt(r.Item.value.N),
            debenture : r.Item.debenture.S,    
            endDate : parseInt(r.Item.endDate.N),    
            startDate : parseInt(r.Item.startDate.N),    
            status : parseInt(r.Item.status.N)
         });
         return credit;
    }else{
        throw new Error("No está en dynamo");
    }
  }
}
