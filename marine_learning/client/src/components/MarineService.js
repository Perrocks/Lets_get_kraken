const baseURL = ("http://localhost:9000/api/marine_info/")

export const getMarineInfo = () => {
    return fetch(baseURL)
    .then(res => res.json())
}

export const getOneMarineItem = (id) => {
    return fetch(baseURL + id)
    .then(res => res.json())
}