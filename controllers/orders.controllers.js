import { supabase } from "../config/supabase.js";

/* CREATE ORDER */
export const createOrder = async (req, res) => {
  try {
    const { product_name, quantity, price, customerId } = req.body;

    if (!product_name || !quantity || !price || !customerId) {
      return res.status(400).json({ error: "Missing required fields" });
    }

    const { error } = await supabase.from("orders").insert([
      {
        product_name,
        quantity,
        price,
        customer_id: customerId
      }
    ]);

    if (error) {
      return res.status(400).json({ error: "Invalid customer ID" });
    }

    res.status(201).json({ message: "Order created successfully" });
  } catch {
    res.status(500).json({ error: "Server error" });
  }
};

/* GET CUSTOMER ORDERS */
export const getCustomerOrders = async (req, res) => {
  try {
    const { customerId } = req.params;

    const { data, error } = await supabase
      .from("orders")
      .select("*")
      .eq("customer_id", customerId);

    if (error) {
      return res.status(404).json({ error: "Customer not found" });
    }

    res.json({ orders: data });
  } catch {
    res.status(500).json({ error: "Server error" });
  }
};

/* UPDATE ORDER */
export const updateOrder = async (req, res) => {
  try {
    const { orderId } = req.params;

    const { error } = await supabase
      .from("orders")
      .update(req.body)
      .eq("id", orderId);

    if (error) {
      return res.status(404).json({ error: "Order not found" });
    }

    res.json({ message: "Order updated successfully" });
  } catch {
    res.status(500).json({ error: "Server error" });
  }
};

/* DELETE ORDER */
export const deleteOrder = async (req, res) => {
  try {
    const { orderId } = req.params;

    const { error } = await supabase
      .from("orders")
      .delete()
      .eq("id", orderId);

    if (error) {
      return res.status(404).json({ error: "Order not found" });
    }

    res.json({ message: "Order deleted successfully" });
  } catch {
    res.status(500).json({ error: "Server error" });
  }
};
