import { Router } from "express";

const HealthCheckRouter = Router();

HealthCheckRouter.get("/healthcheck", (request, response) => {
  response.status(200).send("I'm Healthy");
});


export { HealthCheckRouter };
