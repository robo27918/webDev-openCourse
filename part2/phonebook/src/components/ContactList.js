import Contact from "./Contacts"
const ContactList =({contactsToShow, removeContact}) =>
{
    return(
        <ul>
        {contactsToShow.map(contact=> <Contact key={contact.id} contact={contact} removeContact={()=>removeContact(contact.id)}/>)}
      </ul>
    )
}
export default ContactList