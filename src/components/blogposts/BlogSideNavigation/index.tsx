"use client"

import { dmSans } from "@/utils/fonts"
import { TravelBlogContentfulObject } from "@/utils/interfaces"
import {
  Box,
  Button,
  Collapse,
  Divider,
  List,
  ListItem,
  Stack,
} from "@mui/material"
import { styles } from "./styles"
import Link from "next/link"
import { lightenHexColor } from "@/utils/methods"
import { useCallback, useState } from "react"

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
  const [showBlogLinks, setShowBlogLinks] = useState(true)

  const showHideToggleHandler = useCallback(() => {
    setShowBlogLinks((prev) => !prev)
  }, [])

  return (
    <Stack
      divider={<Divider sx={styles.blogsNavDivider} />}
      sx={styles.blogsSideNavWrapper}
      className={dmSans.className}
    >
      <Stack direction="row" justifyContent="space-between" alignItems="center">
        <Box sx={styles.blogsSideNavTitle}>More on {blogType}</Box>
        <Button
          disableRipple
          sx={{
            padding: 0,
            textTransform: "capitalize",
            transition: "200ms all ease",
            "&:hover": {
              backgroundColor: "transparent",
              textDecoration: "underline",
              opacity: 0.7,
            },
            color: themeColor,
          }}
          onClick={showHideToggleHandler}
        >
          {showBlogLinks ? "Hide" : "Show"}
        </Button>
      </Stack>
      <List sx={{ display: "flex", flexDirection: "column", gap: "6px" }}>
        {blogs.map((item) => {
          return (
            <Collapse in={showBlogLinks} key={item.sys.id}>
              <ListItem
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
            </Collapse>
          )
        })}
      </List>
    </Stack>
  )
}

export default BlogSideNavigation
