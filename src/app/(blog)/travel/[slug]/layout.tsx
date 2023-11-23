import BlogPostTitle from "@/components/common/BlogPostTitle"
import BlogSideNavigation from "@/components/common/BlogSideNavigation"
import TableOfContents from "@/components/common/TableOfContents"
import ReduxProvider from "@/redux/ReduxProvider"
import { ChildrenProps } from "@/utils/interfaces"
import { Grid } from "@mui/material"

const TravelBlogLayout = ({ children }: ChildrenProps) => {
  return (
    <ReduxProvider>
      <BlogPostTitle />
      <Grid container spacing={2}>
        <Grid item component="section" lg={2}>
          <BlogSideNavigation />
        </Grid>
        <Grid item component="section" lg={8}>
          {children}
        </Grid>
        <Grid item component="section" lg={2}>
          <TableOfContents />
        </Grid>
      </Grid>
    </ReduxProvider>
  )
}

export default TravelBlogLayout
