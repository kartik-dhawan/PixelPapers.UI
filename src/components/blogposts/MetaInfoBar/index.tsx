import { AVERAGE_TIME_TO_READ_A_BLOG } from "@/utils/constants"
import { TravelBlogPost } from "@/utils/interfaces"
import { getDateFromString, secondsToMinutes } from "@/utils/methods"
import { Box, Divider, Stack } from "@mui/material"

interface MetaInfoBarProps {
  currentBlog: TravelBlogPost
}

const MetaInfoBar = ({ currentBlog }: MetaInfoBarProps) => {
  return (
    <Box className="metInfoBarWrapper" data-testid="metInfoBarWrapper">
      <Divider />
      <Stack
        direction="row"
        justifyContent="space-between"
        sx={{
          margin: "12px 0px",
          color: "#555",
          fontSize: {
            xs: "16px",
            xl: "18px",
          },
        }}
      >
        <Box>
          {currentBlog.blogMetaInformation &&
          currentBlog.blogMetaInformation.timeToReadInSeconds
            ? secondsToMinutes(
                currentBlog.blogMetaInformation?.timeToReadInSeconds,
              )
            : `${AVERAGE_TIME_TO_READ_A_BLOG}`}
          &nbsp;min read
        </Box>
        <Box>Modified on : {getDateFromString(currentBlog.updatedAt)}</Box>
      </Stack>
      <Divider />
    </Box>
  )
}

export default MetaInfoBar
