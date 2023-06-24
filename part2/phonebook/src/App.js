import Contact from './components/Contacts'
import PersonForm from './components/PersonForm';
import ContactList from './components/ContactList';
import Filter from './components/Filter';
import {useState, useEffect} from 'react'
import axios from 'axios'


const App = () =>{
  console.log("print from App component")
 
  const [contacts,setContacts] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [searchName,setNewSearchName] = useState('')
  const [contactsToShow, setContactsToShow] = useState(contacts)

  //fetching data with axios from db.json
  const hook = () =>{
    console.log('effect')
    axios
      .get('http://localhost:3007/persons')
      .then( response =>
        {
          console.log('promise fullfilled',response.data)
          setContacts(response.data)
          setContactsToShow(response.data)
        }
        )
  }
  //using the effect
  useEffect(hook,[])
  console.log("render", contacts.length, "contacts")
  //used to store only relavent contacts...
  //console.log("contacts from App",contacts)
  return (
    <div>
      <h2>Phonebook</h2>
       <Filter contacts={contacts} setContactsToShow={setContactsToShow} setNewSearchName={setNewSearchName} searchName={searchName}/>
       <br></br>
       
       <h2>add a new</h2>
        <PersonForm setContacts={setContacts} contacts ={contacts} newName={newName}setNewName={setNewName}
        newNumber ={newNumber} setNewNumber={setNewNumber} contactsToShow={contactsToShow} setContactsToShow={setContactsToShow}/>
      
      <h2>Numbers</h2>
      <ContactList contactsToShow={contactsToShow}/>
    </div>
  )
}

export default App;
