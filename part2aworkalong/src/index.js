import axios from 'axios'
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
ReactDOM.createRoot(document.getElementById('root')).render(<App/>)
/*** 
axios
.get('http://localhost:3001/notes').
then(response=>{
    const notes = response.data
    console.log(notes)
   
})

//const promise2 = axios.get('http://localhost:3001/foobar')
//console.log(promise2)
***/

/***const notes = [
  {id:1,
  content:"html is easy",
  important: true},
  {
    id:2,
    content:"Browser can execute only javscript",
    important: false

  },
  {
    id:3,
    content: "GET and POST are the most important methods of HTTP protocol",
    important: true,

  },
  {
    id:4,
    content:"This is a made up of list item",
    important: true
  }
]
***/


