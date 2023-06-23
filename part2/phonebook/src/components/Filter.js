const Filter =({contacts,setContactsToShow,setNewSearchName,searchName})=>
{

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
    const handleFilterChange = (event) =>
    {
      console.log("inside handleFilterChange",event.target.value)
      console.log("event value:",event.target.value)
      setNewSearchName(event.target.value)
      //console.log("searchName after then", event)
  
      if(contactAlreadyExists(contacts,event.target.value)){
        let contactsFilter= contacts.filter(contact => {
          console.log("in contactsFiler...",contact.name, event.target.value)
          return contact.name.toLowerCase() === event.target.value.toLowerCase();
        })
        
        console.log("contacts..",contacts)
        console.log("yo...",contactsFilter)
        setContactsToShow(contactsFilter)
      }
      else{
        setContactsToShow(contacts)
      }
    }
    return(
    <form> 
    <div>
      filter shown with: <input value={searchName} onChange={handleFilterChange}></input>
    </div>
   </form>)
}
export default Filter