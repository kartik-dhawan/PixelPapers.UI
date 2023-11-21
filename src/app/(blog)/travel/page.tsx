import BlogCategoryTitle from "@/components/common/BlogCategoryTitle"
import TravelBlogThumbnail from "@/components/common/TravelBlogThumbnail"
import ReduxProvider from "@/redux/ReduxProvider"
import { PAGE_LEVEL_COLORS } from "@/utils/colorSchemes"
import { Stack } from "@mui/material"

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
        <TravelBlogThumbnail type="stories" />
      </Stack>
    </ReduxProvider>
  )
}

export default Travelpage
