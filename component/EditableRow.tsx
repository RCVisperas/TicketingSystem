import React from "react";
import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";

import TextField from "@mui/material/TextField";
const EditableRow = ({
  editFormData,
  handleEditFormChange,
  handleCancelClick,
  handleFinihedForm,
}) => {
  return (
    <TableRow>
      <TableCell>
        <TextField
          type="text"
          required
          placeholder="Enter a title..."
          name="title"
          value={editFormData.title}
          onChange={handleEditFormChange}
        ></TextField>
      </TableCell>
      <TableCell>
        <TextField
          type="text"
          required
          placeholder="Enter a Services"
          name="services"
          value={editFormData.services}
          onChange={handleEditFormChange}
        ></TextField>
      </TableCell>
      <TableCell>
        <TextField
          id="outlined-multiline-static"
          placeholder="Message"
          multiline
          rows={4}
          sx={{
            width: "100%",
            marginTop: "5px",
          }}
          required
          name="note"
          value={editFormData.note}
          onChange={handleEditFormChange}
        ></TextField>
      </TableCell>
      <TableCell>
        <TextField
          type="text"
          name="status"
          required
          value={editFormData.status}
          disabled={true}
          onChange={handleEditFormChange}
        ></TextField>
      </TableCell>
      <TableCell>
        <button className="savebut" type="submit">
          Save
        </button>
        <button onClick={handleCancelClick} className="cancelbut" type="button">
          Cancel
        </button>
        <button
          className="finishbut"
          type="button"
          onClick={() => handleFinihedForm(event, editFormData.id)}
        >
          Finished
        </button>
      </TableCell>
    </TableRow>
  );
};

export default EditableRow;
