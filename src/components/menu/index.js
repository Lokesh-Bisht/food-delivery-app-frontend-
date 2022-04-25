import React from "react";
import PropTypes from "prop-types";
import MenuItem from "../menuItem";
import "./styles";
import ContentMain from "./styles";

const Menu = React.forwardRef(({ list }, ref) => (
  <ContentMain ref={ref}>
    {list.map((item) => (
      <MenuItem key={item.id} item={item} />
    ))}
  </ContentMain>
));

Menu.displayName = "Menu";

Menu.propTypes = {
  list: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
      info: PropTypes.string,
      price: PropTypes.number,
      image: PropTypes.string,
    })
  ),
};

export default Menu;
