"use client"

import { RootType } from "@/redux/store"
import {
  Button,
  Collapse,
  Divider,
  List,
  ListItem,
  Stack,
  SvgIcon,
} from "@mui/material"
import { useSelector } from "react-redux"
import { styles as blogNavStyles } from "../BlogSideNavigation/styles"
import { styles } from "./styles"
import { dmSans } from "@/utils/fonts"
import { OnThisPageLinkObject } from "@/utils/interfaces"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useCallback, useState } from "react"
import NorthIcon from "@mui/icons-material/North"
import { GLOBAL_COLORS } from "@/utils/colorSchemes"
import TableOfContentSkeleton from "@/components/common/Skeletons/TableOfContentSkeleton"
import ArrowRightIcon from "@mui/icons-material/ArrowRight"
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown"

interface TOCProps {
  isDesktop: boolean
}

const TableOfContents = ({ isDesktop }: TOCProps) => {
  const path = usePathname()
  console.log(isDesktop)

  const { onThisPageData } = useSelector(
    (state: RootType) => state.currentBlogSlice,
  )

  const [sectionId, setSectionId] = useState<string>("")
  const [showTOC, setShowTOC] = useState<boolean>(isDesktop)

  const showHideTOCHandler = useCallback(() => {
    setShowTOC((prev) => !prev)
  }, [])

  return (
    <Stack
      className={dmSans.className}
      sx={{ position: "sticky", top: 32 }}
      divider={<Divider sx={blogNavStyles.blogsNavDivider} />}
    >
      <Button
        disableRipple
        sx={{
          ...blogNavStyles.blogsSideNavTitle,
          width: "max-content",
          padding: 0,
          lineHeight: "24px",
        }}
        startIcon={showTOC ? <ArrowDropDownIcon /> : <ArrowRightIcon />}
        onClick={showHideTOCHandler}
      >
        TABLE OF CONTENTS
      </Button>
      <List sx={{ padding: 0 }}>
        {onThisPageData ? (
          onThisPageData.map((item: OnThisPageLinkObject, index: number) => {
            return (
              <Collapse in={showTOC} key={item.blogSectionId + index}>
                <ListItem
                  sx={{
                    "& a": {
                      color:
                        sectionId === item.blogSectionId
                          ? "#000"
                          : GLOBAL_COLORS.TEXT_PRIMARY_LIGHTER,
                      ...styles.TOCListItemLink,
                    },
                  }}
                >
                  <Link
                    href={`${path}#${item.blogSectionId}`}
                    onClick={() => {
                      setSectionId(item.blogSectionId)
                    }}
                  >
                    {item.label}
                  </Link>
                </ListItem>
              </Collapse>
            )
          })
        ) : (
          <TableOfContentSkeleton />
        )}
        {isDesktop && (
          <Collapse in={showTOC}>
            <ListItem
              sx={{
                marginTop: "1rem",
                "& a": {
                  color: GLOBAL_COLORS.TEXT_PRIMARY_LIGHTER,
                  ...styles.TOCListItemLink,
                },
              }}
            >
              <Link href={path}>Go to top </Link>
              <SvgIcon sx={{ height: "16px", aspectRatio: "1/1" }}>
                <NorthIcon />
              </SvgIcon>
            </ListItem>
          </Collapse>
        )}
      </List>
    </Stack>
  )
}

export default TableOfContents
