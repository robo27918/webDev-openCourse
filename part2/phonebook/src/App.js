import Contact from './components/Contacts'
import PersonForm from './components/PersonForm';
import ContactList from './components/ContactList';
import Filter from './components/Filter';
import {useState, useEffect} from 'react'
import axios from 'axios'
import contactService from './services/contacts'


const App = () =>{
  console.log("print from App component")
 
  const [contacts,setContacts] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [searchName,setNewSearchName] = useState('')
  const [contactsToShow, setContactsToShow] = useState(contacts)

  //onClick handler to delete contact and the associated 
  //phone number
  const removeContact = (id) =>{
    //TODO: use contactService to delete particular contact as 
    //specified by the id that is passed to this function
    if (window.confirm("Do you really wanna delete this contact"))
    contactService
      .deleteNote(id)
      .then(response => {
        console.log(`Deleted post with ID ${id}`);
        //rerender page with another call to contact service
        // this probably a function on its own but for time sake we can do this until
        contactService 
        .getAll()
        .then(initalContacts => {
          setContacts(initalContacts)
          setContactsToShow(initalContacts)
        })

      })
      .catch(error => {
        console.error(error);
      });
      

  }

  //using the effect
  useEffect(() => {
    contactService
    .getAll()
    .then(initalContacts => {
      setContacts(initalContacts)
      setContactsToShow(initalContacts)
    })
  },[])
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
      <ContactList
       contactsToShow={contactsToShow}
        removeContact={removeContact}
        />
    </div>
  )
}

export default App;
