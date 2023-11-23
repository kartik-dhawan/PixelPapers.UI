import BlogPostTitle from "@/components/blogposts/BlogPostTitle"
import BlogSideNavigation from "@/components/blogposts/BlogSideNavigation"
import TableOfContents from "@/components/blogposts/TableOfContents"
import { getTravelBlogBySlug } from "@/lib/methods"
import ReduxProvider from "@/redux/ReduxProvider"
import { Grid } from "@mui/material"

const TravelBlogLayout = async ({ children, params }: any) => {
  const currentBlog = await getTravelBlogBySlug(params?.slug ?? "")

  return (
    <ReduxProvider>
      <BlogPostTitle
        title={currentBlog?.blogTitle ?? ""}
        description={currentBlog?.initialBlogDescription ?? ""}
        themeColor={currentBlog?.blogThemeColor}
      />
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
