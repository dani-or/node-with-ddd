import { Request, Response } from "express";

import { GetTransactionSummaryService } from "./getTransactionSummaryByCountry.service";

export class GetTransactionSummaryController {

  constructor(private getTransactionSummaryService: GetTransactionSummaryService) {}
  
  async handle(request: Request, response: Response): Promise<Response> {
    try {
      let p = await this.getTransactionSummaryService.execute({country:request.query.country});
      return response.status(201).json(p);
    } catch (err) {
      return response.status(400).json({
        message: err.message || "Unexpected error.",
      });
    }
  }
}