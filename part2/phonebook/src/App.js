import Contact from './components/Contacts'
import {useState} from 'react'

const App = (props) =>{
  console.log("print from App component")
  console.log(props.contacts[0].name)
  const [contacts,setContacts] = useState(props.contacts)
  const [newName, setNewName] = useState('')

  const addContact = (event) => {
    event.preventDefault()
    console.log('button clicked', event.target)
    const nameObject ={
      id: contacts.length +1,
      name: newName,
      number: "xxx-xxx-xxx",
    }
    
    setContacts(contacts.concat(nameObject))
    setNewName('')
  }
  
  const handleContactChange=(event)=>
  {
    console.log(event.target.value)
    setNewName(event.target.value)
  }
  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addContact}>
        <div>
          name: <input value={newName} onChange={handleContactChange}/>
          </div>
          <div>
            <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <ul>
        {contacts.map(contact=> <Contact key={contact.id} contact={contact}/>
        )}
      </ul>
    </div>
  )
}

export default App;
