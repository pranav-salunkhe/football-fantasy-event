import { Inter } from "next/font/google";
import "./globals.css";
import Nav from "../components/Nav";
import NewNav from "@/components/NewNav";
import Footer from "@/components/Footer";
import { Roboto } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "ISTE Moneyball",
  description: "Things are gonna be a lil Messi",
};
const roboto = Roboto({
  subsets: ['latin'],
  weight:['100', '300', '400', '500', '700', '900']
})
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={roboto.className}>
      <NewNav />
      <div className="min-h-screen bg-base-100 flex justify-center items-center p-4">
      {children}
      </div>
      {/* <Footer /> */}
      </body>
    </html>
  );
}
