import Button from "@mui/material/Button";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import { styled } from "@mui/material/styles";
import { Dispatch, SetStateAction } from "react";

const FileUploadInput = styled("input")({
  clip: "rect(0 0 0 0)",
  clipPath: "inset(50%)",
  height: 1,
  overflow: "hidden",
  position: "absolute",
  bottom: 0,
  left: 0,
  whiteSpace: "nowrap",
  width: 1,
});

interface FileUploadButtonProps {
  setFile: Dispatch<SetStateAction<Blob | FileList | File | undefined>>;
}

export const FileUploadButton = ({ setFile }: FileUploadButtonProps) => {
  return (
    <Button
      component="label"
      role={undefined}
      variant="contained"
      tabIndex={-1}
      startIcon={<CloudUploadIcon />}
    >
      Upload files
      <FileUploadInput
        type="file"
        onChange={(event) => {
          setFile(event.target.files!);
          console.log(event.target.files!);
        }}
      />
    </Button>
  );
};
