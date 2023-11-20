import BlogCategoryTitle from "@/components/common/BlogCategoryTitle"
import ReduxProvider from "@/redux/ReduxProvider"
import { Stack } from "@mui/material"

const Travelpage = () => {
  return (
    <ReduxProvider>
      <Stack alignItems="center">
        <BlogCategoryTitle category="travel" />
      </Stack>
    </ReduxProvider>
  )
}

export default Travelpage
