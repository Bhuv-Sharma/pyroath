import "./globals.css";
import Navbar from "../components/Navbar";

export const metadata = {
  title: "My To-Do List",
  description: "A simple task manager built with Next.js and React",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <video
          className="video-background"
          autoPlay
          muted
          loop
          playsInline
        >
          <source src="/background.mp4" type="video/mp4" />
        </video>

        <div className="background-overlay"></div>

        <div className="site-content">
          <Navbar />
          <main>{children}</main>
        </div>
      </body>
    </html>
  );
}