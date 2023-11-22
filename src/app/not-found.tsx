import Page404 from "@/components/Page404"
import ReduxProvider from "@/redux/ReduxProvider"

export const metadata = {
  metadataBase: new URL("https://blogs.kartikdhawan.in"),
  title: "404 | Page not found",
  description:
    "The page you're looking for does not exist. This is a generic error page. ",
}

const NotFound = () => {
  return (
    <ReduxProvider>
      <Page404 />
    </ReduxProvider>
  )
}

export default NotFound
