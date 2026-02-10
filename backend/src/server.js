import express from "express";
import cors from "cors";
import connectDB from "./config/db.js";
import "dotenv/config";
import notesRoutes from "./routes/notesRoutes.js";

const app = express();

app.use(cors());
app.use(express.json());

connectDB();

app.use("/api/notes", notesRoutes);

app.listen(5001, () => {
  console.log("Server started on PORT: 5001");
});
