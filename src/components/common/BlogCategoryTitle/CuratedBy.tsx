"use client"

import { Box } from "@mui/material"
import Link from "next/link"
import { styles } from "./styles"
import { CURATED_BY_LINK_DEFAULT_TEXT } from "@/utils/constants"
import { useSelector } from "react-redux"
import { RootType } from "@/redux/store"

interface CuratedByProps {
  name?: string
  url?: string
  themeColor: string
}

const CuratedBy = ({ name, url, themeColor }: CuratedByProps) => {
  const { content } = useSelector((state: RootType) => state.contentSlice)

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
        {
          <Link
            href={!url && !name ? content?.curatedByLink : url ?? ""}
            target="_blank"
            rel="noreferrer"
            aria-label={
              `${name ?? CURATED_BY_LINK_DEFAULT_TEXT}` +
              ": View the instagram profile of Kartik Dhawan (The curator of this website)"
            }
          >
            {name ?? CURATED_BY_LINK_DEFAULT_TEXT}
          </Link>
        }
      </Box>
    </Box>
  )
}

export default CuratedBy
