import express from "express";
import { HealthCheckRouter } from "./routes/health.route";
import { CreditRouter } from "./routes/credit.route";
import { TransactionRouter } from "./routes/transaction.route";


const app = express();

app.use(express.json());
app.use(HealthCheckRouter);
app.use(CreditRouter);
app.use(TransactionRouter);

export { app };
