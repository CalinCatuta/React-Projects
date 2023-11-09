const express = require("express");
const colors = require("colors");
const dotenv = require("dotenv").config();
const { errorHandlre } = require("../backend/middleware/errorMiddleware");
const connectDB = require("./config/db");
const PORT = process.env.PORT || 5000;

// Connect to databes
connectDB();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get("/", (req, res) => {
  res.status(200).json({ message: "Welcome" });
});

// Roytes
app.use("/api/users", require("./routes/userRoutes"));

app.use(errorHandlre);

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
