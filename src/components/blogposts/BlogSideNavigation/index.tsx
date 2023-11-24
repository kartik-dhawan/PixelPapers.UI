import { dmSans } from "@/utils/fonts"
import { TravelBlogContentfulObject } from "@/utils/interfaces"
import { Box, Divider, Stack } from "@mui/material"
import BlogNavList from "./BlogNavList"
import { styles } from "./styles"

interface BlogSideNavigationProps {
  blogType: string
  themeColor?: string
  blogs: TravelBlogContentfulObject[]
}

const BlogSideNavigation = ({
  blogType,
  themeColor,
  blogs,
}: BlogSideNavigationProps) => {
  return (
    <Stack
      divider={<Divider sx={styles.blogsNavDivider} />}
      sx={styles.blogsSideNavWrapper}
      className={dmSans.className}
    >
      <Box sx={styles.blogsSideNavTitle}>More on {blogType}</Box>
      <BlogNavList blogs={blogs} themeColor={themeColor} />
    </Stack>
  )
}

export default BlogSideNavigation
