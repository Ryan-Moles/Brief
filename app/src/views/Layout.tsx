import { useMediaQuery } from "@mui/material";
import { Navbar } from "../components/navbar/Navbar";
import { Outlet } from "react-router";

export const Layout = () => {
  const isDesktop: boolean = useMediaQuery("(min-width:1000px)");
  return (
    <>
      <Navbar isDesktop={isDesktop} />
      <Outlet />
    </>
  );
};
