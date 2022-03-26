import React from "react";
import PropTypes from "prop-types";

export function ContactRender({ contacts, handleDelete, filteredContacts }) {
  console.log(contacts)
  console.log(filteredContacts)
  const result = filteredContacts.length ? filteredContacts : contacts
  return (
    <>
      <ul>
        {result.map((item) => (
          <li key={item.id}>
            {item.name}: {item.number}{" "}
            <button onClick={handleDelete} value={item.id}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </>
  );
}

ContactRender.propTypes = {
  contacts: PropTypes.array,
};
