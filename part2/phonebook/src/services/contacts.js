import axios from 'axios'
const baseUrl = 'http://localhost:3007/persons'

const getAll = () => {
    const request = axios.get(baseUrl)
    return request.then(response => response.data)
}

const create = newObject => {
    const request = axios.post(baseUrl, newObject)
    return request.then(response => response.data)
}

const update = (id, newObject) => {
    const request = axios.put(`${baseUrl}/${id}`, newObject)
    return request.then(response => response.data)
}
//deleteNote method added to fullfill requirement of 
const deleteNote = (id) => {
    console.log('from deleteNote in contactService...')
    console.log('id is ', id)
    const request = axios.delete(`${baseUrl}/${id}`)
    return request.then(response => {
        console.log(response.data)})
}

export default{ getAll, create, update, deleteNote}