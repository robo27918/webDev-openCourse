import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';
const contacts = [
    {
        id:1,
        name:"Roberto Toribio",
        number:"626-384-8619",
    },
    {
        id:2,
        name:"Arto Hellas",
        number:"333-342-5311"
    },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 3 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 4 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 5}
    

]
ReactDOM.createRoot(document.getElementById("root")).render(<App contacts={contacts} />)
