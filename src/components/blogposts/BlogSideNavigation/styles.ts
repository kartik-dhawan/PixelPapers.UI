export const styles = {
  // sidebar blogs nav specific
  blogsNavDivider: { borderColor: "#222", margin: "8px 0px", opacity: 0.5 },
  blogsSideNavWrapper: { position: "sticky", top: 32, margin: "2rem 1rem" },
  blogsSideNavTitle: { fontWeight: 700, textTransform: "uppercase" },

  // common navlist specific
  blogNavList: { display: "flex", flexDirection: "column", gap: "6px" },
  blogNavListItem: {
    "& a": {
      fontWeight: 500,
      color: "#222",
      textDecoration: "none",
      width: "100%",
      height: "100%",
      padding: "8px 16px",
    },
    padding: 0,
    borderRadius: "4px",
  },
}
