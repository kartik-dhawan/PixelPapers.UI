import {
  ContentfulFields,
  TravelBlogContentfulObject,
  TravelBlogPost,
} from "@/utils/interfaces"

export interface ContentSliceState {
  content: ContentfulFields
}

export interface TravelSliceState {
  blogs: TravelBlogContentfulObject[]
  currentBlog?: TravelBlogPost
}
