import { Box, ImageListItem, ImageListItemBar, Skeleton } from "@mui/material"
import { styles } from "./styles"
import Link from "next/link"
import Image from "next/image"
import { useCallback, useState } from "react"
import { dmSans } from "@/utils/fonts"

interface ThumbnailProps {
  item: any
  index: number
  largeCardIndex: 0 | 1 | 2
}

export const ThumbnailHeadings = ({ item }: any) => {
  return (
    <>
      <Box sx={styles.travelThumbnailsBlogType}>{item?.blogType ?? ""}</Box>
      <Box component="h3" sx={styles.travelThumbnailsBlogTitle}>
        {item?.blogMetaTitle ?? ""}
      </Box>
      <Box sx={styles.travelThumbnailsLocationText}>
        {item?.blogTravelLocation ?? ""}
      </Box>
    </>
  )
}

const Thumbnail = ({ item, index, largeCardIndex }: ThumbnailProps) => {
  const tid = "travelThumbnail"

  // sets the loading state of the images
  const [hasPlaceholder, setHasPlaceholder] = useState(true)

  const imageLoadingHandler = useCallback(() => {
    setHasPlaceholder(false)
  }, [])

  return (
    <ImageListItem
      className={tid + "CardListItem"}
      data-testid={tid + "CardListItem" + index}
      sx={{
        flexGrow: index === largeCardIndex ? 2 : 1,
        ...styles.travelThumbnailsCardListItem,
      }}
    >
      <Link
        href={`/travel/${item.blogUrlSlug}`}
        target="_blank"
        rel="noreferrer"
        aria-label={`${
          item?.blogMetaTitle ?? "Travel & More"
        }: Click to view the blog`}
      >
        <Box
          className={tid + "ImageWrapper"}
          data-testid={tid + "ImageWrapper" + index}
          sx={styles.travelThumbnailsImageWrapper}
        >
          {hasPlaceholder && (
            <Skeleton variant="rectangular" height="100%" width="100%" />
          )}
          <Image
            onLoad={imageLoadingHandler}
            src={`https:${item.blogMetaImage.fields.file.url}`}
            alt={item.blogMetaImage.fields.description}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw)"
          />
        </Box>
        {!hasPlaceholder && (
          <ImageListItemBar
            className={tid + "TextWrapper " + dmSans.className}
            data-testid={tid + "TextWrapper" + index}
            sx={styles.travelThumbnailsCardTextWrapper}
            subtitle={<ThumbnailHeadings item={item} />}
          >
            <Box>{item?.blogType ?? ""}</Box>
          </ImageListItemBar>
        )}
      </Link>
    </ImageListItem>
  )
}

export default Thumbnail
