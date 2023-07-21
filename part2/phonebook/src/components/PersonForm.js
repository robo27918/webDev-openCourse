
import axios from 'axios'
import contactService from '../services/contacts'
const PersonForm = ({setContacts,contacts,newName,setNewName,newNumber,setNewNumber,setContactsToShow})=>
{   
    console.log("from PersonForm...")
    const getNames = (contacts)=>
    {
    var nameArray = [];
    for (var key in contacts)
        nameArray.push(contacts[key].name)
    return nameArray
    }
    const contactAlreadyExists= (contacts ,searchVal) =>
    {

        console.log("from contactAlreadyExists...")
        let names = getNames(contacts)
        return names.includes(searchVal)
    }


    const addContact = (event) => {
        event.preventDefault()
    

        if (contactAlreadyExists(contacts, newName)){
        
            alert(newName + " has already been added...")
        }
        else{
             console.log("inside else....")
            const nameObject ={
                id: contacts.length +1,
                name: newName,
                number: newNumber,
            }

            contactService
                .create(nameObject)
                .then(returnedContact => {
                    
                    setContacts(contacts.concat(returnedContact))
                    setContactsToShow(contacts.concat(returnedContact))
                    setNewName('')
                    setNewNumber('')
                })
            /** 
            axios
                .post('http://localhost:3007/persons', nameObject)
                .then(response => {
                    contacts.concat(nameObject)
                    setContacts(contacts.concat(nameObject))
                    setContactsToShow(contacts.concat(nameObject))
                    setNewName('')
                    setNewNumber('')

                })**/
                /**
                 *  previous incarnation without saving the data to the backend server...
                 *  
                 * contacts.concat(nameObject)
                    setContacts(contacts.concat(nameObject))
                    setContactsToShow(contacts.concat(nameObject))
                    setNewName('')
                    setNewNumber('')
                 * 
                 */


            console.log("from PersonForm",contacts)
        }
    }
  
    const handleContactChange=(event)=>
    {
        console.log(event.target.value)
        setNewName(event.target.value)
    }
    const handleNumberChange=(event)=>
    {
      console.log(event.target.value)
      setNewNumber(event.target.value)
    }
    return(
        <form onSubmit={addContact}>
            <div>
                name: <input value={newName} onChange={handleContactChange}></input>
            </div>
            <div>
                number: <input value={newNumber} onChange={handleNumberChange}></input>
            </div>
            <div>
                <button type="submit">add</button>
            </div>
            
        </form>

    )
}
export default PersonForm