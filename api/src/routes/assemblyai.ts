import { AssemblyAI } from "assemblyai";
import dotenv from "dotenv";

dotenv.config();

const client = new AssemblyAI({
  apiKey: process.env.ASSEMBLYAI_API_KEY ?? "",
});

export const transcribe = async (meetingLink: string): Promise<any> => {
  console.log(process.env.ASSEMBLYAI_API_KEY);
  const data = {
    audio: meetingLink,
    speaker_labels: true,
  };
  const transcript = await client.transcripts.transcribe(data);
  return transcript;
};
