export interface ChildrenProps {
  children: React.ReactNode
}

export type ChildrenType = React.ReactNode

export type ContentfulFields = {
  [key: string]: any
}

export type ThumbnailItem = {
  fields: {
    blogMetaTitle: string
    blogTravelLocation: string
    blogType: string
    blogMetaImage: any
  }
  sys: any
}
export type SocialMediaLink = {
  id: number
  label: string
  url: string
  icon: string
}

export type BlogMetaInformationCtf = {
  timeToReadInSeconds: number
}

export type BlogAuthorData = {
  username: string
  usernameLink?: string
  email?: string
  bio: string
}

export type ExternalEmbedLinkObject = {
  id: number
  label: "spotify" | "youtube"
  link?: string
  title?: string
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
  blogConclusion?: any
  blogAuthorData?: BlogAuthorData
  authorImage?: any
  externalEmbedLinks?: ExternalEmbedLinkObject[]
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

export type OnThisPageLinkObject = {
  label: string
  blogSectionId: string
}

export type ClassOrID = `#${string}` | `.${string}`

export type ErrorPage = {
  error: Error
  reset?: () => void
}
