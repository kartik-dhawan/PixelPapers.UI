"use client"

import { Box } from "@mui/material"
import Link from "next/link"
import { styles } from "./styles"

interface CuratedByProps {
  name: string
  url?: string
  themeColor: string
}

const CuratedBy = ({ name, url, themeColor }: CuratedByProps) => {
  return (
    <Box sx={{ display: "flex", gap: "4px", alignItems: "center" }}>
      <Box component="span" sx={styles.curatedText}>
        Curated
      </Box>
      <Box component="span" sx={{ fontSize: "14px" }}>
        by
      </Box>
      <Box
        component="span"
        sx={{
          ...styles.curatedByColorBox,
          backgroundColor: themeColor ?? "#000",
        }}
      />
      <Box component="span" sx={styles.curatedByUserLink}>
        {url ? (
          <Link href={url} target="_blank">
            {name}
          </Link>
        ) : (
          <>{name}</>
        )}
      </Box>
    </Box>
  )
}

export default CuratedBy
