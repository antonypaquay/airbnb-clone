import {Nunito} from 'next/font/google';
import './globals.css'

import React from "react";
import ClientOnly from "./components/ClientOnly";
import Navbar from './components/navbar/Navbar';
import RegisterModal from "./components/modals/RegisterModal";
import ToasterProvider from "./providers/ToasterProvider";

export const metadata = {
  title: 'Airbnb',
  description: 'Airbnb clone',
}

const font = Nunito({
  subsets: ['latin'],
  weight: ["300", "400", "500", "600", "700", "800", "900"]
})

export default function RootLayout({children}: { children: React.ReactNode }) {
  return (
    <html lang="en">
    <body className={font.className}>
    <ClientOnly>
      <ToasterProvider />
      <RegisterModal />
      <Navbar />
    </ClientOnly>
    {children}
    </body>
    </html>
  )
}
