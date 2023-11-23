import { GLOBAL_COLORS, PAGE_LEVEL_COLORS } from "@/utils/colorSchemes"

export const styles = {
  // blog category heading section
  blogCategoryTitle: {
    margin: {
      xs: "2rem 0rem 0rem",
      sm: "1rem 0rem 0rem",
    },
    fontSize: {
      xs: "48px",
      sm: "64px",
      md: "76px",
      lg: "104px",
      xl: "120px",
    },
    textTransform: "uppercase",
    color: GLOBAL_COLORS.TEXT_PRIMARY_DARK,
    textAlign: "center",
    padding: {
      xs: "0rem 2rem",
      md: "0rem",
    },
  },
  blogCategoryTitleSubtext: {
    maxWidth: {
      xs: "720px",
      lg: "1080px",
      xl: "1260px",
    },
    padding: {
      xs: "0rem 2rem",
      md: 0,
    },
    textAlign: "center",
    fontSize: {
      xs: "18px",
      md: "20px",
      lg: "22px",
      xl: "24px",
    },
    color: PAGE_LEVEL_COLORS.TRAVEL.TEXT_PRIMARY_LIGHTER,
  },

  // curatedBy component
  curatedByColorBox: {
    height: {
      xs: "28px",
      md: "32px",
      xl: "36px",
    },
    aspectRatio: "1/1",
    borderRadius: "50%",
    margin: {
      xs: "0rem 4px 0rem 8px",
      md: "0rem 6px 0rem 12px",
    },
  },
  curatedByUserLink: {
    "& a, div": {
      position: "relative",
      fontSize: {
        xs: "18px",
        md: "22px",
        xl: "24px",
      },
      fontWeight: 700,
      color: GLOBAL_COLORS.TEXT_PRIMARY_DARK,
      borderBottom: "1.5px solid #aa9292",
      textDecoration: "none",
      "&::before": {
        content: `""`, // eslint-disable-line
        position: "absolute",
        height: "2px",
        width: "0%",
        backgroundColor: "#222",
        bottom: "-2px",
        left: 0,
        transition: "200ms all ease",
      },
      "&:hover::before": {
        width: "100%",
      },
    },
  },
  curatedText: {
    fontSize: {
      xs: "18px",
      md: "22px",
      xl: "24px",
    },
    fontWeight: 400,
  },
}
