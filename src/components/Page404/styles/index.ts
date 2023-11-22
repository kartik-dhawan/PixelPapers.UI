import { GLOBAL_COLORS, PAGE_LEVEL_COLORS } from "@/utils/colorSchemes"

export const styles = {
  notFoundWrapper: {
    height: "100svh",
    justifyContent: "center",
    alignItems: "center",
    padding: "2rem",
    boxSizing: "border-box",
    color: GLOBAL_COLORS.TEXT_PRIMARY_DARK,
    backgroundColor: PAGE_LEVEL_COLORS.PAGE_404.BACKGROUND_PRIMARY_LIGHT,
  },
  notFoundStatusCode: {
    fontSize: {
      xs: "72px",
      md: "80px",
    },
    margin: "1rem 0rem",
    color: PAGE_LEVEL_COLORS.PAGE_404.TEXT_PRIMARY_DARK,
  },
  notFoundBarCode: {
    fontSize: {
      xs: "80px",
      md: "104px",
      xl: "120px",
    },
    textAlign: "center",
  },
  notFoundTextBox: {
    textAlign: "center",
    fontSize: {
      xs: "22px",
      xl: "24px",
    },
    letterSpacing: "-1px",
  },
  notFoundGoBackLink: {
    margin: "2rem 0rem",
    "& a": {
      textTransform: "uppercase",
      position: "relative",
      fontSize: {
        xs: "18px",
        md: "22px",
        xl: "26px",
      },
      fontWeight: 700,
      color: GLOBAL_COLORS.TEXT_PRIMARY_DARK,
      borderBottom: "1.5px solid #6b757e",
      textDecoration: "none",
      "&::before": {
        content: `""`, // eslint-disable-line
        position: "absolute",
        height: "2px",
        width: "0%",
        backgroundColor: GLOBAL_COLORS.TEXT_PRIMARY_DARK,
        bottom: "-2px",
        left: 0,
        transition: "200ms all ease",
      },
      "&:hover::before": {
        width: "100%",
      },
    },
  },
}
