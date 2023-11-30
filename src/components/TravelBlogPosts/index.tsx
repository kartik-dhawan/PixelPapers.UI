"use client"

import { addCurrentBlog } from "@/redux/slices/travelSlice"
import { OnThisPageLinkObject, TravelBlogPost } from "@/utils/interfaces"
import { Box, Stack } from "@mui/material"
import React, { useEffect } from "react"
import { useDispatch } from "react-redux"
import { dmSans } from "@/utils/fonts"
import MetaInfoBar from "../blogposts/MetaInfoBar"
import { updateOnThisPageData } from "@/redux/slices/currentBlogSlice"
import CustomBlogImages from "../blogposts/CustomBlogImages"
import CustomRichTextComponent from "../blogposts/CustomRichTextComponent"
import TableOfContents from "../blogposts/TableOfContents"
import TravelBlogsSkeleton from "../common/Skeletons/TravelBlogsSkeleton"

interface TravelBlogPostProps {
  currentBlog: TravelBlogPost
  slug: string
}

const TravelBlogPosts = ({ currentBlog }: TravelBlogPostProps) => {
  const dispatch = useDispatch()

  useEffect(() => {
    // adding current blog in redux store
    dispatch(addCurrentBlog(currentBlog))

    // adds data for On This Page link/nav in redux
    const onThisPageData: OnThisPageLinkObject[] = []
    currentBlog?.blogContentAll?.map((item) => {
      onThisPageData.push({
        label: item.fields.title ?? "",
        blogSectionId: item.fields.blogSectionId ?? "",
      })
    })
    dispatch(updateOnThisPageData(onThisPageData))
  }, [currentBlog])

  return (
    <Stack
      sx={{
        minHeight: "100svh",
        padding: {
          xs: "0rem 2rem",
          sm: "0rem 4rem",
          md: "0rem 2rem 0rem 1rem",
        },
        boxSizing: "border-box",
        width: {
          xs: "100vw",
          md: "100%",
        },
      }}
      gap="2rem"
      className={dmSans.className}
    >
      <MetaInfoBar currentBlog={currentBlog} />

      {/* blog content & bars */}
      <Stack className={dmSans.className} sx={{ marginBottom: "3rem" }}>
        {currentBlog?.blogLandingSectionImage && (
          <CustomBlogImages
            blogImages={[currentBlog?.blogLandingSectionImage] ?? []}
          />
        )}

        {/* TOC Section for screen resolution lower than desktop */}
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

        {/* blog content */}
        {currentBlog && currentBlog.blogContentAll ? (
          <>
            {currentBlog?.blogContentAll.map((item) => {
              return (
                <Box id={item.fields.blogSectionId} key={item.sys.id}>
                  <CustomRichTextComponent
                    documentObject={item.fields.blogSectionContent}
                    themeColor={currentBlog?.blogThemeColor}
                  />
                  <CustomBlogImages
                    blogImages={item.fields.blogSectionImages ?? []}
                  />
                </Box>
              )
            })}
            <Box>
              <CustomRichTextComponent
                documentObject={currentBlog?.blogConclusion}
                themeColor={currentBlog?.blogThemeColor}
              />
            </Box>
          </>
        ) : (
          <TravelBlogsSkeleton />
        )}
      </Stack>
    </Stack>
  )
}

export default TravelBlogPosts
