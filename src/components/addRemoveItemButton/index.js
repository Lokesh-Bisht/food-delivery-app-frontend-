import React from "react";
import PropTypes from "prop-types";
import { AddRemoveButton, QuantityNegative, QuantityPositive } from "./styles";
import IconButton from "@mui/material/IconButton";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";

const AddRemoveItemButton = ({ quantity, handleAddItem, handleRemoveItem }) => {
  return (
    <AddRemoveButton>
      {quantity !== 0 ? (
        <QuantityPositive>
          <IconButton aria-label="remove" onClick={handleRemoveItem}>
            <RemoveIcon />
          </IconButton>
          <span>{quantity}</span>
          <IconButton aria-label="add" onClick={handleAddItem}>
            <AddIcon />
          </IconButton>
        </QuantityPositive>
      ) : (
        <QuantityNegative>
          <IconButton aria-label="add" onClick={handleAddItem}>
            <AddIcon />
          </IconButton>
        </QuantityNegative>
      )}
    </AddRemoveButton>
  );
};

AddRemoveItemButton.propTypes = {
  quantity: PropTypes.number,
  handleAddItem: PropTypes.func,
  handleRemoveItem: PropTypes.func,
};

export default AddRemoveItemButton;
