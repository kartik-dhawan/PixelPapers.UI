"use client"

import { addCurrentBlog } from "@/redux/slices/travelSlice"
import { TravelBlogPost } from "@/utils/interfaces"
import { Box } from "@mui/material"
import { useEffect } from "react"
import { useDispatch } from "react-redux"

interface TravelBlogPostProps {
  currentBlog: TravelBlogPost
  slug: string
}

const TravelBlogPosts = ({ currentBlog, slug }: TravelBlogPostProps) => {
  const dispatch = useDispatch()

  useEffect(() => {
    // adding current blog in redux store
    dispatch(addCurrentBlog(currentBlog))
  }, [currentBlog])

  return (
    <Box>
      <Box>
        {currentBlog.blogType === "article" && <Box>ARTICLE</Box>}
        {currentBlog.blogType === "itinerary" && <Box>ITINERARY</Box>}
        <Box>{slug}</Box>
      </Box>
    </Box>
  )
}

export default TravelBlogPosts
