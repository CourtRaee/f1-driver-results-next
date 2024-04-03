import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./components/header/header";
import Footer from "./components/footer/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "F1 Driver Results",
  description:
    "A website where a user can search for their desired F1 driver and find their timings and race results for each race of the 2024 season.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <div>
        <Header />
        <body className={inter.className}>{children}</body>
        <Footer />
      </div>
    </html>
  );
}
