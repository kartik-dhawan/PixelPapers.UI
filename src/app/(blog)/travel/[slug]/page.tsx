import TravelBlogPosts from "@/components/TravelBlogPosts"
import { getTravelBlogBySlug } from "@/lib/methods"
import ReduxProvider from "@/redux/ReduxProvider"

const TravelBlogPage = async ({ params }: { params: { slug: string } }) => {
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
