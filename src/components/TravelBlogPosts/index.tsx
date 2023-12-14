"use client"

import { addCurrentBlog } from "@/redux/slices/travelSlice"
import {
  ExternalEmbedLinkObject,
  OnThisPageLinkObject,
  TravelBlogPost,
} from "@/utils/interfaces"
import { Box, Stack } from "@mui/material"
import React, { useEffect, useState } from "react"
import { useDispatch } from "react-redux"
import { dmSans } from "@/utils/fonts"
import MetaInfoBar from "../blogposts/MetaInfoBar"
import { updateOnThisPageData } from "@/redux/slices/currentBlogSlice"
import CustomBlogImages from "../blogposts/CustomBlogImages"
import CustomRichTextComponent from "../blogposts/CustomRichTextComponent"
import TableOfContents from "../blogposts/TableOfContents"
import TravelBlogsSkeleton from "../common/Skeletons/TravelBlogsSkeleton"
import { GLOBAL_COLORS } from "@/utils/colorSchemes"
import ExternalEmbedLinks from "../blogposts/ExternalEmbedLinks"

interface TravelBlogPostProps {
  currentBlog: TravelBlogPost
  slug: string
}

const TravelBlogPosts = ({ currentBlog }: TravelBlogPostProps) => {
  const dispatch = useDispatch()

  const [embedLinks, setEmbedLinks] = useState<ExternalEmbedLinkObject[]>([
    { id: 0, label: "spotify" },
    { id: 1, label: "youtube" },
  ])

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

    /* updates the embed link
     * if the object comes empty from contentful the
     * displays the default links stated in constants file
     */

    if (currentBlog.externalEmbedLinks)
      setEmbedLinks(currentBlog.externalEmbedLinks)
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
            lcp
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

        {/* iFrame external link embeds */}
        <Box
          sx={{
            margin: "1rem 0rem",
            color: GLOBAL_COLORS.TEXT_PRIMARY_LIGHTER,
            fontSize: "18px",
          }}
        >
          Follow my other travel & books related content.
        </Box>
        <ExternalEmbedLinks embedLinks={embedLinks} />
      </Stack>
    </Stack>
  )
}

export default TravelBlogPosts
