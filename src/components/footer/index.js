import React from "react";
import Logo from "../logo";
import { FooterContent } from "./styles";

const Footer = () => {
  return (
    <FooterContent>
      <p>
        Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
        nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat
        volutpat.
      </p>
      <Logo />
    </FooterContent>
  );
};

export default Footer;
