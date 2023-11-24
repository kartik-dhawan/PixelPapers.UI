import { TravelBlogContentfulObject } from "@/utils/interfaces"
import { lightenHexColor } from "@/utils/methods"
import { List, ListItem } from "@mui/material"
import Link from "next/link"
import { styles } from "../styles"

interface BlogNavListProps {
  blogs: TravelBlogContentfulObject[]
  themeColor?: string
}

const BlogNavList = ({ blogs, themeColor }: BlogNavListProps) => {
  return (
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
            <Link href={`/travel/${item.fields.blogUrlSlug}`}>
              {item.fields.blogTitle}
            </Link>
          </ListItem>
        )
      })}
    </List>
  )
}

export default BlogNavList
