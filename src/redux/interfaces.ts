import { ContentfulFields, TravelBlogPost } from "@/utils/interfaces"

export interface ContentSliceState {
  content: ContentfulFields
}

export interface TravelSliceState {
  blogs: any[]
  currentBlog?: TravelBlogPost
}
