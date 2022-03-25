import React from "react";

export function ContactList({ filter, onFilterContact }) {
  return (
    <>
      <h2>Contacts</h2>

      <label>
        Find contacts by name
        <br />
        <input
          type="text"
          name="name"
          required
          value={filter}
          onChange={onFilterContact}
        />
      </label>
    </>
  );
}
