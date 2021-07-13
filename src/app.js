"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.app = void 0;
const express_1 = __importDefault(require("express"));
const health_route_1 = require("./routes/health.route");
const credit_route_1 = require("./routes/credit.route");
const transaction_route_1 = require("./routes/transaction.route");
const app = express_1.default();
exports.app = app;
app.use(express_1.default.json());
app.use(health_route_1.HealthCheckRouter);
app.use(credit_route_1.CreditRouter);
app.use(transaction_route_1.TransactionRouter);
