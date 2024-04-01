"use client"

import { Inter } from "next/font/google";
import "./globals.css";
import NavBar from "./navBar/NavBar.jsx";
import { metadata } from "./metadata";
import CarritoProvider from "./context/CarritoProvider";
import ProductosProvider from "./context/ProductosProvider";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description}/>
        <link rel="icon" href="favicon.ico" />
      </head>

      <body className={inter.className}>
        <ProductosProvider>
          <CarritoProvider>
            <NavBar />

            {children}
          </CarritoProvider>
        </ProductosProvider>
      </body>
    </html>
  );
}
