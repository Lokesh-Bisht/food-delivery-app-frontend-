import React, { useRef } from "react";
import Banner from "../../components/banner";
import CartCountButton from "../../components/cartCountButton";
import Footer from "../../components/footer";
import Menu from "../../components/menu";
import { menuItemsData } from "../../components/menu/data";

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
      <CartCountButton cartCount={100} />
    </div>
  );
};

export default Home;
