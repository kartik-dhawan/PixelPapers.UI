import { GLOBAL_COLORS } from "@/utils/colorSchemes"

export const styles = {
  customImage: {
    height: {
      xs: "250px",
      sm: "300px",
      md: "400px",
      xl: "450px",
    },
    width: "100%",
    maxWidth: "900px",
    position: "relative",
    "& img": {
      objectFit: "cover",
    },
  },
  customImageTitleText: {
    textAlign: "center",
    margin: "8px 0px",
    color: GLOBAL_COLORS.TEXT_PRIMARY_LIGHTER,
  },
}
