import { AssemblyAI } from "assemblyai";

const client = new AssemblyAI({
  apiKey: process.env.ASSEMBLYAI_API_KEY!,
});

export const transcribe = async (meetingLink: string): Promise<any> => {
  const data = {
    audio: meetingLink,
    speaker_labels: true,
  };

  const transcript = await client.transcripts.transcribe(data);
  return transcript;
};
