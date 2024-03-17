import { Inter } from "next/font/google";
import "./globals.css";
import Nav from "../components/Nav";
import NewNav from "@/components/NewNav";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "ISTE Moneyball",
  description: "Things are gonna be a lil Messi",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
      <NewNav />
      <div className="min-h-screen bg-base-100 flex justify-center items-center p-4">
      {children}
      </div>
      {/* <Footer /> */}
      </body>
    </html>
  );
}
