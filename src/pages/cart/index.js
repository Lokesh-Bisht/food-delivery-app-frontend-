import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import EmptyCart from "../../components/emptyCart";
import Footer from "../../components/footer";
import PropTypes from "prop-types";
import Logo from "../../components/logo";
import Menu from "../../components/menu";
import {
  selectCartItems,
  selectCartItemsCount,
  selectCartTotal,
} from "../../redux/cart/cartSelector";
import { Header, Orders, OrdersMenu } from "./styles";

const Cart = ({ cartCount, cartList, cartTotal }) => {
  return (
    <div>
      <Header>
        <Logo />
      </Header>
      {cartCount === 0 ? (
        <EmptyCart />
      ) : (
        <Orders>
          <h1>Your Orders</h1>
          <OrdersMenu>
            <Menu list={cartList} />
          </OrdersMenu>
          <h3>Your Total &#8377;{cartTotal}</h3>
        </Orders>
      )}
      <Footer />
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  cartCount: selectCartItemsCount,
  cartList: selectCartItems,
  cartTotal: selectCartTotal,
});

Cart.propTypes = {
  cartCount: PropTypes.number,
  cartList: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
      info: PropTypes.string,
      price: PropTypes.number,
      image: PropTypes.string,
    })
  ),
  cartTotal: PropTypes.number,
};

export default connect(mapStateToProps)(Cart);
