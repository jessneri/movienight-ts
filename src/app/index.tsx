import React from "react";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { Routes } from "./routes";

export function App() {
  return (
    <>
      <Header />
      <React.Suspense fallback={null}>
        <Routes />
      </React.Suspense>
      <Footer />
    </>
  );
}
