import { GetCreditController } from "./getCredit.controller";
import { GetCreditService } from "./getCredit.service";
import { DynamoCreditRespository } from "../../../repositories/implementations/DynamoCreditRespository";
const mockCreditRespository = new DynamoCreditRespository();
const getCreditService = new GetCreditService(mockCreditRespository);
const getCreditController = new GetCreditController(getCreditService);
export { getCreditService, getCreditController};