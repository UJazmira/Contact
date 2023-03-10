import React, { useState } from "react";
import AddContact from "./Components/AddContact/AddContact";
import ContactList from "./Components/ContactList/ContactList";
import EditContact from "./Components/EditContact/EditContact";
import Header from "./Components/Header/Header";

const App = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  function handleAddContact(newObj) {
    let newContact = [...contacts];
    newContact.push(newObj);
    setContacts(newContact);
  }
  const [contacts, setContacts] = useState([]);

  // ?delte
  function handleDelete(id) {
    let newContact = contacts.filter((item) => item.id !== id);
    setContacts(newContact);
  }
  // ? edit
  const [showEditModal, setShowEditModal] = useState(false);
  const handleEditClose = () => setShowEditModal(false);
  const handleEditShow = () => setShowEditModal(true);
  const [editedContact, setEditContact] = useState({});
  function handleEdit(id) {
    let obj = contacts.filter((item) => item.id == id);
    setEditContact(obj[0]);
    handleEditShow();
  }
  function handleSave(editedObj) {
    let newContact = contacts.map((item) => {
      if (item.id === editedObj.id) {
        return editedObj;
      }
      return item;
    });
    setContacts(newContact);
    setShowEditModal(false);
  }

  return (
    <div>
      <Header handleShow={handleShow} />
      <AddContact
        handleAddContact={handleAddContact}
        handleClose={handleClose}
        show={show}
      />
      <ContactList
        handleEdit={handleEdit}
        handleDelete={handleDelete}
        contacts={contacts}
      />
      {showEditModal && (
        <EditContact
          handleSave={handleSave}
          editedContact={editedContact}
          showEditModal={showEditModal}
          handleEditClose={handleEditClose}
        />
      )}
    </div>
  );
};

export default App;
