import PrimaryFooter from "@/components/common/PrimaryFooter"
import { getContentfulData } from "@/lib/methods"
import Preloader from "@/redux/Preloader"
import ReduxProvider from "@/redux/ReduxProvider"
import { updateContentfulData } from "@/redux/slices/contentSlice"
import { addAllTravelBlogs } from "@/redux/slices/travelSlice"
import { store } from "@/redux/store"
import { ChildrenProps } from "@/utils/interfaces"

export const metadata = {
  metadataBase: new URL("https://blogs.kartikdhawan.in"),
  title: "Pixel Papers",
}
const RootLayout = async ({ children }: ChildrenProps) => {
  let content: any
  let travelBlogs: any

  try {
    // fetches content from contentful from the collection for PixelPapers
    content = await getContentfulData()
    if (content) {
      // gets all travelling blogs including both articles & itineraries
      travelBlogs = [
        ...content.travelStoryBlogs,
        ...content.travelItineraryBlogs,
      ]

      store.dispatch(updateContentfulData(content))
      store.dispatch(addAllTravelBlogs(travelBlogs))
    }
  } catch (error: any) {
    throw Error(error)
  }

  return (
    <>
      {/* <preloader/> syncs server side redux store to client side store */}
      <Preloader
        data={{
          content,
          travelBlogs,
        }}
      />
      <section>{children}</section>
      <ReduxProvider>
        <PrimaryFooter />
      </ReduxProvider>
    </>
  )
}

export default RootLayout
