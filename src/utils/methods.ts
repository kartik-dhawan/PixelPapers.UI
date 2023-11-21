/**
 *
 * @param {Object} obj
 * @returns {string}
 */
export const objectToQueryString = (obj: any) /* eslint-disable-line */ => {
  const keys = Object.keys(obj)
  const keyValuePairs = keys.map((key) => {
    return encodeURIComponent(key) + "=" + encodeURIComponent(obj[key])
  })
  return keyValuePairs.join("&")
}
