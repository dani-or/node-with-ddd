import { GetCreditController } from "./getCredit.controller";
import { GetCreditService } from "./getCredit.service";
import { DynamoCreditRespository } from "../../../repositories/implementations/DynamoCreditRespository";
const dynamoCreditRespository = new DynamoCreditRespository();
const getCreditService = new GetCreditService(dynamoCreditRespository);
const getCreditController = new GetCreditController(getCreditService);
export { getCreditService, getCreditController};