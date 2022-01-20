import React, { useState } from "react";
import Paper from "@material-ui/core/Paper";
import Stack from "@mui/material/Stack";
import { styled } from "@mui/material/styles";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import ListItemText from "@mui/material/ListItemText";
import Select, { SelectChangeEvent } from "@mui/material/Select";

toast.configure();
const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography,
  padding: theme.spacing(0),
  margin: 16,
  textAlign: "center",

  width: "50%",

  color: theme.palette.text.secondary,
}));

const TicketComponent = ({ cate, ticketing, setticketing }) => {
  const ITEM_HEIGHT = 48;
  const ITEM_PADDING_TOP = 8;
  const MenuProps = {
    PaperProps: {
      style: {
        maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
        width: 250,
      },
    },
  };
  const [Tick, setTick] = useState("");
  const [Messages, setMessage] = useState("");
  const InputTick = (event) => {
    event.preventDefault();
    setTick(event.target.value);
  };
  const InputMessage = (event) => {
    event.preventDefault();
    setMessage(event.target.value);
  };

  const [Service, setService] = React.useState<string[]>([]);

  const handleChange = (event: SelectChangeEvent<typeof Service>) => {
    const {
      target: { value },
    } = event;
    setService(
      // On autofill we get a stringified value.
      typeof value === "string" ? value.split(" ") : value
    );
  };

  function handleSubmit(event) {
    event.preventDefault();
    toast.success("Ticket Successfully Created", {
      position: toast.POSITION.BOTTOM_RIGHT,
      autoClose: 1500,
    });
    const newTicket = {
      id: new Date().getTime().toString(),
      title: Tick,
      services: Service.toString().split(" "),
      note: Messages,
      status: "Pending",
    };

    setticketing([...ticketing].concat(newTicket));
    setTick("");
    setMessage("");
  }
  return (
    <div>
      <Stack
        sx={{
          ml: "30%",
        }}
      >
        <Item>
          <Typography>New Ticket</Typography>
        </Item>
        <form onSubmit={handleSubmit}>
          <Item>
            <TextField
              id="TicketTitle"
              label="Ticket Title"
              sx={{
                width: "100%",
              }}
              required
              value={Tick}
              onChange={InputTick}
            />
          </Item>
          <Item>
            <FormControl sx={{ width: "100%" }}>
              <InputLabel id="demo-multiple-checkbox-label">
                Services
              </InputLabel>
              <Select
                labelId="demo-multiple-checkbox-label"
                id="demo-multiple-checkbox"
                multiple
                value={Service}
                required
                onChange={handleChange}
                input={<OutlinedInput label="SERVICES" />}
                renderValue={(selected) => selected.join(", ")}
                MenuProps={MenuProps}
              >
                {cate.map((cateval, index) => (
                  <MenuItem key={index} value={cateval}>
                    <ListItemText>
                      <Typography>{cateval}</Typography>
                    </ListItemText>
                  </MenuItem>
                ))}
              </Select>
            </FormControl>

            <TextField
              id="outlined-multiline-static"
              label="Message"
              multiline
              required
              rows={4}
              sx={{
                width: "100%",
                marginTop: "5px",
              }}
              value={Messages}
              onChange={InputMessage}
            />
          </Item>

          <Button
            variant="outlined"
            type={"submit"}
            sx={{
              marginLeft: 2,
            }}
          >
            Submit Ticket
          </Button>
        </form>
      </Stack>
    </div>
  );
};

export default TicketComponent;
