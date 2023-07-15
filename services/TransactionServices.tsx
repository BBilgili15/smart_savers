const baseURL = 'http://localhost:8080/transactions'


export const getTransactions = () => {
    return fetch(baseURL)
        .then(res => res.json())
}

export const getTransactionsByUserId = (userId: number) => {
  return fetch(`${baseURL}?byUserId=${userId}`)
    .then(res => res.json());
}

export const addTransaction = (payload: any) => {
    return fetch(baseURL, {
        method: 'POST',
        body: JSON.stringify(payload),
        headers: { 'Content-Type': 'application/json' }
    })
    .then(res => res.json())
}

export const deleteTransaction = (id: Number) => {
    return fetch(baseURL + `/${id}`, {
        method: 'DELETE'
    })
}

export const updateTransaction = (payload: any, id: Number) => {
  return fetch(baseURL + `/${id}`, {
        method: 'PUT',
        body: JSON.stringify(payload),
        headers: { 'Content-Type': 'application/json' }
  })
  .then(res => res.json())
}

// export const getTransactionsByCatAndUserId = (categoryType:string, userId:number) => {
//     return fetch(`${baseURL}/transactions?categoryType=${categoryType}&userId=${userId}`)
//       .then(res => res.json());
//   };
  