"use client"

import { Box, Skeleton, Stack } from "@mui/material"
import Image from "next/image"
import { styles } from "./styles"
import { useCallback, useState } from "react"

/** A custom component to render images
 *
 * ===== FORMAT =====
 *
 * ==========================
 *          <IMAGE>
 *      <SUBTITLE TEXT>
 *
 *        <DESCRIPTION>
 * ==========================
 *
 * ==========================
 *          <IMAGE>
 *      <SUBTITLE TEXT>
 *
 *        <DESCRIPTION>
 * ==========================
 */

const CustomBlogImages = ({ blogImages }: { blogImages: any[] }) => {
  const [isImageLoaded, setIsImageLoaded] = useState(false)

  const imageLoadingHandler = useCallback(() => {
    setIsImageLoaded(true)
  }, [])

  return (
    <>
      {blogImages.length !== 0 && (
        <Stack alignItems="center" id="introduction">
          <Box sx={styles.customImage}>
            {!isImageLoaded && (
              <Skeleton variant="rectangular" height="100%" width="100%" />
            )}
            <Image
              src={"https:" + blogImages[0]?.fields.file.url}
              alt={blogImages[0]?.fields.description}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw)"
              onLoad={imageLoadingHandler}
            />
          </Box>
          <Box sx={styles.customImageTitleText}>
            {blogImages[0]?.fields.title}
          </Box>
          {/* DESCRIPTION will come here */}
        </Stack>
      )}
    </>
  )
}

export default CustomBlogImages
