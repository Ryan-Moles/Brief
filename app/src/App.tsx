import { Layout } from "./views/Layout";
import { Home } from "./views/Home";
import { FileUpload } from "./views/FileUpload";
import { BrowserRouter, Routes, Route } from "react-router";
import { ThemeProvider } from "@emotion/react";
import { theme } from "./theme";

export const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/upload" element={<FileUpload />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
};
