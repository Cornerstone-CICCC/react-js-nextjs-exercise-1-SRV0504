import NavMenu from "../components/NavMenu";
import Footer from "../components/Footer";
import "./globals.css";

export const metadata = {
  title: "NextJS Intro",
  description: "NextJS App Router exercise",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col">
        <NavMenu />
        <main className="flex-1 mx-auto max-w-4xl px-4 py-10">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
