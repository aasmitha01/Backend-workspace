export const validateCustomer = (req, res, next) => {
  const { full_name, email, phone } = req.body;

  if (!full_name || full_name.trim() === "") {
    return res.status(400).json({ error: "Full name is required" });
  }

  if (!email || !email.includes("@")) {
    return res.status(400).json({ error: "Valid email is required" });
  }

  if (!phone || phone.length < 10) {
    return res.status(400).json({ error: "Valid phone number is required" });
  }

  next(); // ✅ move to controller
};
