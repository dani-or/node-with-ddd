import { Request, Response } from "express";

import { GetCreditService } from "./getCredit.service";

export class GetCreditController {

  constructor(private getCredit: GetCreditService) {}
  
  async handle(request: Request, response: Response): Promise<Response> {
    try {
      let p = await this.getCredit.execute({customerId:request.body.customerId, debenture:request.body.debenture});
      return response.status(201).json(p);
    } catch (err) {
      return response.status(400).json({
        message: err.message || "Unexpected error.",
      });
    }
  }
}