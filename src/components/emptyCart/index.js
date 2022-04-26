import React from "react";
import Button from "@mui/material/Button";
import BackIcon from "@mui/icons-material/ArrowBack";
import emptyCartImage from "../../assets/emptyCart.png";
import { EmptyCartWrapper, EmptyCartImage } from "./styles";
import { useNavigate } from "react-router-dom";

const EmptyCart = () => {
  const navigate = useNavigate();

  const handleBackButtonClick = () => {
    navigate("/");
  };

  return (
    <EmptyCartWrapper>
      <EmptyCartImage src={emptyCartImage} alt="empty cart" />
      <Button
        aria-label="back"
        variant="contained"
        startIcon={<BackIcon />}
        onClick={handleBackButtonClick}
      >
        Add Items To Cart
      </Button>
    </EmptyCartWrapper>
  );
};

export default EmptyCart;
