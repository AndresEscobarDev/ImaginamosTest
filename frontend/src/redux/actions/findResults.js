export const type = 'findResults'

const findResults = number => {
  return {
    type,
    payload: number
  }
}

export default findResults