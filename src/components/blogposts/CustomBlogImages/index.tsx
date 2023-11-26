import { Box, Stack } from "@mui/material"
import Image from "next/image"
import { styles } from "./styles"

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
  return (
    <>
      {blogImages.length !== 0 && (
        <Stack alignItems="center" id="introduction">
          <Box sx={styles.customImage}>
            <Image
              src={"https:" + blogImages[0]?.fields.file.url}
              alt={blogImages[0]?.fields.description}
              fill
              style={{ objectFit: "cover" }}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw)"
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
