import { ListItem, Skeleton } from "@mui/material"

const TableOfContentSkeleton = () => {
  return (
    <>
      <ListItem>
        <Skeleton variant="rectangular" width="60%" height="20px" />
      </ListItem>
      <ListItem>
        <Skeleton variant="rectangular" width="60%" height="20px" />
      </ListItem>
      <ListItem>
        <Skeleton variant="rectangular" width="60%" height="20px" />
      </ListItem>
    </>
  )
}

export default TableOfContentSkeleton
