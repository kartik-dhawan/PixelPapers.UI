import { Skeleton } from "@mui/material"

const EmbediFrameSkeleton = () => {
  return (
    <Skeleton
      height="100%"
      width="100%"
      variant="rectangular"
      sx={{ borderRadius: "8px", position: "absolute" }}
    />
  )
}

export default EmbediFrameSkeleton
