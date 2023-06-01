import Link from "next/link";
import "./globals.css";
import { Outfit } from "next/font/google";
import Image from "next/image";
import { ClerkProvider, currentUser, UserButton } from "@clerk/nextjs";

const outfit = Outfit({ subsets: ["latin"] });

export const metadata = {
  title: "Type Frenzy",
  description:
    "Challenge your typing speed and accuracy every day with our addictive daily typing tests.",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const user = await currentUser();

  return (
    <ClerkProvider>
      <html lang="en">
        <body className={`${outfit.className}`}>
          <div className="mx-auto flex min-h-screen w-full max-w-5xl flex-col px-4 lg:px-6">
            <header className="py-4">
              <nav className="flex items-center justify-between">
                <Link href="/" className="flex items-center gap-2">
                  <Image src="/keycap.svg" alt="" width={40} height={40} />
                  <span className="text-lg font-semibold lg:text-2xl">
                    type-frenzy
                  </span>
                </Link>

                <div className="flex items-center gap-4">
                  <Link href="/leaderboard" className="">
                    Leaderboard
                  </Link>
                  {user ? (
                    <UserButton />
                  ) : (
                    <Link href="/sign-in" className="">
                      Sign In
                    </Link>
                  )}
                </div>
              </nav>
            </header>
            <main className="my-20 flex-1">{children}</main>
            <footer className="flex items-center justify-between gap-2 py-4">
              <p>
                By{" "}
                <Link
                  href="https://benaiahbarango.com"
                  target="_blank"
                  className="underline"
                >
                  Benaiah Barango
                </Link>
              </p>

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
  );
}
