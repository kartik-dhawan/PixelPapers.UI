import { GLOBAL_COLORS } from "@/utils/colorSchemes"

export const styles = {
  travelThumbnailsSectionWrapper: {
    width: "70%",
    minWidth: {
      xs: "100vw",
      md: "900px",
    },
  },
  travelThumbnailsImageList: {
    display: "flex !important",
    width: "100%",
    flexDirection: {
      xs: "column",
      md: "row",
    },
    padding: {
      xs: "0rem 1rem",
      sm: "0rem 3rem",
      md: "0rem 1rem",
    },
    boxSizing: "border-box",
  },
  travelThumbnailsCardListItem: {
    minWidth: "250px",
    transition: "1600ms all ease",
    "&:hover": {
      flexGrow: 7,
    },
  },
  travelThumbnailsImageWrapper: {
    position: "relative",
    height: {
      xs: "300px",
      sm: "425px",
      md: "500px",
    },
    width: "100%",
    "& img": {
      objectFit: "cover",
    },
  },
  travelThumbnailsCardTextWrapper: {
    color: GLOBAL_COLORS.TEXT_PRIMARY_LIGHT,
    background: "linear-gradient(180deg, #00000000 0%, #000 75%)",
  },
  travelThumbnailsBlogType: {
    fontSize: {
      xs: "14px",
      xl: "16px",
    },
    textTransform: "uppercase",
    fontWeight: 200,
    letterSpacing: "1.5px",
  },
  travelThumbnailsBlogTitle: {
    fontSize: {
      xs: "24px",
      xl: "32px",
    },
    margin: "12px 0px 6px",
    fontWeight: 500,
    whiteSpace: "nowrap",
    textOverflow: "ellipsis",
    overflow: "hidden",
  },
  travelThumbnailsLocationText: {
    fontSize: {
      xs: "14px",
      xl: "18px",
    },
    opacity: 0.8,
  },

  // blog group - stories & itineraries
  travelThumbnailsBlogGroupTitle: {
    textTransform: "uppercase",
    margin: 0,
    width: "100%",
    padding: "0rem 20px",
    boxSizing: "border-box",
    fontSize: "20px",
  },
}
