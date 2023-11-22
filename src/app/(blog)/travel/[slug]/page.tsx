import TravelBlogPosts from "@/components/TravelBlogPosts"
import { getTravelBlogBySlug } from "@/lib/methods"
import ReduxProvider from "@/redux/ReduxProvider"
import { Metadata, ResolvingMetadata } from "next"

interface TravelSlugParams {
  params: { slug: string }
  parent?: ResolvingMetadata
}

export async function generateMetadata({
  params,
  parent,
}: TravelSlugParams): Promise<Metadata> {
  const currentBlog = await getTravelBlogBySlug(params?.slug ?? "")

  // optionally access and extend (rather than replace) parent metadata
  const previousImages = (await parent)?.openGraph?.images || []

  return {
    title: currentBlog?.blogTitle ?? "Travel Blog | Pixel Papers",
    description: "",
    openGraph: {
      images: [currentBlog?.blogMetaImage.fields.file.url, ...previousImages],
    },
  }
}

const TravelBlogPage = async ({ params }: TravelSlugParams) => {
  // gets current blog directly from contentful
  const currentBlog = await getTravelBlogBySlug(params?.slug ?? "")

  return (
    <ReduxProvider>
      {currentBlog && (
        <TravelBlogPosts currentBlog={currentBlog} slug={params.slug} />
      )}
    </ReduxProvider>
  )
}

export default TravelBlogPage
