import { Inter, Roboto, } from "next/font/google";
import "./globals.css";
import Head from "next/head";

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
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta property="og:title" content="Algorithm Visualizer" />
        <meta property="og:description" content="Explore, learn, and master sorting algorithms with our interactive Sorting Algorithm Visualizer. From classic algorithms like Heap Sort and Quick Sort to beginner-friendly Bubble Sort and Selection Sort, this tool allows you to watch each algorithm in action as it sorts an array in real time."/>
        <meta property="og:image" content="https://yourdomain.com/path-to-your-image.png" />
      </Head>
      <body
        className={inter.className}
      >
        {children}
      </body>
    </html>
  );
}
