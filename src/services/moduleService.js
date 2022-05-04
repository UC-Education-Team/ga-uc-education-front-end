const BASE_URL = `${process.env.REACT_APP_BACKEND_SERVER_URL}/api/modules`

function getAll() {
  return fetch(BASE_URL)
  .then(res => res.json())
}

export {
  getAll
}