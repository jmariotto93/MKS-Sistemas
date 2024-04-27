import { IoMdCloseCircle } from "react-icons/io";
import { CartContainer, TitleCart } from "./styles";
import { CartItem } from "../CartItem/CartItem";

interface CartProps {
  handleOpenCardModal(): void;
}

export const Cart: React.FC<CartProps> = ({ handleOpenCardModal }) => {
  return (
    <CartContainer>
      <div className="container-title-cart">
        <TitleCart>Carrinho de compras</TitleCart>

        <IoMdCloseCircle
          className="icon-close-cart"
          onClick={handleOpenCardModal}
        />
      </div>

      <div>
        <CartItem />
      </div>
    </CartContainer>
  );
};
