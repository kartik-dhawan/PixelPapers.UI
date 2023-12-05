"use client"

import { DEFAULT_EMAIL } from "@/utils/constants"
import { ErrorPage } from "@/utils/interfaces"
import { Alert, AlertTitle, Box, Button, Collapse, Stack } from "@mui/material"
import Link from "next/link"
import { useCallback, useState } from "react"
import { styles } from "./styles"

const PrimaryError = ({ error, reset }: ErrorPage) => {
  const [viewErrorDetails, setViewErrorDetails] = useState<boolean>()

  const toggleErrorDetails = useCallback(() => {
    setViewErrorDetails((prev) => !prev)
  }, [])

  return (
    <Box
      padding="1rem 1rem"
      boxSizing="border-box"
      maxWidth="100vw"
      component="section"
    >
      <Alert severity="error" variant="filled" sx={{ boxSizing: "border-box" }}>
        <AlertTitle sx={{ fontSize: "20px" }}>
          {process.env.NEXT_PUBLIC_ENVIRONMENT === "dev"
            ? error.name
            : "Internal Error"}
          <Button
            sx={{
              ...styles.genericActionButtons,
              textDecoration: "underline",
              fontWeight: "300 !important",
              marginLeft: "1rem",
            }}
            onClick={reset}
          >
            (Try again?)
          </Button>
        </AlertTitle>
        <Stack gap="1rem">
          <Box sx={{ fontSize: "18px", fontWeight: 300 }}>
            {process.env.NEXT_PUBLIC_ENVIRONMENT === "dev"
              ? error.message
              : "Something went wrong. Please try again or visit the page later."}
          </Box>
          <Collapse in={viewErrorDetails}>
            <Box
              sx={{
                marginBottom: "1rem",
                "& a": {
                  color: "#fff",
                },
              }}
            >
              {process.env.NEXT_PUBLIC_ENVIRONMENT === "dev" ? (
                error.stack
              ) : (
                <>
                  Report this issue by sending an email to{" "}
                  <Link href={`mailto:${DEFAULT_EMAIL}`}>{DEFAULT_EMAIL}</Link>
                </>
              )}
            </Box>
          </Collapse>
        </Stack>
        <Box sx={{ fontSize: "16px" }}>
          This is an error alert —{" "}
          <Button
            disableRipple
            sx={styles.genericActionButtons}
            onClick={toggleErrorDetails}
          >
            {viewErrorDetails ? "View Less" : "View More"}
          </Button>
        </Box>
      </Alert>
    </Box>
  )
}

export default PrimaryError
