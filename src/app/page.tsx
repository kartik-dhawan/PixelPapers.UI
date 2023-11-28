import HomePage from "@/components/HomePage"
import ReduxProvider from "@/redux/ReduxProvider"
import { Stack } from "@mui/material"

export default async function Home() {
  return (
    <Stack component="main">
      <ReduxProvider>
        <HomePage />
      </ReduxProvider>
    </Stack>
  )
}
