import React, { useRef } from "react";
import Banner from "../banner";
import CartCountButton from "../cartCount";
import Footer from "../footer";
import Menu from "../menu";
import { menuItemsData } from "../menu/data";

const Home = () => {
  const menuRef = useRef();

  const handleScrollMenu = () => {
    menuRef.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div>
      <Banner handleScrollMenu={handleScrollMenu} />
      <Menu list={menuItemsData} ref={menuRef} />
      <Footer />
      <CartCountButton />
    </div>
  );
};

export default Home;
