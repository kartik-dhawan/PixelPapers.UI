export const styles = {
  blogAuthorAvatarSectionWrapper: {
    padding: "0rem 2rem",
    boxSizing: "border-box",
    width: "100%",
  },
  blogAuthorAvatarWrapper: {
    height: "72px",
    width: "72px",
    margin: "1rem",
    borderRadius: "50%",
    "& img": {
      borderRadius: "50%",
      objectFit: "cover",
    },
  },
  blogAuthorDividers: { flexGrow: 1, borderWidth: "1px" },
  blogAuthorUsernameLink: {
    color: "#222",
    fontSize: {
      xs: "26px",
      xl: "30px",
    },
    "& a": {
      color: "#222",
      textDecoration: "none",
    },
    fontWeight: 500,
  },
  blogAuthorBio: {
    maxWidth: "720px",
    textAlign: "center",
    fontSize: {
      xs: "18px",
      xl: "20px",
    },
    margin: "1rem 0rem 1rem",
    fontWeight: 300,
    color: "#555",
    padding: {
      xs: "0rem 1rem",
      sm: "0rem 2rem",
    },
    boxSizing: "border-box",
  },
  blogAuthorGetInTouchBtn: {
    backgroundColor: "#222",
    borderRadius: "200px",
    margin: "1rem 0rem",
    fontWeight: 600,
    textTransform: "capitalize",
    fontSize: {
      xs: "16px",
      xl: "18px",
    },
    padding: "8px 24px",
    color: "#d9d9d9",
    "&:hover": {
      backgroundColor: "#353535",
    },
  },
  // blogAuthor
}
