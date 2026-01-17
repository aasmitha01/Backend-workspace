const validateTodo = (req, res, next) => {
  const { title, ...extra } = req.body;

  if (!title || Object.keys(extra).length > 0) {
    return res.status(400).json({
      error: "Invalid request body. Only 'title' is allowed"
    });
  }

  next();
};

export default validateTodo;
