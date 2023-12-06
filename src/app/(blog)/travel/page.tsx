import BlogCategoryTitle from "@/components/common/BlogCategoryTitle"
import RecommendedBlogs from "@/components/common/RecommendedBlogs"
import TravelBlogThumbnail from "@/components/common/TravelBlogThumbnail"
import { styles } from "@/components/common/TravelBlogThumbnail/styles"
import { getContentfulData } from "@/lib/methods"
import ReduxProvider from "@/redux/ReduxProvider"
import { GLOBAL_COLORS, PAGE_LEVEL_COLORS } from "@/utils/colorSchemes"
import { META_DATA_FALLBACK } from "@/utils/constants"
import { Box, Stack } from "@mui/material"

export const metadata = {
  metadataBase: new URL("https://blogs.kartikdhawan.in/travel"),
  title: META_DATA_FALLBACK.TRAVEL.title,
  description: META_DATA_FALLBACK.TRAVEL.description,
}

const Travelpage = async () => {
  const content: any = await getContentfulData()
  const allTravelBlogs = [
    ...content.travelStoryBlogs,
    ...content.travelItineraryBlogs,
  ]

  return (
    <ReduxProvider>
      <Stack
        alignItems="center"
        sx={{
          backgroundColor: PAGE_LEVEL_COLORS.TRAVEL.BACKGROUND_PRIMARY_LIGHT,
          minHeight: "100svh",
        }}
      >
        <BlogCategoryTitle
          category="travel"
          themeColor={PAGE_LEVEL_COLORS.TRAVEL.BACKGROUND_PRIMARY_DARK}
        />
        <Box component="section" sx={{ marginBottom: "4rem" }}>
          <Box component="h2" sx={styles.travelThumbnailsBlogGroupTitle}>
            featured stories
          </Box>
          <TravelBlogThumbnail type="stories" largeCardIndex={0} />
        </Box>
        <Box component="section" sx={{ marginBottom: "4rem" }}>
          <Box component="h2" sx={styles.travelThumbnailsBlogGroupTitle}>
            hand-picked itineraries
          </Box>
          <TravelBlogThumbnail type="itineraries" largeCardIndex={2} />
        </Box>
        <RecommendedBlogs blogs={allTravelBlogs} path="/travel" fullWidth>
          <Box
            sx={{ color: GLOBAL_COLORS.TEXT_PRIMARY_LIGHTER, margin: "1rem" }}
          >
            Explore all travel blogs.
          </Box>
        </RecommendedBlogs>
      </Stack>
    </ReduxProvider>
  )
}

export default Travelpage
