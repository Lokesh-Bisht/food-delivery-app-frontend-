import React from "react";
import { LogoContent, LogoImage } from "./styles";
import logoImage from "../../assets/logo.png";

const Logo = () => {
  return (
    <LogoContent>
      <LogoImage src={logoImage} alt="logo" />
      <span>
        <b>Taste</b>
      </span>
    </LogoContent>
  );
};

export default Logo;
