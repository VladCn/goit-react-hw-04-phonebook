import React, { useEffect, useState } from "react";
import { ContactList } from "./ContactList";
import { Phonebook } from "./Phonebook";
import { ContactRender } from "./ContactRender";
import shortid from "shortid";
import { loadFromLocalStorage, saveToLocalStorage } from "utils";

const KEY = "contacts"

export function App() {
  const [contacts, setContacts] = useState([])
  const [filter, setFilter] = useState("")
  const [filteredContacts, setFilteredContacts] = useState([])

useEffect(() => {
  const localArray = loadFromLocalStorage(KEY);

  setContacts(localArray);
},[])

  useEffect(() => {
    const filteredContacts = contacts?.filter((item) => {
      return item?.name?.includes(filter);
    });
    setFilteredContacts(filteredContacts)
  },[contacts, filter])

  const handleDelete = (event) => {
    console.log(event.target.value);
    const newContacts = contacts.filter((value) => value.id !== event.target.value)
    setContacts(newContacts)
    saveToLocalStorage(KEY, newContacts)
  };

  const handleFilterContact = (event) => {
    event.preventDefault();
    setFilter(event.target.value)
  };

  const handleSubmit = (data) => {
    const res = contacts.map((item) => {
      return item.name;
    });

    if (res.includes(data.name)) {
      return alert(`${data.name} is already in contacts`);
    } else {
      const newContacts = [
        ...contacts,
        {
          name: data.name,
          number: data.number,
          id: shortid.generate(),
        },
      ];
      setContacts(newContacts);
      console.log(newContacts)
      saveToLocalStorage(KEY, newContacts)
    }

}

    return (
      <div
        style={{
          height: "100vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          // alignItems: "center",
          marginLeft: "50px",
          // fontSize: 40,
          // textTransform: "uppercase",
          color: "#010101",
        }}
      >
        <h2>Phonebook</h2>
        <Phonebook onSubmit={handleSubmit} />

        <ContactList
          onFilterContact={handleFilterContact}
          filter={filter}
        />

        <ContactRender
          contacts={contacts}
          filteredContacts={filteredContacts}
          handleDelete={handleDelete}
        />
      </div>
    )

}
