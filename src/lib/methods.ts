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
  return data.items[0].fields ?? {}
}

/**
 *
 * @returns travel stories data // coming directly from contentful
 */
export const getTravelStoriesData = async () => {
  const data = await client.getEntries({
    content_type: process.env.NEXT_PUBLIC_CONTENTFUL_TRAVEL_STORIES_TYPE ?? "",
  })
  return data.items ?? []
}
/**
 *
 * @returns travel itineraries data // coming directly from contentful
 */
export const getTravelItinerariesData = async () => {
  const data = await client.getEntries({
    content_type:
      process.env.NEXT_PUBLIC_CONTENTFUL_TRAVEL_ITINERARIES_TYPE ?? "",
  })
  return data.items ?? []
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
    const travelItineraries = await getTravelItinerariesData()
    const travelStories = await getTravelStoriesData()
    if (content) {
      const blogs = [...travelItineraries, ...travelStories]

      // filters out the blog data on the basis of 'slug' from url
      const currentBlog: ContentfulTravelBlog[] = blogs.filter(
        (item: ContentfulTravelBlog) => item.fields.blogUrlSlug === slug,
      )

      if (currentBlog.length !== 0) {
        return {
          createdAt: currentBlog[0].sys.createdAt,
          updatedAt: currentBlog[0].sys.updatedAt,
          ...currentBlog[0].fields,
        }
      } else {
        return null
      }
    } else return null
  } catch (error) {
    console.log(error)
    return null
  }
}
