import TravelBlogPosts from "@/components/TravelBlogPosts"
import { getTravelBlogBySlug } from "@/lib/methods"
import ReduxProvider from "@/redux/ReduxProvider"
import { Box } from "@mui/material"
import { Metadata, ResolvingMetadata } from "next"
import { notFound } from "next/navigation"

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
    description: `${currentBlog?.initialBlogDescription?.slice(0, 120)}...`,
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

  if (!currentBlog) {
    // if there is not blog, throw 404 page error
    return notFound()
  }

  return (
    <ReduxProvider>
      {currentBlog ? (
        <TravelBlogPosts currentBlog={currentBlog} slug={params.slug} />
      ) : (
        <Box>The Page does not exist.</Box>
      )}
    </ReduxProvider>
  )
}

export default TravelBlogPage
