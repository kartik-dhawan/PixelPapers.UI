import { getContentfulData } from "@/lib/methods"
import Preloader from "@/redux/Preloader"
import { updateContentfulData } from "@/redux/slices/contentSlice"
import { store } from "@/redux/store"
import { ChildrenProps } from "@/utils/interfaces"

export const metadata = {
  metadataBase: new URL("https://kartikdhawan.in"),
  title: "Pixel Papers",
}
const RootLayout = async ({ children }: ChildrenProps) => {
  // fetches content from contentful from the collection for PixelPapers
  const content = await getContentfulData()
  content && store.dispatch(updateContentfulData(content))
  return (
    <>
      {/* <preloader/> syncs server side redux store to client side store */}
      <Preloader
        data={{
          content,
        }}
      />
      <section>{children}</section>
    </>
  )
}

export default RootLayout
