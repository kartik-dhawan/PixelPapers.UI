"use client"

import { RootType } from "@/redux/store"
import { GLOBAL_COLORS } from "@/utils/colorSchemes"
import {
  ANONYMOUS_AUTHOR_DATA,
  AVERAGE_TIME_TO_READ_A_BLOG,
} from "@/utils/constants"
import { dmSans } from "@/utils/fonts"
import { TravelBlogContentfulObject } from "@/utils/interfaces"
import { secondsToMinutes } from "@/utils/methods"
import { Avatar, Box, Divider, Grid, Link, Stack } from "@mui/material"
import Image from "next/image"
import { useSelector } from "react-redux"

interface RecommendedBlogsProps {
  blogs: TravelBlogContentfulObject[]
  gridColumns: number
  path?: `/${string}`
}

const RecommendedBlogs = ({
  blogs,
  gridColumns,
  path,
}: RecommendedBlogsProps) => {
  const { content } = useSelector((state: RootType) => state.contentSlice)

  console.log(gridColumns)

  return (
    <Box
      className={dmSans.className}
      sx={{
        padding: {
          xs: "2rem",
          sm: "4rem",
          md: "2rem",
        },
        boxSizing: "border-box",
        // backgroundColor: "#f9f9f9",
        display: "flex",
        justifyContent: "center",
        width: "100vw",
      }}
    >
      <Grid
        container
        spacing={{ xs: 2, sm: 4, md: 4 }}
        sx={{
          maxWidth: {
            xs: "720px",
            xl: "880px",
          },
        }}
      >
        {blogs.map((item: TravelBlogContentfulObject) => {
          return (
            <Grid
              item
              key={item.sys.id}
              xs={12}
              md={6}
              sx={{
                minHeight: "300px",
                margin: "1rem 0rem",
                "& a": {
                  textDecoration: "none",
                  color: "#222",
                },
              }}
            >
              <Link
                href={
                  path
                    ? `${path + "/" + item.fields.blogUrlSlug}`
                    : item.fields.blogUrlSlug ?? "#!"
                }
                rel="noreferrer"
                aria-label={`A link to open the blog titled: ${item.fields.blogMetaTitle}, in next tab`}
              >
                <Stack sx={{ height: "100%" }} gap={{ xs: "12px", md: "12px" }}>
                  <Box
                    className="cardImage"
                    sx={{
                      position: "relative",
                      maxWidth: "100%",
                      height: {
                        xs: "200px",
                        sm: "250px",
                        md: "200px",
                        xl: "250px",
                      },
                      "& img": {
                        objectFit: "cover",
                        objectPosition: {
                          xs: "0% 60%",
                          sm: "0% 70%",
                        },
                      },
                    }}
                  >
                    <Image
                      src={`https:${item.fields.blogMetaImage.fields.file.url}`}
                      alt=""
                      fill
                    />
                  </Box>
                  <Stack
                    direction="row"
                    alignItems="center"
                    gap="8px"
                    margin="0px 0px"
                    className="cardAvatar"
                  >
                    <Avatar
                      src={`https:${
                        item.fields.blogAuthorData
                          ? item.fields.authorImage?.fields.file.url ?? ""
                          : content.myProfileImage?.fields.file.url
                      }`}
                      alt={"Author of the blog"}
                      sx={{
                        bgcolor: item.fields.blogThemeColor,
                        height: "24px",
                        width: "24px",
                      }}
                    />
                    <Box
                      sx={{
                        fontSize: {
                          xs: "14px",
                          sm: "16px",
                          md: "14px",
                          xl: "18px",
                        },
                      }}
                    >
                      {item.fields.blogAuthorData
                        ? item.fields.blogAuthorData?.username ??
                          ANONYMOUS_AUTHOR_DATA.USERNAME
                        : content.myAuthorProfileData.username}
                    </Box>
                  </Stack>
                  <Box className="cardBody">
                    <Box
                      component="h3"
                      sx={{
                        margin: "4px 0px",
                        fontSize: {
                          xs: "22px",
                          sm: "26px",
                          md: "22px",
                          xl: "26px",
                        },
                        textOverflow: "ellipsis",
                        whiteSpace: "nowrap",
                        overflow: "hidden",
                        letterSpacing: "-1px",
                        fontWeight: 600,
                      }}
                    >
                      {item.fields.blogMetaTitle}
                    </Box>
                    <Box
                      sx={{
                        fontWeight: 300,
                        display: "-webkit-box",
                        overflow: "hidden",
                        WebkitLineClamp: 2,
                        WebkitBoxOrient: "vertical",
                        fontSize: {
                          xs: "18px",
                          sm: "20px",
                          md: "18px",
                          xl: "22px",
                        },
                        color: GLOBAL_COLORS.TEXT_PRIMARY_LIGHTER,
                      }}
                    >
                      {item.fields.initialBlogDescription}
                    </Box>
                  </Box>
                  <Stack
                    direction="row"
                    justifyContent="space-between"
                    sx={{
                      fontSize: {
                        xs: "14px",
                        sm: "16px",
                        md: "14px",
                        xl: "18px",
                      },
                      color: GLOBAL_COLORS.TEXT_PRIMARY_LIGHTER,
                    }}
                  >
                    <span>
                      {secondsToMinutes(
                        item.fields.blogMetaInformation?.timeToReadInSeconds ??
                          AVERAGE_TIME_TO_READ_A_BLOG * 60,
                      )}
                      &nbsp;min read
                    </span>
                    <span style={{ textTransform: "uppercase" }}>
                      {item.fields.blogType}
                    </span>
                  </Stack>
                </Stack>
              </Link>
              <Divider
                sx={{
                  marginTop: "12px",
                  display: { xs: "flex", md: "none" },
                }}
              />
            </Grid>
          )
        })}
      </Grid>
    </Box>
  )
}

export default RecommendedBlogs
