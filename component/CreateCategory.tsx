import React, { useState } from "react";
import Paper from "@material-ui/core/Paper";
import Stack from "@mui/material/Stack";
import { styled } from "@mui/material/styles";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import List from "@material-ui/core/List";
import Typography from "@mui/material/Typography";
import CategoryList from "./CategoryList";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

toast.configure();
const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography,
  padding: theme.spacing(0),
  margin: 16,
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const CreateCategory = ({ cate, setcate }) => {
  const [Value, setValue] = useState("");

  const InputEventCat = (event) => {
    setValue(event.target.value);
  };

  const listsubmit = () => {
    toast.success("Category Successfully Created", {
      position: toast.POSITION.BOTTOM_RIGHT,
      autoClose: 1500,
    });
    setcate((olditem) => {
      return [...olditem, Value];
    });
    setValue("");
  };
  const deleteItems = (id) => {
    toast.info("Category Successfully Deleted", {
      position: toast.POSITION.BOTTOM_RIGHT,
      autoClose: 3000,
    });
    setcate((olditems) => {
      return olditems.filter((arrElem, index) => {
        return index !== id;
      });
    });
  };
  return (
    <div>
      <Stack>
        <Item>
          <Typography>New Category</Typography>
        </Item>

        <Item>
          <TextField
            id="CategoryName"
            label="Category Name"
            sx={{ width: "100%" }}
            value={Value}
            onChange={InputEventCat}
          />
        </Item>
        <Item>
          <Button
            variant="outlined"
            sx={{ width: "100%" }}
            onClick={listsubmit}
          >
            Submit Category
          </Button>
        </Item>
      </Stack>

      <div>
        <Item>
          <Typography>Categories</Typography>

          <List>
            {cate.length >= 1 ? (
              cate.map((cateval, index) => {
                return (
                  <CategoryList
                    text={cateval}
                    id={index}
                    key={index}
                    onSelect={deleteItems}
                  />
                );
              })
            ) : (
              <Typography>No Categories Found</Typography>
            )}
          </List>
        </Item>
      </div>
    </div>
  );
};

export default CreateCategory;
