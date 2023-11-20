"use client"

import { RootType } from "@/redux/store"
import { dmSans } from "@/utils/fonts"
import { Box, Stack } from "@mui/material"
import Link from "next/link"
import { useSelector } from "react-redux"

interface BlogCategoryTitleProps {
  category: "travel"
}

const BlogCategoryTitle = ({ category }: BlogCategoryTitleProps) => {
  const { content } = useSelector((state: RootType) => state.contentSlice)
  console.log(content)

  const categoryData = {
    travel: {
      title: content?.travelPageTitle,
      description: content?.travelPageTitleSubtext,
    },
  }

  return (
    <Stack className={dmSans.className} alignItems="center">
      <Box>
        <Box component="span">Curated</Box>
        <Box component="span">by</Box>
        <Box component="span" />
        <Box component="span">
          <Link href="#">kartik-dhawan</Link>
        </Box>
      </Box>
      {content && (
        <>
          <Box component="h1">{categoryData[category].title}</Box>
          <Box component="p">{categoryData[category].description}</Box>
        </>
      )}
    </Stack>
  )
}

export default BlogCategoryTitle
