import Contact from "./Contacts"
const ContactList =({contactsToShow}) =>
{
    return(
        <ul>
        {contactsToShow.map(contact=> <Contact key={contact.id} contact={contact}/>)}
      </ul>
    )
}
export default ContactList