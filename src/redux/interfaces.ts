import {
  ContentfulFields,
  OnThisPageLinkObject,
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

export interface CurrentBlogSliceState {
  onThisPageData: OnThisPageLinkObject[] | null
}
