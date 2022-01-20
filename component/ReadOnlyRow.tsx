import { TableRow, TableCell } from "@material-ui/core";
import React from "react";
const ReadOnlyRow = ({ key, tickets, handleEditClick, handleDeleteClick }) => {
  return (
    <TableRow key={key}>
      <TableCell>{tickets.title}</TableCell>
      <TableCell>{tickets.services}</TableCell>
      <TableCell>{tickets.note}</TableCell>
      {tickets.status.toString() === "Pending" ? (
        <TableCell className="texttd1">{tickets.status}</TableCell>
      ) : (
        <TableCell className="texttd">{tickets.status}</TableCell>
      )}
      <TableCell>
        <button
          className="editbut"
          onClick={(event) => handleEditClick(event, tickets)}
        >
          Edit
        </button>
        <button
          className="deletebut"
          onClick={() => handleDeleteClick(event, tickets.id)}
        >
          Delete
        </button>
      </TableCell>
    </TableRow>
  );
};

export default ReadOnlyRow;
