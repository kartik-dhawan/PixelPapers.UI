import { GLOBAL_COLORS, PAGE_LEVEL_COLORS } from "@/utils/colorSchemes"

export const styles = {
  heroSectionImageWrapper: {
    position: "absolute",
    height: "100%",
    width: "100vw",
    "& img": {
      objectFit: "cover",
      objectPosition: {
        xs: "25% 70%",
        lg: "0% 90%",
      },
    },
    zIndex: -1,
  },
  heroSectionOverlayContentWrapper: {
    zIndex: 1000,
    color: GLOBAL_COLORS.TEXT_WHITE,
    height: "100%",
    width: "100%",
    backgroundColor: "#00000044",
  },
  heroSectionHeading: {
    color: PAGE_LEVEL_COLORS.HOME.HEADING_PRIMARY,
    textAlign: "center",
    maxWidth: {
      xs: "80%",
      md: "90%",
    },
    fontSize: {
      xs: "120px",
      sm: "150px",
      md: "150px",
      lg: "180px",
      xl: "210px",
    },
    lineHeight: {
      xs: "110px",
      sm: "140px",
      md: "150px",
      lg: "220px",
    },
    margin: 0,
  },
  heroSectionAuthorLink: {
    fontWeight: 300,
    margin: {
      xs: "16px 0px",
      md: 0,
    },
    fontSize: {
      xs: "22px",
    },
    "& a": {
      color: PAGE_LEVEL_COLORS.HOME.HEADING_THEME_TEXT,
      transition: "150ms all ease",
      "&:hover": {
        color: GLOBAL_COLORS.TEXT_WHITE,
      },
    },
  },
  heroSectionButton: {
    marginTop: "auto",
    backgroundColor: PAGE_LEVEL_COLORS.HOME.BACKGROUND_PRIMARY_LIGHT,
    position: "absolute",
    bottom: 0,
    left: 0,
    borderRadius: 0,
    width: "100vw",
    textTransform: "capitalize",
    fontWeight: 300,
    letterSpacing: "-0.5px",
    fontSize: {
      xs: "24px",
      xl: "28px",
    },
    "& a": {
      textDecoration: "none",
      color: GLOBAL_COLORS.TEXT_PRIMARY_DARK,
    },
    "& span": {
      transition: "200ms all ease",
    },
    "&:hover": {
      backgroundColor: GLOBAL_COLORS.TEXT_WHITE,
      "& span": {
        transform: "translateX(16px)",
      },
    },
  },
  heroSectionImageFallback: {
    height: "100%",
    width: "100%",
    position: "absolute",
    zIndex: -1,
    backgroundColor: PAGE_LEVEL_COLORS.HOME.BACKGROUND_PRIMARY_DARK,
  },
  heroSectionStartReadingSvg: {
    fontSize: "32px !important",
    aspectRatio: "1/1",
    color: GLOBAL_COLORS.TEXT_PRIMARY_DARK,
  },
}
