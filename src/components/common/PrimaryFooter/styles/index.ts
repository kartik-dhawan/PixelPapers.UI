import { GLOBAL_COLORS } from "@/utils/colorSchemes"

export const styles = {
  primaryFooterWrapper: {
    color: GLOBAL_COLORS.TEXT_PRIMARY_LIGHT,
    padding: "2rem 2rem",
    boxSizing: "border-box",
  },
  primaryFooterSocialLinksList: {
    borderColor: GLOBAL_COLORS.TEXT_PRIMARY_LIGHT,
    opacity: 0.7,
    borderWidth: "1px",
    margin: "0rem 1rem",
  },
  primaryFooterSocialLink: {
    "& a": {
      color: GLOBAL_COLORS.TEXT_PRIMARY_LIGHT,
      transition: "200ms all ease",
      "&:hover": {
        color: "#fff",
      },
      fontSize: {
        xs: "18px",
        xl: "20px",
      },
    },
  },
}
