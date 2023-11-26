"use client"

import { RootType } from "@/redux/store"
import { dmSans } from "@/utils/fonts"
import { Box, Stack } from "@mui/material"
import { useSelector } from "react-redux"
import CustomRichTextComponent from "@/components/blogposts/CustomRichTextComponent"
import CustomBlogImages from "@/components/blogposts/CustomBlogImages"
import TravelBlogsSkeleton from "@/components/common/Skeletons/TravelBlogsSkeleton"
import React from "react"

const TravelStories = () => {
  const { currentBlog } = useSelector((state: RootType) => state.travelSlice)

  return (
    <Stack className={dmSans.className} sx={{ marginBottom: "3rem" }}>
      {currentBlog && currentBlog.blogContentAll ? (
        currentBlog?.blogContentAll.map((item) => {
          return (
            <Box id={item.fields.blogSectionId} key={item.sys.id}>
              <CustomBlogImages
                blogImages={item.fields.blogSectionImages ?? []}
              />
              <Box>
                <CustomRichTextComponent
                  documentObject={item.fields.blogSectionContent}
                  themeColor={currentBlog?.blogThemeColor}
                />
              </Box>
            </Box>
          )
        })
      ) : (
        <TravelBlogsSkeleton />
      )}
    </Stack>
  )
}

export default TravelStories
