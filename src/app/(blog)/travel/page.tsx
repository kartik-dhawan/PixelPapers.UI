import BlogCategoryTitle from "@/components/common/BlogCategoryTitle"
import TravelBlogThumbnail from "@/components/common/TravelBlogThumbnail"
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
        <Box component="h2">Travel Stories</Box>
        <TravelBlogThumbnail type="stories" largeCardIndex={0} />
        <Box component="h2">Travel Blueprints</Box>
        <TravelBlogThumbnail type="itineraries" largeCardIndex={2} />
      </Stack>
    </ReduxProvider>
  )
}

export default Travelpage
