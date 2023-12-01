import BlogAuthor from "@/components/blogposts/BlogAuthor"
import BlogPostTitle from "@/components/blogposts/BlogPostTitle"
import BlogSideNavigation from "@/components/blogposts/BlogSideNavigation"
import TableOfContents from "@/components/blogposts/TableOfContents"
import { getContentfulData, getTravelBlogBySlug } from "@/lib/methods"
import ReduxProvider from "@/redux/ReduxProvider"
import { Box, Grid } from "@mui/material"
import Script from "next/script"

const TravelBlogLayout = async ({ children, params }: any) => {
  const currentBlog = await getTravelBlogBySlug(params?.slug ?? "")
  const content: any = await getContentfulData()
  const allTravelBlogs = [
    ...content.travelStoryBlogs,
    ...content.travelItineraryBlogs,
  ]

  return (
    <ReduxProvider>
      <Script
        async
        src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_G_TAG_CODE}`}
      />
      <Script id="google-analytics">
        {`
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());

        gtag('config', '${process.env.NEXT_PUBLIC_G_TAG_CODE}');
       `}
      </Script>
      <BlogPostTitle
        title={currentBlog?.blogTitle ?? ""}
        description={currentBlog?.initialBlogDescription ?? ""}
        themeColor={currentBlog?.blogThemeColor}
      />
      <Grid container spacing={2} component="article">
        <Grid
          item
          component="aside"
          lg={3}
          md={4}
          sx={{ display: { xs: "none", md: "inline-block" } }}
        >
          <BlogSideNavigation
            blogType="Travel"
            themeColor={currentBlog?.blogThemeColor}
            blogs={allTravelBlogs}
          />
          <Box
            sx={{
              padding: "0rem 2rem",
              boxSizing: "border-box",
              marginTop: "3rem",
              position: "sticky",
              top: 32,
              display: {
                xs: "none",
                md: "inline-block",
                lg: "none",
              },
            }}
          >
            <TableOfContents isDesktop={true} />
          </Box>
        </Grid>
        <Grid item component="section" lg={6} md={8}>
          {children}
        </Grid>
        <Grid
          item
          component="section"
          lg={3}
          sx={{
            display: { xs: "none", lg: "inline-block" },
            padding: "0rem 2rem",
            boxSizing: "border-box",
          }}
        >
          <TableOfContents isDesktop={true} />
        </Grid>
      </Grid>
      {currentBlog && (
        <BlogAuthor currentBlog={currentBlog} content={content} />
      )}
    </ReduxProvider>
  )
}

export default TravelBlogLayout
