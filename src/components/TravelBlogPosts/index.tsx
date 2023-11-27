"use client"

import { addCurrentBlog } from "@/redux/slices/travelSlice"
import { OnThisPageLinkObject, TravelBlogPost } from "@/utils/interfaces"
import { Box, Stack } from "@mui/material"
import { useEffect } from "react"
import { useDispatch } from "react-redux"
import TravelStories from "./TravelStories"
import { dmSans } from "@/utils/fonts"
import MetaInfoBar from "../blogposts/MetaInfoBar"
import { updateOnThisPageData } from "@/redux/slices/currentBlogSlice"

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
      {currentBlog.blogType === "article" && <TravelStories />}
      {currentBlog.blogType === "itinerary" && <Box>ITINERARY</Box>}
    </Stack>
  )
}

export default TravelBlogPosts
