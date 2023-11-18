import Dummy from "@/components/Dummy"
import ReduxProvider from "@/redux/ReduxProvider"

export default function Home() {
  return (
    <main>
      <ReduxProvider>
        <Dummy />
      </ReduxProvider>
    </main>
  )
}
