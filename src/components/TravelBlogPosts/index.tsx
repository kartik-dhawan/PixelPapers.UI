"use client"

import { addCurrentBlog } from "@/redux/slices/travelSlice"
import { TravelBlogPost } from "@/utils/interfaces"
import { Box, Divider, Stack } from "@mui/material"
import { useEffect } from "react"
import { useDispatch } from "react-redux"
import TravelStories from "./TravelStories"
import { dmSans } from "@/utils/fonts"
import { getDateFromString, secondsToMinutes } from "@/utils/methods"

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
          md: "0rem 2rem 0rem 1rem",
        },
        boxSizing: "border-box",
        width: {
          xs: "100vw",
          md: "100%",
        },
      }}
      className={dmSans.className}
    >
      <Box>
        <Divider />
        <Stack
          direction="row"
          justifyContent="space-between"
          sx={{ margin: "12px 0px", color: "#555", fontSize: "14px" }}
        >
          <Box>
            {secondsToMinutes(
              currentBlog.blogMetaInformation?.timeToReadInSeconds,
            )}{" "}
            min read
          </Box>
          <Box>
            Modified at:{" "}
            {currentBlog.updatedAt && getDateFromString(currentBlog.updatedAt)}
          </Box>
        </Stack>
        <Divider />
      </Box>
      {currentBlog.blogType === "article" && <TravelStories />}
      {currentBlog.blogType === "itinerary" && <Box>ITINERARY</Box>}
    </Stack>
  )
}

export default TravelBlogPosts
