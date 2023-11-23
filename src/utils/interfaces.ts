export interface ChildrenProps {
  children: React.ReactNode
}

export type ContentfulFields = {
  [key: string]: any
}

export interface ThumbnailItem {
  fields: {
    blogMetaTitle: string
    blogTravelLocation: string
    blogType: string
    blogMetaImage: any
  }
  sys: any
}
export interface SocialMediaLink {
  id: number
  label: string
  url: string
  icon: string
}

export interface TravelBlogPost {
  blogTitle?: string
  blogMetaImage?: any
  blogMetaTitle?: string
  blogTravelLocation?: string
  blogType?: string
  blogUrlSlug?: string
  blogInitialDescription?: any
  blogThemeColor?: string
}

export interface ContentfulTravelBlog {
  fields: TravelBlogPost
  sys: any
  metadata: any
}
