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
  width: "50%",

  color: theme.palette.text.secondary,
}));

const CreateCategory = ({ cate, setcate }) => {
  //useState for input
  const [Value, setValue] = useState("");

  const InputEventCat = (event) => {
    setValue(event.target.value);
  };

  const listsubmit = (event) => {
    event.preventDefault();
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
      <Stack
        sx={{
          ml: "30%",
        }}
      >
        <form onSubmit={listsubmit}>
          <Item>
            <Typography>New Category</Typography>
          </Item>
          <Item>
            <TextField
              id="CategoryName"
              label="Category Name"
              value={Value}
              required
              sx={{
                width: "100%",
              }}
              onChange={InputEventCat}
            />
          </Item>

          <Button
            type={"submit"}
            variant="outlined"
            sx={{
              marginLeft: 2,
            }}
          >
            Submit Category
          </Button>
        </form>

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
      </Stack>
    </div>
  );
};

export default CreateCategory;
