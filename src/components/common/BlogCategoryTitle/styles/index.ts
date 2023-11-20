import { GLOBAL_COLORS, PAGE_LEVEL_COLORS } from "@/utils/colorSchemes"

export const styles = {
  // blog category heading section
  blogCategoryTitle: {
    margin: "1rem 0rem 0rem",
    fontSize: "72px",
    textTransform: "uppercase",
    color: GLOBAL_COLORS.TEXT_PRIMARY_DARK,
  },
  blogCategoryTitleSubtext: {
    maxWidth: "720px",
    textAlign: "center",
    fontSize: "18px",
    color: PAGE_LEVEL_COLORS.TRAVEL.TEXT_PRIMARY_LIGHTER,
  },

  // curatedBy component
  curatedByColorBox: {
    height: "32px",
    aspectRatio: "1/1",
    backgroundColor: PAGE_LEVEL_COLORS.TRAVEL.BACKGROUND_PRIMARY_DARK,
    borderRadius: "50%",
    margin: "0rem 6px 0rem 12px",
  },
  curatedByUserLink: {
    "& a": {
      fontSize: "22px",
      color: "#111",
      fontWeight: 700,
      textDecoration: "none",
    },
  },
  // curatedBy
}
