import BlogPostTitle from "@/components/blogposts/BlogPostTitle"
import BlogSideNavigation from "@/components/blogposts/BlogSideNavigation"
import TableOfContents from "@/components/blogposts/TableOfContents"
import { getContentfulData, getTravelBlogBySlug } from "@/lib/methods"
import ReduxProvider from "@/redux/ReduxProvider"
import { Grid } from "@mui/material"

const TravelBlogLayout = async ({ children, params }: any) => {
  const currentBlog = await getTravelBlogBySlug(params?.slug ?? "")
  const blogs: any = await getContentfulData()
  const allTravelBlogs = [
    ...blogs.travelStoryBlogs,
    ...blogs.travelItineraryBlogs,
  ]

  return (
    <ReduxProvider>
      <BlogPostTitle
        title={currentBlog?.blogTitle ?? ""}
        description={currentBlog?.initialBlogDescription ?? ""}
        themeColor={currentBlog?.blogThemeColor}
      />
      <Grid container spacing={2}>
        <Grid
          item
          component="section"
          lg={3}
          md={4}
          sx={{ display: { xs: "none", md: "inline-block" } }}
        >
          <BlogSideNavigation
            blogType="Travel"
            themeColor={currentBlog?.blogThemeColor}
            blogs={allTravelBlogs}
          />
        </Grid>
        <Grid item component="section" lg={6} md={8}>
          {children}
        </Grid>
        <Grid
          item
          component="section"
          lg={3}
          sx={{ display: { xs: "none", lg: "inline-block" } }}
        >
          <TableOfContents />
        </Grid>
      </Grid>
    </ReduxProvider>
  )
}

export default TravelBlogLayout
