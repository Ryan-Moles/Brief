import { useState } from "react";
import { FileUploadButton } from "../utils/fileUploadButton/FileUploadButton";

export const FileUpload = () => {
  const [file, setFile] = useState<Blob | FileList | File | undefined>();
  return (
    <>
      <FileUploadButton setFile={setFile} />
    </>
  );
};
