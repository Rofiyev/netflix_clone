import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { Provider } from "@/provider";
import GlobalContext from "@/context";

const poppins = Poppins({
  subsets: ["latin"],
  weight: "500",
});

export const metadata: Metadata = {
  title: "Netflix | @rof1yev",
  description:
    "You can watch as much as you want, whenever you want without a single commercial – all for one low monthly price. There's always something new to discover and new TV shows and movies are added every week!",
  icons: [
    {
      url: "/netflix-icon.svg",
      href: "/netflix-icon.svg",
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <Provider attribute="class" defaultTheme="dark">
          <GlobalContext>{children}</GlobalContext>
        </Provider>
      </body>
    </html>
  );
}
