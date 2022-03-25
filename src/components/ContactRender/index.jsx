import React from "react";
import PropTypes from "prop-types";

export function ContactRender({ contacts, handleDelete }) {
  return (
    <>
      <ul>
        {contacts.map((item) => (
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
