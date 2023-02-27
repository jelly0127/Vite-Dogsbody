const filterAddress = (str: string | undefined) => {
  if (str) {
    return `${str.substring(0, 4)}...${str.slice(str.length - 4, str.length)}`
  }
  return ''
}
export { filterAddress }
