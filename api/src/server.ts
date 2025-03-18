import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import { login } from "./routes/login";
import { transcribe } from "./routes/assemblyai";
import cors from "cors";

dotenv.config({ path: "../.env" });

const app: Express = express();
const port = process.env.PORT;

app.use(cors({ origin: "http://localhost:5173" }));
app.use(express.json());

app.get("/", (req: Request, res: Response) => {
  res.send("Server is up");
});

app.get("/login", (req: Request, res: Response) => {
  res.send(login(req, res));
});

app.post("/transcribe", async (req: Request, res: Response) => {
  const meetingLink = req.body.meetingLink;
  if (!meetingLink) {
    res.status(400).json({ error: "meetingLink is required" });
  }
  try {
    const transcription = await transcribe(meetingLink);
    res.json(transcription);
  } catch (error) {
    console.error("Transcription Error:", error);
    res.status(500).json({ error: "Failed to transcribe audio" });
  }
});

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});
