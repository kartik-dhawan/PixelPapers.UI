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
import { lightenHexColor, shuffleArray } from "@/utils/methods"
import { useCallback, useEffect, useState } from "react"
import BlogSideNavSkeleton from "@/components/common/Skeletons/BlogSideNavSkeleton"

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
  const [shuffledBlogs, setShuffledBlogs] = useState<any[]>([])

  const showHideToggleHandler = useCallback(() => {
    setShowBlogLinks((prev) => !prev)
  }, [])

  useEffect(() => {
    const shuffled = shuffleArray(blogs)
    // displaying only 5 episodes at once
    setShuffledBlogs(shuffled.slice(0, 5))
  }, [blogs])

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
      <List sx={styles.blogNavList}>
        {shuffledBlogs.length !== 0 ? (
          shuffledBlogs.map((item, index: number) => {
            return (
              <Collapse
                in={showBlogLinks}
                key={`blogs-nav-item-${item.sys.id}-${index}`}
              >
                <ListItem
                  sx={{
                    ...styles.blogNavListItem,
                    backgroundColor: lightenHexColor(themeColor ?? "#222", 0.9),
                    "&:hover": {
                      backgroundColor: lightenHexColor(
                        themeColor ?? "#222",
                        0.8,
                      ),
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
          })
        ) : (
          <BlogSideNavSkeleton />
        )}
      </List>
    </Stack>
  )
}

export default BlogSideNavigation
