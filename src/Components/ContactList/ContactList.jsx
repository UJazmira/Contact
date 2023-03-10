import React from "react";
import ContactCard from "../ContactCard/ContactCard";

const ContactList = ({ contacts, handleEdit, handleDelete }) => {
  return (
    <div>
      <center style={{ fontSize: "30px", margin: "20px" }}>Contacts</center>
      <div className="d-flex justify-content-between flex-wrap w-75 m-auto">
        {contacts.map((item) => (
          <ContactCard
            key={item.id}
            item={item}
            handleDelete={handleDelete}
            handleEdit={handleEdit}
          />
        ))}
      </div>
    </div>
  );
};

export default ContactList;
