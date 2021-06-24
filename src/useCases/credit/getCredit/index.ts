import { GetCreditController } from "./getCredit.controller";
import { GetCreditService } from "./getCredit.service";
import { MockCreditRespository } from "../../../repositories/implementations/MockCreditRespository";
const mockCreditRespository = new MockCreditRespository();
const getCreditService = new GetCreditService(mockCreditRespository);
const getCreditController = new GetCreditController(getCreditService);
export { getCreditService, getCreditController};