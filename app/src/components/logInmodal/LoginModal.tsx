import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { TextField } from "@mui/material";
import { useState } from "react";

const LoginBox = () => {
  type LoginDetails = {
    email: string;
    password: string;
  };
  const [loginDetails, setLoginDetails] = useState<LoginDetails>({
    email: "",
    password: "",
  });
  return (
    <React.Fragment>
      <CardContent sx={{}}>
        <Box>
          <Typography
            gutterBottom
            sx={{ color: "text.secondary", fontSize: 20 }}
          >
            Login Screen
          </Typography>
        </Box>
        <Box
          sx={{ display: "flex", flexDirection: "column", marginTop: "5px" }}
        >
          <TextField
            id="outlined-basic"
            label="Email"
            variant="outlined"
            onChange={(event) => {
              setLoginDetails((existingLoginDetails) => {
                return { ...existingLoginDetails, email: event.target.value };
              });
            }}
          />
          <TextField
            id="outlined-basic"
            label="Password"
            variant="outlined"
            sx={{ marginTop: "5px" }}
            onChange={(event) => {
              setLoginDetails((existingLoginDetails) => {
                return {
                  ...existingLoginDetails,
                  password: event.target.value,
                };
              });
            }}
          />
        </Box>
      </CardContent>
      <CardActions>
        <Box>
          <Button
            size="small"
            sx={{ backgroundColor: "blue", color: "white" }}
            onClick={() => {
              console.log("logged in");
            }}
          >
            Log In
          </Button>
        </Box>
      </CardActions>
    </React.Fragment>
  );
};

export default function LoginCard() {
  return (
    <Box
      sx={{
        minWidth: 275,
        display: "flex",
        justifyContent: "center",
      }}
    >
      <Card
        sx={{
          boxShadow: "rgba(0, 0, 0, 0.35) 0px 0px 10px",
          padding: "40px",
          position: "relative",
          top: "30%",
          marginTop: "10%",
        }}
        variant="outlined"
      >
        <LoginBox />
      </Card>
    </Box>
  );
}

//use O
