import "@/app/ui/global.css";
import { inter } from "@/app/ui/fonts";
import AnimatedLayout from "./animeLayout";
import PageTransition from "./PageTransition";


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>
        <PageTransition>
          {children}
        </PageTransition>
      </body>
    </html>
  );
}
