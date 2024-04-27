import { IoMdCloseCircle } from "react-icons/io";
import { CartContainer, TitleCart } from "./styles";
import { CartItem } from "../CartItem/CartItem";

interface CartProps {
  handleOpenCardModal(): void;
}

export const Cart: React.FC<CartProps> = ({ handleOpenCardModal }) => {
  return (
    <CartContainer
      initial={{ opacity: 0, translateX: 486 }}
      animate={{ opacity: 1, scale: 1, translateX: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container-title-cart">
        <TitleCart>Carrinho de compras</TitleCart>

        <IoMdCloseCircle
          className="icon-close-cart"
          onClick={handleOpenCardModal}
        />
      </div>

      <div
        className="custom-scroll"
        style={{ overflow: "auto", height: "60vh", marginRight: 24 }}
      >
        <CartItem />
      </div>

      <div
        style={{
          height: 97,
          width: "100%",
          backgroundColor: "#000",
          position: "absolute",
          bottom: 0,
          fontSize: 28,
          fontWeight: 700,
          color: "#FFFF",
          display: "inline-flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        Finalizar compra
      </div>
    </CartContainer>
  );
};
