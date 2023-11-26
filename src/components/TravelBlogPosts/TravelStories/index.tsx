"use client"

import { RootType } from "@/redux/store"
import { dmSans } from "@/utils/fonts"
import { Box, Stack } from "@mui/material"
import { useSelector } from "react-redux"
import CustomRichTextComponent from "@/components/blogposts/CustomRichTextComponent"
import CustomBlogImages from "@/components/blogposts/CustomBlogImages"

const TravelStories = () => {
  const { currentBlog } = useSelector((state: RootType) => state.travelSlice)
  console.log(currentBlog)
  return (
    <Stack className={dmSans.className} sx={{ marginBottom: "3rem" }}>
      <CustomBlogImages blogImages={currentBlog?.landingBlogPageImages ?? []} />
      <Box>
        <CustomRichTextComponent
          documentObject={currentBlog?.landingBlogPageContent}
          themeColor={currentBlog?.blogThemeColor}
        />
      </Box>
    </Stack>
  )
}

export default TravelStories
