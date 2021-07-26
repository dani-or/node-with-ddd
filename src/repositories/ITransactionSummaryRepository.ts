import { TransactionSummary } from "../entities/TransactionSummary";

export interface ITransactionSummaryRepository {
  
  /**
   * Consultar lista de transacciones por año de cada organización que hizo una donación
   * para un pais
   * @param country pais del que se quieren consultar la organizaciones donantes
   */
  getTransactionsSummaries(country:string) : Promise<Array<TransactionSummary>>;
}