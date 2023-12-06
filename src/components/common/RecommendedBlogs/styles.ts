import { GLOBAL_COLORS } from "@/utils/colorSchemes"

export const styles = {
  recommendationsSectionWrapper: {
    padding: "2rem",
    boxSizing: "border-box",
    display: "flex",
    justifyContent: "center",
    width: "100vw",
    backgroundColor: GLOBAL_COLORS.RECOMMENDATIONS_BACKGROUND_LIGHTER,
  },
  recommendationsCard: {
    margin: "1rem 0rem",
    "& a": {
      textDecoration: "none",
      color: GLOBAL_COLORS.TEXT_PRIMARY_DARK,
    },
  },
  recommendationsCardImageWrapper: {
    position: "relative",
    maxWidth: "100%",
    height: {
      xs: "200px",
      sm: "250px",
      md: "200px",
      xl: "250px",
    },
    width: "100%",
  },
  recommendationsCardImage: {
    objectFit: "cover",
    objectPosition: {
      xs: "0% 60%",
      sm: "0% 70%",
    },
    boxSizing: "border-box",
  },
  recommendationsCardTextContent: {
    display: "flex",
    flexDirection: "column",
    gap: "8px",
    padding: {
      xs: "1rem 0.5rem",
      sm: "1rem 0rem 1rem 2rem",
      md: "1rem 0.5rem",
    },
    boxSizing: "border-box",
  },
  recommendationsCardAuthorUsername: {
    fontSize: {
      xs: "14px",
      sm: "16px",
      md: "14px",
      xl: "18px",
    },
  },
  recommendationsCardBlogTitle: {
    margin: "4px 0px",
    fontSize: {
      xs: "22px",
      sm: "26px",
      md: "22px",
      xl: "26px",
    },
    textOverflow: "ellipsis",
    whiteSpace: "nowrap",
    overflow: "hidden",
    letterSpacing: "-1px",
    fontWeight: 600,
  },
  recommendationsCardBlogDescription: {
    fontWeight: 300,
    display: "-webkit-box",
    overflow: "hidden",
    WebkitBoxOrient: "vertical",
    fontSize: {
      xs: "18px",
      sm: "20px",
      md: "18px",
      xl: "22px",
    },
    color: GLOBAL_COLORS.TEXT_PRIMARY_LIGHTER,
  },
  recommendationsCardBlogMetaInfo: {
    fontSize: {
      xs: "14px",
      sm: "16px",
      md: "14px",
      xl: "18px",
    },
    color: GLOBAL_COLORS.TEXT_PRIMARY_LIGHTER,
  },
}
