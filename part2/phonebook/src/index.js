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
    }

]
ReactDOM.createRoot(document.getElementById("root")).render(<App contacts={contacts} />)
