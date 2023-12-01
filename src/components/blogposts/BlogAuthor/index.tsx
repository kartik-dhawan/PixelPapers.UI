"use client"

import { dmSans } from "@/utils/fonts"
import { BlogAuthorData, TravelBlogPost } from "@/utils/interfaces"
import { Box, Button, Divider, Stack, SvgIcon } from "@mui/material"
import Image from "next/image"
import Link from "next/link"
import MailOutlineIcon from "@mui/icons-material/MailOutline"
import { useEffect, useState } from "react"
import { styles } from "./styles"
import { ANONYMOUS_AUTHOR_DATA } from "@/utils/constants"

interface BlogAuthorProps {
  currentBlog: TravelBlogPost
  content: any
}

const BlogAuthor = ({ currentBlog, content }: BlogAuthorProps) => {
  const initialAuthorState: BlogAuthorData = {
    bio: "",
    username: "",
    usernameLink: "",
    email: "",
  }
  const [author, setAuthor] = useState<BlogAuthorData>(initialAuthorState)
  const [authorImage, setAuthorImage] = useState<any>()

  useEffect(() => {
    if (currentBlog.blogAuthorData !== undefined) {
      // if data of third party author is available
      // set the data as it is, with a nullify condition

      // if the third party author wants to be anonymous, they need to send an empty json object
      const realAuthor = currentBlog.blogAuthorData
      setAuthor({
        username: realAuthor.username ?? ANONYMOUS_AUTHOR_DATA.USERNAME,
        usernameLink: realAuthor.usernameLink ?? "#!",
        bio: realAuthor.bio ?? ANONYMOUS_AUTHOR_DATA.BIO,
        email: realAuthor.email,
      })
    } else {
      // display it as my own blog if the blogAuthorFields are empty
      setAuthor(content.myAuthorProfileData)
    }
    console.log(currentBlog.blogAuthorData)
  }, [content, currentBlog])

  useEffect(() => {
    console.log(author)
  }, [author])

  useEffect(() => {
    if (currentBlog.authorImage && currentBlog.blogAuthorData) {
      // if we have both image & authorData for third party author
      // then display the image of that author
      setAuthorImage(currentBlog.authorImage)
    } else if (currentBlog.blogAuthorData && !currentBlog.authorImage) {
      // if we do not have the image of the third party author but have the authorData
      // then show a generic image
      setAuthorImage(undefined)
    } else {
      // in every other case, show my default image
      // making the blog my own
      setAuthorImage(content.myProfileImage)
    }
  }, [content, currentBlog])

  return (
    <Stack
      alignItems="center"
      className={"blogAuthorSectionWrapper " + dmSans.className}
      component="section"
      marginBottom="3rem"
    >
      <Box fontSize={{ xs: "14px", xl: "18px" }} margin="1rem">
        by
      </Box>
      <Stack
        direction="row"
        divider={
          <Box
            sx={{
              backgroundColor: currentBlog.blogThemeColor,
              position: "relative",
              ...styles.blogAuthorAvatarWrapper,
            }}
          >
            {authorImage && (
              <Image
                src={`https:${authorImage?.fields.file?.url}`}
                alt={
                  authorImage.fields.description ??
                  "Profile Avatar of the Author of the Blog"
                }
                fill
                sizes="(max-width: 768px) 50vw, (max-width: 1200px) 30vw, 15vw)"
              />
            )}
          </Box>
        }
        alignItems="center"
        sx={styles.blogAuthorAvatarSectionWrapper}
      >
        <Divider sx={styles.blogAuthorDividers} />
        <Divider sx={styles.blogAuthorDividers} />
      </Stack>
      <Box sx={styles.blogAuthorUsernameLink}>
        {author.usernameLink ? (
          <Link
            href={author.usernameLink}
            target="_blank"
            rel="noreferrer"
            aria-label="External link to the profile of the author of this blog."
          >
            {author.username}
          </Link>
        ) : (
          author.username
        )}
      </Box>
      <Box sx={styles.blogAuthorBio}>{author.bio ?? "Let me be unknown."}</Box>
      {author.email && (
        <Link
          href={`mailto:${author.email}`}
          target="_blank"
          rel="noreferrer"
          aria-label="Link to the email of the author of this blog."
        >
          <Button
            sx={styles.blogAuthorGetInTouchBtn}
            startIcon={
              <SvgIcon>
                <MailOutlineIcon />
              </SvgIcon>
            }
          >
            Get in touch
          </Button>
        </Link>
      )}
    </Stack>
  )
}

export default BlogAuthor
