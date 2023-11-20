import ReduxProvider from "@/redux/ReduxProvider"

export default function Home() {
  return (
    <main>
      <ReduxProvider>
        <div>Hello!!!</div>
      </ReduxProvider>
    </main>
  )
}
