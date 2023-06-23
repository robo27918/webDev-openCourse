import Contact from './components/Contacts'
import PersonForm from './components/PersonForm';
import ContactList from './components/ContactList';
import Filter from './components/Filter';
import {useState} from 'react'


const App = (props) =>{
  console.log("print from App component")
 
  const [contacts,setContacts] = useState(props.contacts)
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [searchName,setNewSearchName] = useState('')
  const [contactsToShow, setContactsToShow] = useState(props.contacts)
  //used to store only relavent contacts...
  console.log("contacts from App",contacts)
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
