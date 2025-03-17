import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import { login } from "./routes/login";

dotenv.config({ path: "../.env" });

const app: Express = express();
const port = process.env.PORT;

app.get("/", (req: Request, res: Response) => {
  res.send("Server is up");
});

app.get("/login", (req: Request, res: Response) => {
  res.send(login(req, res));
});

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});
