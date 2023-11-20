"use client"

import { RootType } from "@/redux/store"
import { dmSans } from "@/utils/fonts"
import { Box, Stack } from "@mui/material"
import Link from "next/link"
import { useSelector } from "react-redux"
import CuratedBy from "./CuratedBy"
import { styles } from "./styles"

interface BlogCategoryTitleProps {
  category: "travel"
}

const BlogCategoryTitle = ({ category }: BlogCategoryTitleProps) => {
  const { content } = useSelector((state: RootType) => state.contentSlice)

  const categoryData = {
    travel: {
      title: content?.travelPageTitle,
      description: content?.travelPageTitleSubtext,
    },
  }

  return (
    <Stack
      className={`${category}PageHeadWrapper ${dmSans.className}`}
      data-testid={`${category}PageHeadWrapper`}
      alignItems="center"
      margin="4rem 0rem"
    >
      <CuratedBy name="kartik-dhawan" url="https://instagram.com/notkartikk" />
      {content && (
        <>
          <Box component="h1" sx={styles.blogCategoryTitle}>
            {categoryData[category].title}
          </Box>
          <Box component="p" sx={styles.blogCategoryTitleSubtext}>
            {categoryData[category].description}
          </Box>
        </>
      )}
    </Stack>
  )
}

export default BlogCategoryTitle
