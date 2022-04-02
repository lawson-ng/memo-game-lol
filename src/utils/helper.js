export const shuffleArray = array => {
  const result = [...array]
  const length = result.length - 1
  for (let i = length; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    const temp = result[i]
    result[i] = result[j]
    result[j] = temp
  }
  return result
}
