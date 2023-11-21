"use client"

import { RootType } from "@/redux/store"
import { useSelector } from "react-redux"
import {
  Box,
  ImageList,
  ImageListItem,
  ImageListItemBar,
  Skeleton,
} from "@mui/material"
import Image from "next/image"
import { ThumbnailItem } from "@/utils/interfaces"
import { dmSans } from "@/utils/fonts"
import Link from "next/link"
import { styles } from "./styles"
import { useCallback, useState } from "react"

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

  // sets theloading state of the images
  const [hasPlaceholder, setHasPlaceholder] = useState(true)

  const imageLoadingHandler = useCallback(() => {
    setHasPlaceholder(false)
  }, [])

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
        ]?.map((item: ThumbnailItem, index: number) => {
          return (
            <ImageListItem
              className={tid + "CardListItem"}
              data-testid={tid + "CardListItem" + index}
              key={item.sys.id}
              sx={{
                flexGrow: index === largeCardIndex ? 2 : 1,
                ...styles.travelThumbnailsCardListItem,
              }}
            >
              <Link href="#" target="_blank">
                <Box
                  className={tid + "ImageWrapper"}
                  data-testid={tid + "ImageWrapper" + index}
                  sx={styles.travelThumbnailsImageWrapper}
                >
                  {hasPlaceholder && (
                    <Skeleton
                      variant="rectangular"
                      height="100%"
                      width="100%"
                    />
                  )}
                  <Image
                    onLoad={imageLoadingHandler}
                    src={`https:${item.fields.blogMetaImage.fields.file.url}`}
                    alt=""
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw)"
                  />
                </Box>
                {!hasPlaceholder && (
                  <ImageListItemBar
                    className={tid + "TextWrapper " + dmSans.className}
                    data-testid={tid + "TextWrapper" + index}
                    sx={styles.travelThumbnailsCardTextWrapper}
                    subtitle={
                      <>
                        <Box sx={styles.travelThumbnailsBlogType}>
                          {item?.fields.blogType ?? ""}
                        </Box>
                        <Box
                          component="h4"
                          sx={styles.travelThumbnailsBlogTitle}
                        >
                          {item?.fields.blogMetaTitle ?? ""}
                        </Box>
                        <Box sx={styles.travelThumbnailsLocationText}>
                          {item?.fields.blogTravelLocation ?? ""}
                        </Box>
                      </>
                    }
                  >
                    <Box>{item?.fields.blogType ?? ""}</Box>
                  </ImageListItemBar>
                )}
              </Link>
            </ImageListItem>
          )
        })}
      </ImageList>
    </Box>
  )
}

export default TravelBlogThumbnail
