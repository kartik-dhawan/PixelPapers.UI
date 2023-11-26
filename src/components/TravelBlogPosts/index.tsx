"use client"

import { addCurrentBlog } from "@/redux/slices/travelSlice"
import { TravelBlogPost } from "@/utils/interfaces"
import { Box, Stack } from "@mui/material"
import { useEffect } from "react"
import { useDispatch } from "react-redux"
import TravelStories from "./TravelStories"
import { dmSans } from "@/utils/fonts"
import MetaInfoBar from "../blogposts/MetaInfoBar"

interface TravelBlogPostProps {
  currentBlog: TravelBlogPost
  slug: string
}

const TravelBlogPosts = ({ currentBlog }: TravelBlogPostProps) => {
  const dispatch = useDispatch()

  useEffect(() => {
    // adding current blog in redux store
    dispatch(addCurrentBlog(currentBlog))
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
