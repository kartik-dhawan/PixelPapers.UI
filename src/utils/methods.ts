import { GLOBAL_COLORS, PAGE_LEVEL_COLORS } from "./colorSchemes"
import { ClassOrID } from "./interfaces"

/**
 *
 * @param {Object} obj
 * @returns {string}
 */
export const objectToQueryString = (
  obj: any,
): string /* eslint-disable-line */ => {
  const keys = Object.keys(obj)
  const keyValuePairs = keys.map((key) => {
    return encodeURIComponent(key) + "=" + encodeURIComponent(obj[key])
  })
  return keyValuePairs.join("&")
}

/**
 *
 * @param {string} path // eg: '/travel'
 * @returns {string} // hexcode
 */
export const getThemeColorByPath = (path: string): string => {
  const colors: any = {
    "/travel": PAGE_LEVEL_COLORS.TRAVEL.BACKGROUND_PRIMARY_DARK,
  }

  return colors[path] ?? GLOBAL_COLORS.COMMON_FOOTER_BACKGRUND_DARK
}

/**
 *
 * @param {string} hex
 * @param {number} lightenValue  //number between 0-1
 * @returns
 */
export const lightenHexColor = (hex: string, lightenValue: number): string => {
  // Ensure that the input is a valid hex color code
  const hexRegex = /^#([0-9a-f]{3}|[0-9a-f]{6})$/i
  if (!hexRegex.test(hex)) {
    throw new Error("Invalid hex color code")
  }

  // Remove the "#" symbol if present
  hex = hex.replace("#", "")

  // Parse the hex color code into RGB components
  const bigint = parseInt(hex, 16)
  let r = (bigint >> 16) & 255
  let g = (bigint >> 8) & 255
  let b = bigint & 255

  // Calculate the lighter color values
  r = Math.min(255, Math.round(r + lightenValue * (255 - r)))
  g = Math.min(255, Math.round(g + lightenValue * (255 - g)))
  b = Math.min(255, Math.round(b + lightenValue * (255 - b)))

  // Convert the lighter RGB values back to hex
  const lighterHex = ((r << 16) | (g << 8) | b).toString(16).padStart(6, "0")

  // Add the "#" symbol and return the result
  return `#${lighterHex}`
}

/**
 *
 * @param {string} dateString
 * @returns {string}
 */
export const getDateFromString = (dateString?: string) => {
  if (dateString) {
    const x = Date.parse(dateString)
    const date = new Date(x)
    return `${date.toLocaleDateString("default", {
      month: "short",
    })} ${date.getDate()}`
  } else {
    const date = new Date()
    return `${date.toLocaleDateString("default", {
      month: "short",
    })} ${date.getDate()}`
  }
}

/**
 *
 * @param {number} timeInSeconds
 * @returns {number}
 */
export const secondsToMinutes = (timeInSeconds: number) => {
  return Math.ceil(timeInSeconds / 60)
}

/**
 *
 * @param {ClassOrID} classOrID
 * @returns {boolean}
 */
export const isElementInViewPort = (classOrID: ClassOrID) => {
  if (typeof window !== "undefined") {
    const rect = document.querySelector(classOrID)?.getBoundingClientRect()
    return (
      rect &&
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <=
        (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientHeight)
    )
  }
}

export const shuffleArray = (array: any[]): any[] => {
  // Create a copy of the original array to avoid modifying the input array
  const shuffledArray = [...array]

  // Perform Fisher-Yates shuffle
  for (let i = shuffledArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    // Swap elements at i and j
    ;[shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]]
  }

  return shuffledArray
}
