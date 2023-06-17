const Contact = ({contact})=> {
    console.log("From componenet...")
    console.log("contact name", contact.name)
    console.log("contact id", contact.id)
    return (
    <li>{contact.name}</li>)
}
export default Contact