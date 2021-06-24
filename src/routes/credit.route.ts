import { Router } from "express";
import { getCreditController } from "./../useCases/credit/getCredit";

const CreditRouter = Router();

CreditRouter.post("/getCredit", (request, response) => {
    return getCreditController.handle(request, response);
  });
  
  export { CreditRouter };