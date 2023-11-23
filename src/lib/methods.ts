import { client } from "@/config/contentful"
import { ContentfulTravelBlog, TravelBlogPost } from "@/utils/interfaces"

/**
 *
 * @returns contentful-data // coming directly from contentful
 */
export const getContentfulData = async () => {
  const data = await client.getEntries({
    content_type: process.env.NEXT_PUBLIC_CONTENTFUL_CONTENT_TYPE ?? "",
  })
  return data.items[0].fields
}

/**
 *
 * @param {string} slug
 * @returns {Promise<TravelBlogPost | null>}
 */
export const getTravelBlogBySlug = async (
  slug: string,
): Promise<TravelBlogPost | null> => {
  try {
    const content: any = await getContentfulData()
    if (content) {
      const blogs = [
        ...content.travelStoryBlogs,
        ...content.travelItineraryBlogs,
      ]

      // filters out the blog data on the basis of 'slug' from url
      const currentBlog: ContentfulTravelBlog[] = blogs.filter(
        (item: ContentfulTravelBlog) => item.fields.blogUrlSlug === slug,
      )

      if (currentBlog.length !== 0) {
        return currentBlog[0].fields
      } else {
        return null
      }
    } else return null
  } catch (error) {
    console.log(error)
    return null
  }
}
