import { ListItem, Skeleton } from "@mui/material"

const BlogSideNavSkeleton = () => {
  return (
    <>
      <ListItem disablePadding>
        <Skeleton variant="rectangular" width="100%" height="38px" />
      </ListItem>
      <ListItem disablePadding>
        <Skeleton variant="rectangular" width="100%" height="38px" />
      </ListItem>
      <ListItem disablePadding>
        <Skeleton variant="rectangular" width="100%" height="38px" />
      </ListItem>
      <ListItem disablePadding>
        <Skeleton variant="rectangular" width="100%" height="38px" />
      </ListItem>
      <ListItem disablePadding>
        <Skeleton variant="rectangular" width="100%" height="38px" />
      </ListItem>
    </>
  )
}

export default BlogSideNavSkeleton
