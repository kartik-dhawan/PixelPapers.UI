"use client"

import { RootType } from "@/redux/store"
import { anton, poppins } from "@/utils/fonts"
import { Box, Button, Stack, SvgIcon } from "@mui/material"
import Link from "next/link"
import { useSelector } from "react-redux"
import Image from "next/image"
import { styles } from "./styles"
import { useState } from "react"
import TrendingFlatIcon from "@mui/icons-material/TrendingFlat"

const HeroSection = () => {
  const { content } = useSelector((state: RootType) => state.contentSlice)
  const [isImageLoaded, setIsImageLoaded] = useState<boolean>(false)

  return (
    <Box component="section" sx={{ height: "100svh", position: "relative" }}>
      <Box sx={styles.heroSectionImageWrapper}>
        {!isImageLoaded && <Box sx={styles.heroSectionImageFallback} />}
        <Image
          onLoad={() => {
            setIsImageLoaded(true)
          }}
          src={`https:${content?.homePageImage?.fields.file.url}`}
          alt={content.homePageImage?.fields.description ?? "Image"}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw)"
        />
      </Box>
      <Stack
        justifyContent="center"
        alignItems="center"
        sx={styles.heroSectionOverlayContentWrapper}
      >
        <Box
          component="h1"
          className={anton.className}
          sx={styles.heroSectionHeading}
        >
          PIXEL PAPERS
        </Box>
        <Box className={poppins.className} sx={styles.heroSectionAuthorLink}>
          by{" "}
          <Link
            href={content.curatedByLink ?? "#!"}
            target="_blank"
            rel="noreferrer"
            aria-label="View the instagram profile of Kartik Dhawan (The curator of this website)"
          >
            kartik-dhawan
          </Link>
        </Box>
      </Stack>
      <Button
        className={poppins.className}
        disableRipple
        sx={styles.heroSectionButton}
        endIcon={
          <SvgIcon className="hello" sx={styles.heroSectionStartReadingSvg}>
            <TrendingFlatIcon />
          </SvgIcon>
        }
      >
        <Link href="/travel">Start Reading</Link>
      </Button>
    </Box>
  )
}

export default HeroSection
