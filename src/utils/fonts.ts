import { DM_Sans, Anton, Libre_Barcode_39 } from "next/font/google"

export const dmSans = DM_Sans({
  weight: ["200", "300", "400", "500", "600", "700"],
  subsets: ["latin"],
  display: "swap",
  preload: true,
})

export const barcode = Libre_Barcode_39({
  weight: ["400"],
  subsets: ["latin"],
  display: "swap",
})

export const anton = Anton({
  weight: ["400"],
  subsets: ["latin"],
  display: "swap",
})
