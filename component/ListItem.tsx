import React, { useState, Fragment } from "react";
import ReadOnlyRow from "./ReadOnlyRow";
import EditableRow from "./EditableRow";

const ListItem = ({ ticket, setticket }) => {
  const handleDeleteClick = (contactId) => {
    const newContacts = [...ticket];

    const index = ticket.findIndex((ticket) => ticket.id === contactId);

    newContacts.splice(index, 1);

    setticket(newContacts);
  };
  const [EditContactId, setEditContactID] = useState(null);
  const handleEditClick = (event, ticket) => {
    event.preventDefault();
    setEditContactID(ticket.id);
    const formValues = {
      title: ticket.title,
      services: ticket.services,
      note: ticket.note,
      status: ticket.status,
    };
    seteditFormData(formValues);
  };
  const [editFormData, seteditFormData] = useState({
    title: "",
    services: "",
    note: "",
    status: "",
  });

  const handleEditFormChange = (event) => {
    event.preventDefault();
    const fieldName = event.target.getAttribute("name");
    const fieldValue = event.target.value;

    const newFormData = {
      ...editFormData,
    };
    newFormData[fieldName] = fieldValue;
    seteditFormData(newFormData);
  };
  const handleEditForm = (event) => {
    event.preventDefault();

    const editedTicket = {
      id: EditContactId,
      title: editFormData.title,
      services: editFormData.services,
      note: editFormData.note,
      status: editFormData.status,
    };
    const newTicketedit = [...ticket];
    const index = ticket.findIndex((ticket) => ticket.id == EditContactId);
    newTicketedit[index] = editedTicket;
    setticket(newTicketedit);
    setEditContactID(null);
  };

  const handleFinihedForm = (event) => {
    const editedTicket1 = {
      id: EditContactId,
      title: editFormData.title,
      services: editFormData.services,
      note: editFormData.note,
      status: "Finished",
    };
    const newTicketedit = [...ticket];
    const index = ticket.findIndex((ticket) => ticket.id == EditContactId);
    newTicketedit[index] = editedTicket1;
    setticket(newTicketedit);
    setEditContactID(null);
  };
  const handleCancelClick = () => {
    setEditContactID(null);
  };
  return (
    <div className="app-container">
      <form onSubmit={handleEditForm}>
        <table>
          <thead>
            <tr>
              <th>Title</th>
              <th>Services</th>
              <th>Message</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {ticket.map((tickets, index) => (
              <Fragment key={index}>
                {EditContactId == tickets.id ? (
                  <EditableRow
                    editFormData={editFormData}
                    handleEditFormChange={handleEditFormChange}
                    handleFinihedForm={handleFinihedForm}
                    handleCancelClick={handleCancelClick}
                  />
                ) : (
                  <ReadOnlyRow
                    tickets={tickets}
                    handleEditClick={handleEditClick}
                    handleDeleteClick={handleDeleteClick}
                  />
                )}
              </Fragment>
            ))}
          </tbody>
        </table>
      </form>
    </div>
  );
};

export default ListItem;
