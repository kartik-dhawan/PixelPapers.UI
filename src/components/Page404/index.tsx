import { dmSans, barcode, anton } from "@/utils/fonts"
import { Box, Stack } from "@mui/material"
import Link from "next/link"
import { styles } from "./styles"

const Page404 = () => {
  const nid = "notFound"

  return (
    <Stack
      className={nid + "Wrapper " + dmSans.className}
      data-testid={nid + "Wrapper"}
      sx={styles.notFoundWrapper}
    >
      <Box
        className={nid + "StatusCode " + anton.className}
        data-testid={nid + "StatusCode"}
        component={"h1"}
        sx={styles.notFoundStatusCode}
      >
        404
      </Box>
      <Box
        className={nid + "BarCode " + barcode.className}
        data-testid={nid + "BarCode"}
        sx={styles.notFoundBarCode}
      >
        R u lost, babygirl?
      </Box>
      <Box
        className={nid + "Textbox"}
        data-testid={nid + "Textbox"}
        sx={styles.notFoundTextBox}
      >
        Don&lsquo;t understand bar code? Yeah we don&lsquo;t understand your
        request either.
        <br />
        Please enter a valid URL.
      </Box>
      <Box
        className={nid + "GoBackLink"}
        data-testid={nid + "GoBackLink"}
        sx={styles.notFoundGoBackLink}
      >
        <Link
          href="/"
          aria-label="Link that will take you back to the home page of this blog wesbite."
        >
          Want us to take you back &lsquo;home&lsquo;?
        </Link>
      </Box>
    </Stack>
  )
}

export default Page404
