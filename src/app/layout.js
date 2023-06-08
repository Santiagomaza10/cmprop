"use client";

import Navbar from "./components/navbar";
import "./globals.css";
import { Inter } from "next/font/google";
import { Container } from "@mui/system";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        <Container>{children}</Container>
      </body>
    </html>
  );
}
