import { Router } from "express";
import { getTransactionSummaryController } from "../useCases/transaction/getTransactionSummaryByCountry";

const TransactionRouter = Router();

TransactionRouter.get("/getTransactionSummaryByCountry", (request, response) => {
  
  return getTransactionSummaryController.handle(request, response);
  });
  
  export { TransactionRouter };