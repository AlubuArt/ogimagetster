import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });



export default function RootLayout({ children, metadata}) {
  console.log(children.metadata)
  return (
    <html lang="en">
      <head>
     
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
