import type { Metadata } from "next"
import { Inter } from "next/font/google"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
}

const RootLayout = async ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en" style={{ scrollBehavior: "smooth" }}>
      <body
        id="body"
        className={inter.className}
        suppressHydrationWarning={true}
        style={{ margin: 0, minHeight: "100svh" }}
      >
        {children}
      </body>
    </html>
  )
}

export default RootLayout
