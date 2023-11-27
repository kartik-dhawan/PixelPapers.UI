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

export interface BlogMetaInformationCtf {
  timeToReadInSeconds: number
}

export interface TravelBlogPost {
  blogTitle?: string
  blogMetaImage?: any
  blogMetaTitle?: string
  blogTravelLocation?: string
  blogType?: string
  blogUrlSlug?: string
  initialBlogDescription?: string
  blogThemeColor?: string
  createdAt?: string
  updatedAt?: string
  blogMetaInformation?: BlogMetaInformationCtf
  blogContentAll?: any[]
  blogLandingSectionImage?: any
}

export interface ContentfulTravelBlog {
  fields: TravelBlogPost
  sys: any
  metadata: any
}

export interface TravelBlogContentfulObject {
  metadata: any
  fields: TravelBlogPost
  sys: any
}

export interface OnThisPageLinkObject {
  label: string
  blogSectionId: string
}

export type ClassOrID = `#${string}` | `.${string}`
