"use client"

import { RootType } from "@/redux/store"
import { dmSans } from "@/utils/fonts"
import { Box, Stack } from "@mui/material"
import { useSelector } from "react-redux"
import CuratedBy from "./CuratedBy"
import { styles } from "./styles"
import { CURATED_BY_LINK_DEFAULT_TEXT } from "@/utils/constants"

interface BlogCategoryTitleProps {
  category: "travel"
  themeColor: string
}

const BlogCategoryTitle = ({
  category,
  themeColor,
}: BlogCategoryTitleProps) => {
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
      margin={{ xs: "2rem 0rem", md: "4rem 0rem" }}
    >
      <CuratedBy
        name={CURATED_BY_LINK_DEFAULT_TEXT}
        url={content?.curatedByLink}
        themeColor={themeColor}
      />
      {content && (
        <>
          <Box component="h1" sx={styles.blogCategoryTitle}>
            {categoryData[category]?.title}
          </Box>
          <Box component="p" sx={styles.blogCategoryTitleSubtext}>
            {categoryData[category]?.description}
          </Box>
        </>
      )}
    </Stack>
  )
}

export default BlogCategoryTitle
