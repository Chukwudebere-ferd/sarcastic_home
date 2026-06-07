import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Sarcastic Geeks - A Normal Life Is Boring",
  description: "Join Sarcastic Geeks Trybe — a developer community where you build, play, learn, and earn.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
