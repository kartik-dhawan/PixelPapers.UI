import { GLOBAL_COLORS } from "@/utils/colorSchemes"

export const styles = {
  richComponentWrapper: {
    textAlign: "left",
    color: GLOBAL_COLORS.TEXT_PRIMARY_DARK,
    "& p": {
      fontSize: {
        xs: "20px",
        xl: "22px",
      },
      lineHeight: {
        xs: "36px",
        xl: "38px",
      },
    },
    "& ul": {
      display: "flex",
      flexDirection: "column",
      gap: "12px",
      paddingInlineStart: "20px",
      backgroundColor: GLOBAL_COLORS.BLOG_SUB_COMPONENT_BACKGROUND_LIGHTER,
      padding: "16px 32px 16px 48px",
      boxSizing: "border-box",
      "& p": {
        margin: 0,
        fontSize: {
          xs: "18px",
          xl: "20px",
        },
        lineHeight: {
          xs: "32px",
          xl: "34px",
        },
        textAlign: "left",
      },
    },
    "& h2": {
      margin: "3rem 0px 1rem",
      fontSize: "26px",
      textAlign: "left",
    },
    fontWeight: 300,
  },
}
