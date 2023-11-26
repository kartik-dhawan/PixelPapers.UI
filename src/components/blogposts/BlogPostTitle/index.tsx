import { Box, Stack } from "@mui/material"
import CuratedBy from "../../common/BlogCategoryTitle/CuratedBy"
import { GLOBAL_COLORS } from "@/utils/colorSchemes"
import { dmSans } from "@/utils/fonts"
import { styles } from "./styles"

interface BlogPostTitleProps {
  title: string
  description?: any
  themeColor?: string
}

const BlogPostTitle = ({
  title,
  description,
  themeColor,
}: BlogPostTitleProps) => {
  const bid = "blogPost"

  return (
    <Stack
      className={bid + "HeadWrapper " + dmSans.className}
      data-testid={bid + "HeadWrapper"}
      sx={styles.blogPostHeadWrapper}
    >
      <CuratedBy
        themeColor={themeColor ?? GLOBAL_COLORS.BACKGROUND_PRIMARY_DARK}
      />
      <Box
        component="h1"
        className={bid + "Title"}
        data-testid={bid + "Title"}
        sx={styles.blogPostTitle}
      >
        {title}
      </Box>
      {description && (
        <Box
          className={bid + "InitialDesc"}
          data-testid={bid + "InitialDesc"}
          sx={styles.blogPostInitialDesc}
        >
          {description}
        </Box>
      )}
    </Stack>
  )
}

export default BlogPostTitle
