"use client"

import { RootType } from "@/redux/store"
import { useSelector } from "react-redux"
import { Box, ImageList } from "@mui/material"
import { ThumbnailItem } from "@/utils/interfaces"
import { styles } from "./styles"
import Thumbnail from "./Thumbnail"

interface TravelThumbnailProps {
  type: "stories" | "itineraries"
  largeCardIndex: 0 | 1 | 2
}

const TravelBlogThumbnail = ({
  type,
  largeCardIndex,
}: TravelThumbnailProps) => {
  const tid = "travelThumbnail"
  const { content } = useSelector((state: RootType) => state.contentSlice)

  return (
    <Box
      className={tid + "Wrapper"}
      id={tid + "Wrapper"}
      sx={styles.travelThumbnailsSectionWrapper}
    >
      <ImageList
        className={tid + "ImageList"}
        data-testid={tid + "ImageList"}
        sx={styles.travelThumbnailsImageList}
        cols={3}
        gap={12}
      >
        {content[
          type === "stories" ? "travelStoryBlogs" : "travelItineraryBlogs"
        ]
          ?.slice(0, 3)
          .map((item: ThumbnailItem, index: number) => {
            return (
              <Thumbnail
                key={item.sys.id}
                item={item.fields}
                index={index}
                largeCardIndex={largeCardIndex}
              />
            )
          })}
      </ImageList>
    </Box>
  )
}

export default TravelBlogThumbnail
