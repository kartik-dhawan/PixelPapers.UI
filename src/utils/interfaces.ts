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
