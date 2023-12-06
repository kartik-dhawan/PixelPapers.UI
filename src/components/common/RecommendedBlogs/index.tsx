"use client"

import { RootType } from "@/redux/store"
import {
  ANONYMOUS_AUTHOR_DATA,
  AVERAGE_TIME_TO_READ_A_BLOG,
} from "@/utils/constants"
import { dmSans } from "@/utils/fonts"
import { ChildrenType, TravelBlogContentfulObject } from "@/utils/interfaces"
import { secondsToMinutes } from "@/utils/methods"
import {
  Avatar,
  Box,
  Divider,
  Grid,
  Link,
  Skeleton,
  Stack,
} from "@mui/material"
import Image from "next/image"
import { useSelector } from "react-redux"
import { styles } from "./styles"
import { useState } from "react"

interface RecommendedBlogsProps {
  blogs: TravelBlogContentfulObject[]
  fullWidth?: boolean
  path?: `/${string}`
  children?: ChildrenType
}

/**
 * A custom reusable component for recommendation section.
 * @param {RecommendedBlogsProps} Props
 * ** blogs - the blogs data
 * ** fullWidth - should the blog cards be full width or cards in multiple columns
 * ** path - the path to append to the blog url like '/travel' will be appended to the sluh url /[ghosts-of-shoja]
 * ** children - Children  of this component gets rendered as the title
 *
 */

const RecommendedBlogs = ({
  blogs,
  fullWidth = false, // default value false, it will render square cards
  path,
  children,
}: RecommendedBlogsProps) => {
  const rid = "recommendations"

  const { content } = useSelector((state: RootType) => state.contentSlice)

  const [imageLoadingStatus, setImageLoadingStatus] = useState(false)

  const imageLoadingHandler = () => {
    setImageLoadingStatus(true)
  }

  return (
    <Box
      className={rid + "SectionWrapper " + dmSans.className}
      sx={styles.recommendationsSectionWrapper}
    >
      <>{children}</>
      <Grid
        container
        spacing={{ xs: 2, sm: 4, md: 4 }}
        className={rid + "CardContainer"}
        sx={{
          maxWidth: {
            xs: "720px",
            md: fullWidth ? "880px" : "720px",
            xl: "900px",
          },
        }}
      >
        {blogs.map((item: TravelBlogContentfulObject) => {
          return (
            <Grid
              item
              className={rid + "Card"}
              key={item.sys.id}
              xs={12}
              md={fullWidth ? 12 : 6}
              sx={styles.recommendationsCard}
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
                <Grid
                  className={rid + "CardContentWrapper"}
                  container
                  sx={{ height: "100%" }}
                >
                  <Grid
                    item
                    xs={12}
                    sm={5}
                    md={fullWidth ? 5 : 12}
                    className={rid + "CardImageWrapper"}
                    sx={{
                      ...styles.recommendationsCardImageWrapper,
                      "& img": {
                        ...styles.recommendationsCardImage,
                        padding: fullWidth
                          ? {
                              sm: "8px",
                              md: "1rem",
                            }
                          : {},
                      },
                    }}
                  >
                    {!imageLoadingStatus && (
                      <Box
                        padding="1rem"
                        boxSizing="border-box"
                        height="100%"
                        width="100%"
                      >
                        <Skeleton
                          variant="rectangular"
                          height="100%"
                          width="100%"
                        />
                      </Box>
                    )}
                    <Image
                      className={rid + "CardImage"}
                      src={`https:${item.fields.blogMetaImage.fields.file.url}`}
                      alt=""
                      fill
                      onLoad={imageLoadingHandler}
                    />
                  </Grid>
                  <Grid
                    item
                    xs={12}
                    sm={7}
                    md={fullWidth ? 7 : 12}
                    className={rid + "CardTextContent"}
                    sx={styles.recommendationsCardTextContent}
                  >
                    <Stack
                      direction="row"
                      alignItems="center"
                      gap="8px"
                      margin="0px 0px"
                      className={rid + "CardAuthorDetails"}
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
                      <Box sx={styles.recommendationsCardAuthorUsername}>
                        {item.fields.blogAuthorData
                          ? item.fields.blogAuthorData?.username ??
                            ANONYMOUS_AUTHOR_DATA.USERNAME
                          : content.myAuthorProfileData?.username ??
                            ANONYMOUS_AUTHOR_DATA.USERNAME}
                      </Box>
                    </Stack>
                    <Box className={rid + "CardBlogHead"}>
                      <Box
                        component="h3"
                        className={rid + "CardBlogTitle"}
                        sx={styles.recommendationsCardBlogTitle}
                      >
                        {item.fields.blogMetaTitle}
                      </Box>
                      <Box
                        className={rid + "CardBlogDescription"}
                        sx={{
                          ...styles.recommendationsCardBlogDescription,
                          WebkitLineClamp: {
                            xs: fullWidth ? 3 : 2,
                            sm: 3,
                            md: fullWidth ? 3 : 2,
                          },
                        }}
                      >
                        {item.fields.initialBlogDescription}
                      </Box>
                    </Box>
                    <Stack
                      direction="row"
                      justifyContent="space-between"
                      className={rid + "CardBlogMetaInformation"}
                      sx={{
                        ...styles.recommendationsCardBlogMetaInfo,
                        marginTop: {
                          xs: fullWidth ? "auto" : "1rem",
                          sm: "auto",
                          md: fullWidth ? "auto" : "1rem",
                        },
                      }}
                    >
                      <span>
                        {secondsToMinutes(
                          item.fields.blogMetaInformation
                            ?.timeToReadInSeconds ??
                            AVERAGE_TIME_TO_READ_A_BLOG * 60,
                        )}
                        &nbsp;min read
                      </span>
                      <span style={{ textTransform: "uppercase" }}>
                        {item.fields.blogType}
                      </span>
                    </Stack>
                  </Grid>
                </Grid>
              </Link>
              <Divider
                className={rid + "CardDivider"}
                sx={{
                  marginTop: "16px",
                  display: { xs: "flex", md: fullWidth ? "flex" : "none" },
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
