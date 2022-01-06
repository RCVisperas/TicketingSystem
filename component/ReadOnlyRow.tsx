import React from "react";
const ReadOnlyRow = ({ key, tickets, handleEditClick, handleDeleteClick }) => {
  return (
    <tr key={key}>
      <td>{tickets.title}</td>
      <td>{tickets.services}</td>
      <td>{tickets.note}</td>
      {tickets.status.toString() === "Pending" ? (
        <td className="texttd1">{tickets.status}</td>
      ) : (
        <td className="texttd">{tickets.status}</td>
      )}
      <td>
        <button
          className="editbut"
          type="button"
          onClick={(event) => handleEditClick(event, tickets)}
        >
          Edit
        </button>
        <button
          className="deletebut"
          type="button"
          onClick={() => handleDeleteClick(tickets.id)}
        >
          Delete
        </button>
      </td>
    </tr>
  );
};

export default ReadOnlyRow;
