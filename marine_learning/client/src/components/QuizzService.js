const baseURL = ("http://localhost:9000/api/quizz_score/")

export const getScoreData = () => {
    return fetch(baseURL)
    .then(res => res.json())
}

export const updateScore = (item) => {
    return fetch(baseURL + item._id, {
        method: 'PUT',
        body: JSON.stringify(item),
        headers: {'Content-Type': 'application/json'}
    })
    .then(res => res.json())
}