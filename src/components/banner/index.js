import React from "react";
import PropTypes from "prop-types";
import { ContentMain, Header, HeaderContent, HeaderImage } from "./styles";
import bannerImage from "../../assets/banner.png";
import Logo from "../logo/index";
import Button from "@mui/material/Button";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";

const Banner = ({ handleScrollMenu }) => {
  return (
    <Header>
      <HeaderContent>
        <Logo />
        <ContentMain>
          <h1>Delicious food for your cravings</h1>
          <p>We made fresh and healthy meals with different recepies.</p>
          <Button
            variant="contained"
            endIcon={<ArrowRightAltIcon />}
            onClick={handleScrollMenu}
          >
            View Menu
          </Button>
        </ContentMain>
      </HeaderContent>
      <HeaderImage src={bannerImage} />
    </Header>
  );
};

Banner.propTypes = {
  handleScrollMenu: PropTypes.func,
};

export default Banner;
