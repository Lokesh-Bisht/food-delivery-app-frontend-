import React from "react";
import PropTypes from "prop-types";
import { CartCount, CartCountButtonWrapper } from "./styles";
import IconButton from "@mui/material/IconButton";
import CartIcon from "@mui/icons-material/ShoppingCart";
import { useNavigate } from "react-router-dom";
import { createStructuredSelector } from "reselect";
import { selectCartItemsCount } from "../../redux/cart/cartSelector";
import { connect } from "react-redux";

const CartCountButton = ({ cartCount }) => {
  const navigate = useNavigate();

  const handleCartButtonClick = () => {
    navigate("/cart");
  };

  return (
    <CartCountButtonWrapper>
      <CartCount>{cartCount >= 100 ? "99+" : cartCount}</CartCount>
      <IconButton
        sx={{ transform: "rotate(-45deg)" }}
        onClick={handleCartButtonClick}
      >
        <CartIcon sx={{ color: "white" }} />
      </IconButton>
    </CartCountButtonWrapper>
  );
};

const mapStateToProps = createStructuredSelector({
  cartCount: selectCartItemsCount,
});

CartCountButton.propTypes = {
  cartCount: PropTypes.number,
};

export default connect(mapStateToProps)(CartCountButton);
