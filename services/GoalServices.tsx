const baseURL = 'http://localhost:8080/goals'


export const getGoals = () => {
    return fetch(baseURL)
        .then(res => res.json())
}

export const addGoal = (payload: any) => {
    return fetch(baseURL, {
        method: 'POST',
        body: JSON.stringify(payload),
        headers: { 'Content-Type': 'application/json' }
    })
    .then(res => res.json())
}

export const deleteGoal = (id: Number) => {
    return fetch(baseURL + `/${id}`, {
        method: 'DELETE'
    })
}

export const updateGoal = (payload: any, id: Number) => {
  return fetch(baseURL + `/${id}`, {
        method: 'PUT',
        body: JSON.stringify(payload),
        headers: { 'Content-Type': 'application/json' }
  })
  .then(res => res.json())
}

