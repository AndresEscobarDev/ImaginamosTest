export const type = 'carContent'

const carContent = array => {
  return {
    type,
    payload: array
  }
}

export default carContent