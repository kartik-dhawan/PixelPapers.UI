"use client"

import { RootType } from "@/redux/store"
import { dmSans } from "@/utils/fonts"
import { Box, Stack } from "@mui/material"
import { useSelector } from "react-redux"
import CustomRichTextComponent from "@/components/blogposts/CustomRichTextComponent"
import CustomBlogImages from "@/components/blogposts/CustomBlogImages"
import TravelBlogsSkeleton from "@/components/common/Skeletons/TravelBlogsSkeleton"
import React from "react"
import TableOfContents from "@/components/blogposts/TableOfContents"

const TravelStories = () => {
  const { currentBlog } = useSelector((state: RootType) => state.travelSlice)

  return (
    <Stack className={dmSans.className} sx={{ marginBottom: "3rem" }}>
      {currentBlog?.blogLandingSectionImage && (
        <CustomBlogImages
          blogImages={[currentBlog?.blogLandingSectionImage] ?? []}
        />
      )}
      {currentBlog?.blogContentAll && (
        <Box
          sx={{
            margin: "1.5rem 0rem 0rem",
            display: { xs: "inline-block", lg: "none" },
          }}
        >
          <TableOfContents isDesktop={false} />
        </Box>
      )}
      {currentBlog && currentBlog.blogContentAll ? (
        currentBlog?.blogContentAll.map((item) => {
          return (
            <React.Fragment key={item.sys.id}>
              <Box id={item.fields.blogSectionId}>
                <CustomRichTextComponent
                  documentObject={item.fields.blogSectionContent}
                  themeColor={currentBlog?.blogThemeColor}
                />
                <CustomBlogImages
                  blogImages={item.fields.blogSectionImages ?? []}
                />
              </Box>
            </React.Fragment>
          )
        })
      ) : (
        <TravelBlogsSkeleton />
      )}
    </Stack>
  )
}

export default TravelStories
