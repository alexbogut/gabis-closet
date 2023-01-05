import Home from "../../page";
import "bootstrap/dist/css/bootstrap.min.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head />
      {/* @ts-ignore */}
      <body>{children}</body>
    </html>
  );
}