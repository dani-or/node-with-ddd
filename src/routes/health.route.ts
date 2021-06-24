import { Router } from "express";
//import { createUserController } from "./useCases/CreateUser";

const HealthCheckRouter = Router();

HealthCheckRouter.get("/healthcheck", (request, response) => {
  //return createUserController.handle(request, response);
  response.status(200).send("I'm Healthy");
});


export { HealthCheckRouter };
