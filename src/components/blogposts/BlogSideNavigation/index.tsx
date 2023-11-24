import { dmSans } from "@/utils/fonts"
import { TravelBlogContentfulObject } from "@/utils/interfaces"
import { Box, Divider, List, ListItem, Stack } from "@mui/material"
import { styles } from "./styles"
import Link from "next/link"
import { lightenHexColor } from "@/utils/methods"

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
      <List sx={{ display: "flex", flexDirection: "column", gap: "6px" }}>
        {blogs.map((item) => {
          return (
            <ListItem
              key={item.sys.id}
              sx={{
                ...styles.blogNavListItem,
                backgroundColor: lightenHexColor(themeColor ?? "#222", 0.9),
                "&:hover": {
                  backgroundColor: lightenHexColor(themeColor ?? "#222", 0.8),
                },
              }}
            >
              <Link
                href={`/travel/${item.fields.blogUrlSlug}`}
                aria-label={`Click here to go to another article named: ${item.fields.blogTitle}`}
              >
                {item.fields.blogTitle}
              </Link>
            </ListItem>
          )
        })}
      </List>
    </Stack>
  )
}

export default BlogSideNavigation
