import { getContentfulData } from "@/lib/methods"
import Preloader from "@/redux/Preloader"
import { updateContentfulData } from "@/redux/slices/contentSlice"
import { store } from "@/redux/store"
import { META_DATA_FALLBACK } from "@/utils/constants"
import type { Metadata, ResolvingMetadata } from "next"
import { Inter } from "next/font/google"
import Script from "next/script"

const inter = Inter({ subsets: ["latin"] })

export async function generateMetadata(
  parent: ResolvingMetadata,
): Promise<Metadata> {
  const content: any = await getContentfulData()

  // optionally access & extend (rather than replace) parent metadata
  const previousImages = (await parent)?.openGraph?.images || []

  return {
    metadataBase: new URL("https://blogs.kartikdhawan.in"),
    title:
      content?.genericMetaDataImage?.fields?.title ??
      META_DATA_FALLBACK.GENERIC.title,
    description:
      content?.genericMetaDataImage?.fields?.description ??
      META_DATA_FALLBACK.GENERIC.description,
    openGraph: {
      images: [
        content?.genericMetaDataImage.fields.file.url,
        ...previousImages,
      ],
    },
  }
}

const RootLayout = async ({ children }: { children: React.ReactNode }) => {
  let content: any

  try {
    // fetches content from contentful from the collection for PixelPapers
    content = await getContentfulData()
    if (content) {
      store.dispatch(updateContentfulData(content))
    }
  } catch (error: any) {
    throw Error(error)
  }

  return (
    <html lang="en" style={{ scrollBehavior: "smooth" }}>
      {/* Google tag (gtag.js) */}
      <Script
        async
        src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_G_TAG_CODE}`}
      />
      <Script id="google-analytics">
        {`
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());

        gtag('config', '${process.env.NEXT_PUBLIC_G_TAG_CODE}');
       `}
      </Script>
      <Preloader
        data={{
          content,
        }}
      />
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
