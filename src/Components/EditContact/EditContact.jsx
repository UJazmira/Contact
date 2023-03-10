import React, { useState } from "react";
import { Button, FormControl, Modal } from "react-bootstrap";

const EditContact = ({
  handleEditClose,
  showEditModal,
  editedContact,
  handleSave,
}) => {
  const [contactToEdit, setContactToEdit] = useState(editedContact);
  const editName = (e) => {
    let newObj = {
      ...contactToEdit,
      name: e.target.value,
    };
    setContactToEdit(newObj);
  };
  const editSurname = (e) => {
    let newObj = {
      ...contactToEdit,
      surname: e.target.value,
    };
    setContactToEdit(newObj);
  };
  const editContact = (e) => {
    let newObj = {
      ...contactToEdit,
      contact: e.target.value,
    };
    setContactToEdit(newObj);
  };
  const editGmail = (e) => {
    let newObj = {
      ...contactToEdit,
      gmail: e.target.value,
    };
    setContactToEdit(newObj);
  };
  return (
    <>
      <Modal show={showEditModal} onHide={handleEditClose}>
        <Modal.Header closeButton>
          <Modal.Title> Edit Contact Book</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <FormControl
            value={contactToEdit.name}
            onChange={editName}
            className="my-3"
          />
          <FormControl
            value={contactToEdit.surname}
            onChange={editSurname}
            className="my-3"
          />
          <FormControl
            value={contactToEdit.contact}
            onChange={editContact}
            className="my-3"
          />
          <FormControl
            value={contactToEdit.gmail}
            onChange={editGmail}
            className="my-3"
          />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleEditClose}>
            Close
          </Button>
          <Button
            variant="outline-success"
            onClick={() => handleSave(contactToEdit)}
          >
            Add
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default EditContact;
