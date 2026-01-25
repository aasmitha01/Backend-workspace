import express from "express";
import dotenv from "dotenv";

import customersRouter from "./routes/customers.routes.js";
import ordersRouter from "./routes/orders.routes.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.use("/customers", customersRouter);
app.use("/orders", ordersRouter);

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
