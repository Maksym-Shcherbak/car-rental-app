import { Outlet } from "react-router-dom";
import { AppBar } from "../AppBar/AppBar";
import { Suspense } from "react";
import { ToastContainer } from "react-toastify";

export const Layout = () => {
  return (
    <>
      <AppBar />
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
      <ToastContainer />
    </>
  );
};
