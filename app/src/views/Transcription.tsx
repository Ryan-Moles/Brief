import { Box, Button, Paper, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { theme } from "../theme";

type Transcript = {
  id: string;
  text: string;
  status: string;
};

export const Transcribe = () => {
  const [transcript, setTranscript] = useState<Transcript>();
  const [trigger, setTrigger] = useState(false);
  const fetchTranscriptionParams = {
    meetingLink: `https://assembly.ai/sports_injuries.mp3`,
  };
  useEffect(() => {
    if (!trigger) {
      console.info("not triggered");
      return;
    }
    const getTranscript = async () => {
      try {
        const fetchTranscription = await fetch(
          `http://localhost:8080/transcribe`,
          {
            method: `POST`,
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(fetchTranscriptionParams),
          }
        );
        const data = await fetchTranscription.json();
        setTranscript(data);
      } catch (error) {
        console.log(error);
        return;
      } finally {
        setTrigger(false);
      }
    };
    getTranscript();
  }, [trigger]);

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        marginTop: 5,
        height: "100vh",
        backgroundColor: theme.palette.primary.main,
      }}
    >
      <Paper
        sx={{
          height: "60%",
          padding: "20px",
          width: "10%",
          elevation: 6,
          margin: "20px",
        }}
      >
        <Typography>Meeting</Typography>
        <Button
          onClick={() => {
            setTrigger(true);
          }}
        >
          <Typography>Transcribe</Typography>
        </Button>
      </Paper>
      <Paper
        sx={{
          height: "100%",
          padding: "20px",
          width: "60%",
          elevation: 6,
          margin: "20px",
        }}
      >
        <Typography>Transcript/Summary</Typography>
        <Typography>{transcript?.text || "hello"}</Typography>
      </Paper>
      <Paper
        sx={{
          height: "100%",
          padding: "20px",
          width: "30%",
          elevation: 6,
          margin: "20px",
        }}
      >
        <Typography>Ai Agent</Typography>
      </Paper>
    </Box>
  );
};
