const baseURL = 'http://localhost:8080/users'


export const getUsers = () => {
    return fetch(baseURL)
        .then(res => res.json())
}

export const addUser = (payload: any) => {
    return fetch(baseURL, {
        method: 'POST',
        body: JSON.stringify(payload),
        headers: { 'Content-Type': 'application/json' }
    })
    .then(res => res.json())
}

export const deleteUser = (id: Number) => {
    return fetch(baseURL + id, {
        method: 'DELETE'
    })
}

export const updateUser = (payload: any, id: Number) => {
  return fetch(baseURL + id, {
        method: 'PUT',
        body: JSON.stringify(payload),
        headers: { 'Content-Type': 'application/json' }
  })
  .then(res => res.json())
}

