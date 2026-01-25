import express from "express";
import {
  registerCustomer,
  deleteCustomer
} from "../controllers/customers.controller.js";

const router = express.Router();

router.post("/register", registerCustomer);
router.delete("/:customerId", deleteCustomer);

export default router;
