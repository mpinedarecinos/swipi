import "dotenv/config";
import express from "express";
import cors from "cors";
import roomsRouter from "./routes/rooms.js";

const app = express();
app.use(cors());
app.use(express.json());
app.use("/api/rooms", roomsRouter);

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
