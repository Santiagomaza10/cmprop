"use client";

import Navbar from "./components/navbar";
import "./globals.css";
import { Inter } from "next/font/google";
import { Container } from "@mui/system";
import { ThemeProvider } from "@emotion/react";
import theme from "./utils/theme";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <ThemeProvider theme={theme}>
        <body className={inter.className}>
          <Navbar />
          <Container>{children}</Container>
        </body>
      </ThemeProvider>
    </html>
  );
}
