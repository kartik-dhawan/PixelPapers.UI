"use client"

import { RootType } from "@/redux/store"
import { dmSans } from "@/utils/fonts"
import { Box, Divider, Stack } from "@mui/material"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useSelector } from "react-redux"
import { styles } from "./styles"
import { getThemeColorByPath } from "@/utils/methods"
import { SocialMediaLink } from "@/utils/interfaces"

const PrimaryFooter = () => {
  const fid = "primaryFooter"

  const path = usePathname()

  const { content } = useSelector((state: RootType) => state.contentSlice)

  return (
    <Box
      component="footer"
      className={fid + "Wrapper " + dmSans.className}
      data-testid={fid + "Wrapper"}
      sx={{
        backgroundColor: getThemeColorByPath(path),
        ...styles.primaryFooterWrapper,
      }}
    >
      {content.socialMediaLinks && (
        <Stack
          className={fid + "SocialLinksList"}
          data-testid={fid + "SocialLinksList"}
          direction="row"
          divider={
            <Divider
              sx={styles.primaryFooterSocialLinksList}
              orientation="vertical"
              flexItem
            />
          }
          justifyContent={"center"}
        >
          {/* displaying only top 3 links on footer as of now */}
          {content.socialMediaLinks.slice(0, 3).map((item: SocialMediaLink) => {
            return (
              <Box
                key={item.id}
                className={fid + "SocialLink"}
                data-testid={fid + "SocialLink" + item.id}
                sx={styles.primaryFooterSocialLink}
              >
                <Link href={item.url} target="_blank" rel="noreferrer">
                  {item.label}
                </Link>
              </Box>
            )
          })}
        </Stack>
      )}
    </Box>
  )
}

export default PrimaryFooter
