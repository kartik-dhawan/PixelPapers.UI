import { Skeleton, Stack } from "@mui/material"

const TravelBlogsSkeleton = () => {
  return (
    <Stack alignItems="center">
      <Skeleton
        variant="rectangular"
        sx={{
          height: {
            xs: "250px",
            sm: "300px",
            md: "400px",
            xl: "450px",
          },
        }}
        width="100%"
      />
      <Skeleton
        variant="rectangular"
        height={25}
        width="70%"
        sx={{ margin: "8px" }}
      />
      <Stack
        gap="6px"
        margin={{ xs: "2rem", md: "3rem", xl: "4rem" }}
        width="100%"
      >
        <Skeleton variant="rectangular" height={25} width="100%" />
        <Skeleton variant="rectangular" height={25} width="100%" />
        <Skeleton variant="rectangular" height={25} width="100%" />
        <Skeleton variant="rectangular" height={25} width="100%" />
        <Skeleton variant="rectangular" height={25} width="100%" />
      </Stack>
    </Stack>
  )
}

export default TravelBlogsSkeleton
