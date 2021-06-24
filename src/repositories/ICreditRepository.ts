import { Credit } from "../entities/Credit";

export interface ICreditRepository {
  getCredit(customerId:string,debenture:string) : Promise<Credit>;
}