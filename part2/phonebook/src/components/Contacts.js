const Contact = ({contact, removeContact})=> {
    
    return (
    <li>
        {contact.name} {contact.number}
        <button onClick={removeContact}>delete</button>
    </li>)
}
export default Contact