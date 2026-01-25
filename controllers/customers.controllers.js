import { supabase } from "../config/supabase.js";

/* REGISTER CUSTOMER */
export const registerCustomer = async (req, res) => {
  try {
    const { full_name, email, phone } = req.body;

    if (!full_name || !email || !phone) {
      return res.status(400).json({ error: "All fields are required" });
    }

    const { error } = await supabase.from("customers").insert([
      { full_name, email, phone }
    ]);

    if (error) {
      return res.status(409).json({ error: "Email already exists" });
    }

    res.status(201).json({ message: "Customer registered successfully" });
  } catch (err) {
    res.status(500).json({ error: "Server error" });
  }
};

/* DELETE CUSTOMER (CASCADE DELETE HANDLED BY DB) */
export const deleteCustomer = async (req, res) => {
  try {
    const { customerId } = req.params;

    const { error } = await supabase
      .from("customers")
      .delete()
      .eq("id", customerId);

    if (error) {
      return res.status(404).json({ error: "Customer not found" });
    }

    res.json({ message: "Customer and related orders deleted" });
  } catch {
    res.status(500).json({ error: "Server error" });
  }
};
