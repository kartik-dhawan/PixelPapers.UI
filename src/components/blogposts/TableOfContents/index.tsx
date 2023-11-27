"use client"

import { RootType } from "@/redux/store"
import { Box, Divider, List, ListItem, Stack } from "@mui/material"
import { useSelector } from "react-redux"
import { styles as blogNavStyles } from "../BlogSideNavigation/styles"
import { dmSans } from "@/utils/fonts"
import { OnThisPageLinkObject } from "@/utils/interfaces"
import Link from "next/link"
import { usePathname } from "next/navigation"

const TableOfContents = () => {
  const path = usePathname()

  const { onThisPageData } = useSelector(
    (state: RootType) => state.currentBlogSlice,
  )

  console.log(path)

  return (
    <Stack
      className={dmSans.className}
      sx={{ ...blogNavStyles.blogsSideNavWrapper, position: "sticky", top: 32 }}
      divider={<Divider sx={blogNavStyles.blogsNavDivider} />}
    >
      <Box sx={blogNavStyles.blogsSideNavTitle}>TABLE OF CONTENTS</Box>
      <List>
        {onThisPageData &&
          onThisPageData.map((item: OnThisPageLinkObject, index: number) => {
            return (
              <ListItem
                key={item.blogSectionId + index}
                sx={{
                  "& a": {
                    borderBottom: "1px solid #666",
                    textDecoration: "none",
                    color: "#666",
                    fontWeight: 500,
                    "&:hover": {
                      color: "#000",
                    },
                  },
                }}
              >
                <Link href={`${path}#${item.blogSectionId}`}>{item.label}</Link>
              </ListItem>
            )
          })}
        <ListItem
          sx={{
            marginTop: "1rem",
            "& a": {
              borderBottom: "1px solid #666",
              textDecoration: "none",
              color: "#666",
              fontWeight: 500,
              "&:hover": {
                color: "#000",
              },
            },
          }}
        >
          <Link href={path}>Go to top</Link>
        </ListItem>
      </List>
    </Stack>
  )
}

export default TableOfContents
