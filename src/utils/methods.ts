import { GLOBAL_COLORS, PAGE_LEVEL_COLORS } from "./colorSchemes"

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
