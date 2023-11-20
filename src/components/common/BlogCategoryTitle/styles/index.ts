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
      md: "72px",
      xl: "88px",
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
      xl: "880px",
    },
    padding: {
      xs: "0rem 2rem",
      md: 0,
    },
    textAlign: "center",
    fontSize: {
      xs: "16px",
      sm: "18px",
      xl: "22px",
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
    backgroundColor: PAGE_LEVEL_COLORS.TRAVEL.BACKGROUND_PRIMARY_DARK,
    borderRadius: "50%",
    margin: {
      xs: "0rem 4px 0rem 8px",
      md: "0rem 6px 0rem 12px",
    },
  },
  curatedByUserLink: {
    "& a": {
      fontSize: {
        xs: "18px",
        md: "22px",
        xl: "24px",
      },
      color: "#111",
      fontWeight: 700,
      textDecoration: "none",
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
