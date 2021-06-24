import express from "express";
import { HealthCheckRouter } from "./routes/health.route";


const app = express();

app.use(express.json());
app.use(HealthCheckRouter);

export { app };
