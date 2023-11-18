import { createClient } from "contentful"

export const contentfulConfig = {
  space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID || "",
  accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN || "",
}

export const client = createClient(contentfulConfig)
