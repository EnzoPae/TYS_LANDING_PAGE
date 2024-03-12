import { Afacad } from "next/font/google";
import "./globals.css";

const afacad = Afacad({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
});

export const metadata = {
  title: "Terminales y Servicios",
  description: "Landing page terminales y servicios.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={afacad.className}>{children}</body>
    </html>
  );
}
