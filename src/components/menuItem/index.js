import React from "react";
import PropTypes from "prop-types";
import "./styles";
import {
  Item,
  ItemImage,
  ItemContentHeader,
  ItemContentFooter,
} from "./styles";
import Box from "@mui/system/Box";
import AddRemoveItemButton from "../addRemoveItemButton";

const MenuItem = ({ item }) => {
  const { name, info, price, image } = item;
  return (
    <Item>
      <ItemImage src={image} alt="item" />
      <ItemContentHeader>
        <Box
          component="p"
          sx={{
            fontWeight: "600",
            fontSize: "1rem",
            textTransform: "capitalize",
            flex: "1",
          }}
        >
          {name}
        </Box>
        <Box component="p" sx={{ fontSize: "1rem", color: "#a0a0a0" }}>
          <small>{info}</small>
        </Box>
      </ItemContentHeader>
      <ItemContentFooter>
        <Box component="span" sx={{ fontWeight: "700" }}>
          &#8377;{price}
        </Box>
        <AddRemoveItemButton quantity={100} />
      </ItemContentFooter>
    </Item>
  );
};

MenuItem.propTypes = {
  item: PropTypes.object,
  id: PropTypes.number,
  name: PropTypes.string,
  info: PropTypes.string,
  price: PropTypes.number,
  image: PropTypes.string,
};

export default MenuItem;
