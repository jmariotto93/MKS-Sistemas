import { useState } from "react";
import { ButtonCart } from "../ButtonCart/ButtonCart";
import { HeaderContainer, LogoWrapper } from "./styles";
import { Cart } from "../Cart/Cart";

const Header = () => {
  const [isCardModalOpen, setIsCardModalOpen] = useState(false);

  function handleOpenCardModal() {
    setIsCardModalOpen((prev) => !prev);
  }

  return (
    <>
      {isCardModalOpen && <Cart handleOpenCardModal={handleOpenCardModal} />}

      <HeaderContainer>
        <LogoWrapper>
          <span>MKS</span>
          <span>Sistemas</span>
        </LogoWrapper>

        <div className="cart-container">
          <ButtonCart price="0" onClick={handleOpenCardModal} />
        </div>
      </HeaderContainer>
    </>
  );
};

export { Header };
