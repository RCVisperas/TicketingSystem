import React, { useState, Fragment } from "react";
import ReadOnlyRow from "./ReadOnlyRow";
import EditableRow from "./EditableRow";
import Table from "@mui/material/Table";
import Typography from "@mui/material/Typography";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import TextField from "@mui/material/TextField";
const ListItem = ({ ticket, setticket }) => {
  const [EditTicketId, setEditTicketID] = useState(null);
  const [editFormData, seteditFormData] = useState({
    title: "",
    services: "",
    note: "",
    status: "",
  });
  const [search, setsearch] = useState("");
  //getting
  const handleEditClick = (event, ticket) => {
    event.preventDefault();
    setEditTicketID(ticket.id);
    const formValues = {
      title: ticket.title,
      services: ticket.services,
      note: ticket.note,
      status: ticket.status,
    };
    seteditFormData(formValues);
  };
  //setting
  const handleEditFormChange = (event) => {
    event.preventDefault();
    const fieldName = event.target.name;
    const fieldValue = event.target.value;

    const newFormData = {
      ...editFormData,
    };
    newFormData[fieldName] = fieldValue;
    seteditFormData(newFormData);
  };
  //saving
  const handleEditForm = (event) => {
    event.preventDefault();

    const editedTicket = {
      id: EditTicketId,
      title: editFormData.title,
      services: editFormData.services,
      note: editFormData.note,
      status: editFormData.status,
    };
    const newTicketedit = [...ticket];
    const index = ticket.findIndex((ticket) => ticket.id == EditTicketId);
    newTicketedit[index] = editedTicket;
    setticket(newTicketedit);
    setEditTicketID(null);
  };
  //saving
  const handleFinihedForm = (event) => {
    event.preventDefault();
    const editedTicket1 = {
      id: EditTicketId,
      title: editFormData.title,
      services: editFormData.services,
      note: editFormData.note,
      status: "Finished",
    };
    const newTicketedit = [...ticket];
    const index = ticket.findIndex((ticket) => ticket.id == EditTicketId);
    newTicketedit[index] = editedTicket1;
    setticket(newTicketedit);
    setEditTicketID(null);
  };
  const handleDeleteClick = (event, Id) => {
    event.preventDefault();
    const newTickets = [...ticket];

    const index = ticket.findIndex(() => ticket.id === Id);

    newTickets.splice(index, 1);

    setticket(newTickets);
  };
  //cancel the edit process
  const handleCancelClick = () => {
    setEditTicketID(null);
  };

  return (
    <div className="app-container">
      <form onSubmit={handleEditForm}>
        <TextField
          type="text"
          placeholder="Search a ticket title..."
          onChange={(e) => {
            setsearch(e.target.value);
          }}
        ></TextField>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
            <TableHead>
              <TableRow>
                <TableCell>Title</TableCell>
                <TableCell>Services</TableCell>
                <TableCell>Message</TableCell>
                <TableCell>Status</TableCell>
                <TableCell sx={{ width: 200 }}>Actions</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {ticket
                .filter((ticket) => {
                  if (search == "") {
                    return ticket;
                  } else if (
                    ticket.title.toString().includes(search.toString())
                  ) {
                    return ticket;
                  }
                })
                .map((tickets, index) => (
                  <Fragment key={index}>
                    {EditTicketId == tickets.id ? (
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
            </TableBody>
          </Table>
        </TableContainer>
      </form>
    </div>
  );
};

export default ListItem;
