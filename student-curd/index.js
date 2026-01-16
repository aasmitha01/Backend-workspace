import express from "express";
import fs from "fs";

const app = express();
const PORT = 3000;

// Middleware
app.use(express.json());

// Helper functions
const readData = () => {
  const data = fs.readFileSync("db.json", "utf-8");
  return JSON.parse(data);
};

const writeData = (data) => {
  fs.writeFileSync("db.json", JSON.stringify(data, null, 2));
};

/* ---------------- GET ALL STUDENTS ---------------- */
app.get("/students", (req, res) => {
  const data = readData();
  res.json(data.students);
});

/* ---------------- ADD NEW STUDENT ---------------- */
app.post("/students", (req, res) => {
  const data = readData();
  const newStudent = req.body;

  data.students.push(newStudent);
  writeData(data);

  res.json({ message: "Student added successfully" });
});

/* ---------------- UPDATE STUDENT ---------------- */
app.put("/students", (req, res) => {
  const { id } = req.body;
  const data = readData();

  const student = data.students.find(s => s.id === id);

  if (!student) {
    return res.status(404).json({ message: "Student not found" });
  }

  Object.assign(student, req.body);
  writeData(data);

  res.json({ message: "Student updated successfully" });
});

/* ---------------- DELETE STUDENT ---------------- */
app.delete("/students/:id", (req, res) => {
  const id = Number(req.params.id);
  const data = readData();

  const index = data.students.findIndex(s => s.id === id);

  if (index === -1) {
    return res.status(404).json({ message: "Student not found" });
  }

  data.students.splice(index, 1);
  writeData(data);

  res.json({ message: "Student deleted successfully" });
});

/* ---------------- START SERVER ---------------- */
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
