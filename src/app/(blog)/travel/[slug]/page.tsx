import TravelBlogPosts from "@/components/TravelBlogPosts"
import { getTravelBlogBySlug } from "@/lib/methods"
import ReduxProvider from "@/redux/ReduxProvider"
import { Metadata, ResolvingMetadata } from "next"

interface TravelSlugParams {
  params: { slug: string }
}

export async function generateMetadata(
  { params }: TravelSlugParams,
  parent: ResolvingMetadata,
): Promise<Metadata> {
  const currentBlog = await getTravelBlogBySlug(params?.slug ?? "")

  // optionally access & extend (rather than replace) parent metadata
  const previousImages = (await parent)?.openGraph?.images || []

  return {
    title: currentBlog?.blogTitle ?? "Travel Blog | Pixel Papers",
    description: "",
    openGraph: {
      images: [
        `https:${currentBlog?.blogMetaImage.fields.file.url}`,
        ...previousImages,
      ],
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
