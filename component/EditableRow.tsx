import React from "react";

const EditableRow = ({
  editFormData,
  handleEditFormChange,
  handleCancelClick,
  handleFinihedForm,
}) => {
  return (
    <tr>
      <td>
        <input
          type="text"
          required="required"
          placeholder="Enter a title..."
          name="title"
          value={editFormData.title}
          onChange={handleEditFormChange}
        ></input>
      </td>
      <td>
        <input
          type="text"
          required="required"
          placeholder="Enter a Services"
          name="services"
          value={editFormData.services}
          onChange={handleEditFormChange}
        ></input>
      </td>
      <td>
        <input
          type="text"
          required="required"
          placeholder="Enter a Message"
          name="note"
          value={editFormData.note}
          onChange={handleEditFormChange}
        ></input>
      </td>
      <td>
        <input
          type="text"
          name="status"
          required="required"
          value={editFormData.status}
          disabled={true}
          onChange={handleEditFormChange}
        ></input>
      </td>
      <td>
        <button className="savebut" type="submit">
          Save
        </button>
        <button onClick={handleCancelClick} className="cancelbut" type="button">
          Cancel
        </button>
        <button
          className="finishbut"
          type="button"
          onClick={() => handleFinihedForm(editFormData.id)}
        >
          Finished
        </button>
      </td>
    </tr>
  );
};

export default EditableRow;
