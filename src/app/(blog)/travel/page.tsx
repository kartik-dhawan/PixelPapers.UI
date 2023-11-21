import BlogCategoryTitle from "@/components/common/BlogCategoryTitle"
import TravelBlogThumbnail from "@/components/common/TravelBlogThumbnail"
import { styles } from "@/components/common/TravelBlogThumbnail/styles"
import ReduxProvider from "@/redux/ReduxProvider"
import { PAGE_LEVEL_COLORS } from "@/utils/colorSchemes"
import { Box, Stack } from "@mui/material"

const Travelpage = () => {
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
        <Box sx={{ marginBottom: "6rem" }}>
          <Box component="h2" sx={styles.travelThumbnailsBlogGroupTitle}>
            Travel Stories
          </Box>
          <TravelBlogThumbnail type="stories" largeCardIndex={0} />
        </Box>
        <Box sx={{ marginBottom: "6rem" }}>
          <Box component="h2" sx={styles.travelThumbnailsBlogGroupTitle}>
            Travel Blueprints
          </Box>
          <TravelBlogThumbnail type="itineraries" largeCardIndex={2} />
        </Box>
      </Stack>
    </ReduxProvider>
  )
}

export default Travelpage
