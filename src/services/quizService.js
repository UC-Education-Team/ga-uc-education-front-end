import * as tokenService from './tokenService'
const BASE_URL = `${process.env.REACT_APP_BACKEND_SERVER_URL}/quiz`

export async function createQuiz(quiz) {
  const newQuiz = await fetch(`${BASE_URL}`, {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${tokenService.getToken()}`,
      'content-type': 'application/json',
    },
    body: JSON.stringify(quiz)
  })
  return newQuiz.json()
}
