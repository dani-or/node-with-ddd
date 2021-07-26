import { GetTransactionSummaryController } from "./getTransactionSummaryByCountry.controller";
import { GetTransactionSummaryService } from "./getTransactionSummaryByCountry.service";
import { IATIRespository } from "../../../repositories/implementations/IATIRespository";
const iATIRespository = new IATIRespository();
const getTransactionSummaryService = new GetTransactionSummaryService(iATIRespository);
const getTransactionSummaryController = new GetTransactionSummaryController(getTransactionSummaryService);
export { getTransactionSummaryService, getTransactionSummaryController};