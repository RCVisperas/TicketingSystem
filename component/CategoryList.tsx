import React from "react";
import ListItem from "@material-ui/core/ListItem";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";
const CategoryList = ({ text, onSelect, id }) => {
  return (
    <div>
      <ListItem>
        <IconButton
          edge="end"
          aria-label="delete"
          onClick={() => {
            onSelect(id);
          }}
        >
          <DeleteIcon />
        </IconButton>
        {text}
      </ListItem>
    </div>
  );
};
export default CategoryList;
