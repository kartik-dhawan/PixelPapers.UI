import { dmSans } from "@/utils/fonts"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import { Box } from "@mui/material"
import { styles } from "./styles"

/**
 * A custom component to render RICH TEXT from Contentful
 *
 * All tags like <H2/> <P/> <UL/>...
 * here would have specific custom css which will stay the same throughtout all the blogs
 *
 */

interface CustomRichTextComponentProps {
  documentObject: any
  themeColor?: string
}

const CustomRichTextComponent = ({
  documentObject,
  themeColor,
}: CustomRichTextComponentProps) => {
  return (
    <Box
      className={"richTextElementsWrapper " + dmSans.className}
      sx={{
        ...styles.richComponentWrapper,
        "& a": {
          fontWeight: 500,
          color: themeColor ?? "",
        },
      }}
    >
      {documentToReactComponents(documentObject)}
    </Box>
  )
}

export default CustomRichTextComponent
