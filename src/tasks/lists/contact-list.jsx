import TaskInfo from '../../components/TaskInfo.jsx';

const description = "A contacts list showing name, phone, and email, with the ability to remove a contact.";

const requirements = [
  "Render contacts from state",
  "Remove a contact by id",
  "Add a new contact via a small form"
];
import { useState } from 'react';

export default function ContactList() {

  const [addButtonClicked, setAddButtonClicked] = useState(false);
  const [contactList, setContactList] = useState([]);
  const [formData, setFormData] = useState({
    name : "",
    phone : "",
    email : ""
  })
  const [contactShowHideButton, setContactShowHideButton] = useState("SHOW ALL CONTACTS")

  function changeAddButtonClicked() {
    if(addButtonClicked) {
      setAddButtonClicked(false)
    }
    else {
      setAddButtonClicked(true);
    }
  }
  function changeFormData(event) {
    const {name, value} = event.target;
    setFormData({
      ...formData,
      [name] : value
    })
  }
  function addContactToList(event) {
    event.preventDefault();
    setContactList([
      ...contactList,
      {
      id : Date.now(),
      ...formData
      }
    ])
    setFormData({
      name : "",
      phone : "",
      email : ""
    })
  }
  function changeContactShowHideButton() {
    if(contactShowHideButton === "SHOW ALL CONTACTS") {
      setContactShowHideButton("HIDE CONTACTS")
    }
    else {
      setContactShowHideButton("SHOW ALL CONTACTS")
    }
  }
  function removeContact(idToDelete) {
    setContactList(contactList.filter((item => item.id != idToDelete)))
  }
  
  return (
    <div className="task-page">
      <TaskInfo
        title="Contact List"
        description={description}
        requirements={requirements}
        filePaths={["src/tasks/lists/contact-list.jsx"]}
      />
      <div className="task-workspace">
        <button onClick={changeAddButtonClicked}>ADD NEW CONTACT</button>
        {
          addButtonClicked &&
          <form onSubmit={addContactToList} style={{display : "flex", flexDirection : "column", gap : "15px", margin : "10px", border : "1px solid white", padding : "15px", borderRadius : "20px"}}>
            <label> Enter Your Name :-
              <input type='text' name='name' value={formData.name} onChange={changeFormData}></input>
            </label>
            <label> Enter Your Phone :-
              <input type='number' name='phone' value={formData.phone} onChange={changeFormData} maxLength={10}></input>
            </label>
            <label> Enter Your Email :-
              <input type='email' name='email' value={formData.email} onChange={changeFormData}></input>
            </label>
            <button type='submit'>ADD</button>
          </form> 
          
        }

        <button style={{display : "block", marginTop : "20px"}} onClick={changeContactShowHideButton}>{contactShowHideButton}</button>
        {
          contactShowHideButton === "HIDE CONTACTS" &&
          <div>
            {contactList.map((contact, index) => (
              <div key={index}>
                <p>Name :- {contact.name}</p>
                <p>Phone :- {contact.phone}</p>
                <p>Email :- {contact.email}</p>
                <button onClick={()=>removeContact(contact.id)}>REMOVE</button>
              </div>
            ))}
          </div>
        }
      </div>
    </div>
  );
}
