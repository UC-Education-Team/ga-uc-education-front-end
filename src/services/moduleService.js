import * as tokenService from './tokenService'
const BASE_URL = `${process.env.REACT_APP_BACKEND_SERVER_URL}/modules`

export async function createModule(_module) {
  const newModule = await fetch(`${BASE_URL}`, {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${tokenService.getToken()}`,
      'content-type': 'application/json',
    },
    body: JSON.stringify(_module)
  })
  return newModule.json()
}
