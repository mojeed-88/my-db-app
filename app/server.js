console.log("Starting server...");
console.log("MONGO_URI:", process.env.MONGO_URI);


const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./config/db");   

dotenv.config();

const app = express();
app.use(express.json());

connectDB();

app.get("/", (req, res) => {
  res.send("API running");
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
