import { client } from "@/config/contentful"

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
