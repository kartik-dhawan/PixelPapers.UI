import ReduxProvider from "@/redux/ReduxProvider"
import Link from "next/link"

export default function Home() {
  return (
    <main>
      <ReduxProvider>
        <div>
          Redirect to: <Link href="/travel">Travel</Link> page.
        </div>
      </ReduxProvider>
    </main>
  )
}
