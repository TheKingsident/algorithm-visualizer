import { Inter, Roboto, } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ['latin'],
});

const roboto = Roboto({
  subsets: ['latin'],
  weight: ['400', '700']
});

export const metadata = {
  title: "Algorithm Visualizer",
  description: "Visualizes how the the different sorting algorithms work",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={inter.className}
      >
        {children}
      </body>
    </html>
  );
}
