import React, { useState } from "react";
import { FormControl } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

function AddContact({ handleClose, show, handleAddContact }) {
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [contact, setContact] = useState("");
  const [gmail, setGmail] = useState("");
  console.log(name, surname, contact, gmail);
  function handleAdd() {
    if (!name || !surname || !contact || !gmail) {
      alert("some inouts are empty");
      return;
    }
    let newObj = {
      name,
      surname,
      contact,
      gmail,
      id: Date.now(),
    };
    handleAddContact(newObj);
    setName("");
    setSurname("");
    setContact("");
    setGmail("");
    handleClose();
  }
  return (
    <>
      <Modal show={show} onHide={handleClose} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title> Add Contact Book</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <FormControl
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="name"
            className="my-3"
          />
          <FormControl
            value={surname}
            onChange={(e) => setSurname(e.target.value)}
            placeholder="surname"
            className="my-3"
          />
          <FormControl
            value={contact}
            onChange={(e) => setContact(e.target.value)}
            placeholder="contact number"
            className="my-3"
          />
          <FormControl
            value={gmail}
            onChange={(e) => setGmail(e.target.value)}
            placeholder="gmail"
            className="my-3"
          />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="outline-success" onClick={handleAdd}>
            Add
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default AddContact;
