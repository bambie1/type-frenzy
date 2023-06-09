import "./globals.css";
import Link from "next/link";
import { Outfit } from "next/font/google";
import Image from "next/image";
import {
  ClerkProvider,
  SignedIn,
  SignedOut,
  SignInButton,
  UserButton,
} from "@clerk/nextjs";
import { Analytics } from "@vercel/analytics/react";

const outfit = Outfit({ subsets: ["latin"] });

export const metadata = {
  title: "Type Frenzy",
  description:
    "Challenge your typing speed and accuracy every day with our addictive daily typing tests - Appwrite Hackathon",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <ClerkProvider>
        <html lang="en">
          <body className={`${outfit.className}`}>
            <div className="mx-auto flex min-h-screen w-full max-w-5xl flex-col px-4 lg:px-6">
              <header className="py-4">
                <nav className="flex items-center justify-between">
                  <Link
                    href="/"
                    className="group flex shrink-0 items-center gap-2"
                  >
                    <div className="aspect-square h-10 rounded-md bg-primary shadow-keycap transition duration-200 group-hover:shadow-keycap-hover"></div>
                    <span className="text-lg font-semibold transition duration-150 group-hover:text-gray-600 lg:text-2xl">
                      type-frenzy
                    </span>
                  </Link>

                  <div className="flex items-center gap-4 text-gray-600">
                    <Link
                      href="/daily-challenge"
                      className="hidden transition duration-150 hover:text-black hover:underline md:block"
                    >
                      Daily challenge
                    </Link>
                    <Link
                      href="/leaderboard"
                      className="hidden transition duration-150 hover:text-black hover:underline md:block"
                    >
                      Leaderboard
                    </Link>

                    <SignedIn>
                      <UserButton afterSignOutUrl="/" />
                    </SignedIn>
                    <SignedOut>
                      <SignInButton />
                    </SignedOut>
                  </div>
                </nav>
              </header>
              <main className="my-20 flex w-full flex-1 flex-col">
                {children}
              </main>
              <footer className="flex flex-wrap items-center justify-between gap-2 py-4">
                <div className="flex items-center gap-4">
                  <Link
                    href="https://hashnode.com/hackathons/appwrite"
                    target="_blank"
                    className="underline"
                  >
                    2023 Appwrite Hackathon
                  </Link>
                  <Link
                    href="https://github.com/bambie1/type-frenzy"
                    target="_blank"
                    className="text-gray-600"
                  >
                    Github repo
                  </Link>
                </div>

                <div className="flex items-center gap-4">
                  <p>Powered by</p>
                  <Link href="https://appwrite.io/" target="_blank">
                    <Image
                      src="/built-with-appwrite.svg"
                      alt="Vercel logo-type"
                      width={108}
                      height={27}
                    />
                  </Link>
                  <Link href="https://vercel.com/" target="_blank">
                    <Image
                      src="/vercel-dark.svg"
                      alt="Vercel logo-type"
                      width={88}
                      height={20}
                    />
                  </Link>
                </div>
              </footer>
            </div>
          </body>
        </html>
      </ClerkProvider>
      <Analytics />
    </>
  );
}
