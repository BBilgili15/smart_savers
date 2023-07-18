const baseURL = 'http://localhost:8080/goals'


export const getGoals = () => {
    return fetch(baseURL)
        .then(res => res.json())
}

export const getGoalsByUserId = (userId: number) => {
    return fetch(`${baseURL}?byUserId=${userId}`)
      .then(res => res.json());
  }

export const addGoal = async (payload: any) => {
    const response =  await fetch(baseURL, {
        method: 'POST',
        body: JSON.stringify(payload),
        headers: { 'Content-Type': 'application/json' }
    })
    const newGoal = await response.json()
    return newGoal;
}

export const deleteGoal = (id: Number) => {
    return fetch(baseURL + `/${id}`, {
        method: 'DELETE'
    })
}


export const updateGoalAmountSaved = (payload:any, id:number) => {
    return fetch(baseURL + `/${id}`, {
      method: 'PATCH',
      body: JSON.stringify(payload),
      headers: { 'Content-Type': 'application/json' }
    })
      .then(res => res.json());
  }
  

// export const updateGoal = (payload: any, id: any) => {
//   return fetch(baseURL + `/${id}`, {
//         method: 'PUT',
//         body: JSON.stringify(payload),
//         headers: { 'Content-Type': 'application/json' }
//   })
//   .then(res => res.json())
// }

