"use client"

import { RootType } from "@/redux/store"
import { dmSans } from "@/utils/fonts"
import { Box, Stack } from "@mui/material"
import { useSelector } from "react-redux"
import CustomRichTextComponent from "@/components/blogposts/CustomRichTextComponent"
import CustomBlogImages from "@/components/blogposts/CustomBlogImages"
import TravelBlogsSkeleton from "@/components/common/Skeletons/TravelBlogsSkeleton"

const TravelStories = () => {
  const { currentBlog } = useSelector((state: RootType) => state.travelSlice)

  return (
    <Stack className={dmSans.className} sx={{ marginBottom: "3rem" }}>
      {currentBlog && Object.entries(currentBlog).length !== 0 ? (
        <>
          <CustomBlogImages
            blogImages={currentBlog?.landingBlogPageImages ?? []}
          />
          <Box>
            <CustomRichTextComponent
              documentObject={currentBlog?.landingBlogPageContent}
              themeColor={currentBlog?.blogThemeColor}
            />
          </Box>
        </>
      ) : (
        <TravelBlogsSkeleton />
      )}
    </Stack>
  )
}

export default TravelStories
