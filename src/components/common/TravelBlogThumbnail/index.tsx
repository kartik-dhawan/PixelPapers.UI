"use client"

import { RootType } from "@/redux/store"
import { useSelector } from "react-redux"
import { signal } from "@preact/signals"
import { Box, ImageList, ImageListItem, ImageListItemBar } from "@mui/material"
import Image from "next/image"
import { ThumbnailItem } from "@/utils/interfaces"

interface TravelThumbnailProps {
  type: "stories" | "itineraries"
}

// initializing a signal
const thumbnails = signal([])

const TravelBlogThumbnail = ({ type }: TravelThumbnailProps) => {
  const { content } = useSelector((state: RootType) => state.contentSlice)

  // changing signal's value using content
  thumbnails.value =
    type === "stories"
      ? content?.travelStoryBlogs
      : content?.travelItineraryBlogs

  return (
    <Box>
      <ImageList>
        {thumbnails.value?.map((item: ThumbnailItem) => {
          return (
            <ImageListItem key={item.sys.id}>
              <Image
                src={`https:${item.fields.blogMetaImage.fields.file.url}`}
                alt=""
                width="400"
                height="400"
                style={{ objectFit: "cover" }}
              />
              <ImageListItemBar
                subtitle={
                  <>
                    <Box>{item?.fields.blogType ?? ""}</Box>
                    <Box>{item?.fields.blogMetaTitle ?? ""}</Box>
                    <Box>{item?.fields.blogTravelLocation ?? ""}</Box>
                  </>
                }
              >
                <Box>{item?.fields.blogType ?? ""}</Box>
              </ImageListItemBar>
            </ImageListItem>
          )
        })}
      </ImageList>
    </Box>
  )
}

export default TravelBlogThumbnail
