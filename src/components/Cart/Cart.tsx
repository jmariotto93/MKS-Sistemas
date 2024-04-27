import { IoMdCloseCircle } from "react-icons/io";
import { CartContainer, TitleCart } from "./styles";
import { CardList } from "../../interfaces/CartList";
import { CartItem } from "../CartItem/CartItem";

interface CartProps {
  handleOpenCardModal(): void;
  cardItems: CardList[] | undefined;
  setcardItems: React.Dispatch<React.SetStateAction<CardList[] | []>>;
}

export const Cart: React.FC<CartProps> = ({
  handleOpenCardModal,
  cardItems,
  setcardItems,
}) => {
  function handleDeleteItemFromCard(productId: number) {
    const result =
      cardItems?.filter((product) => product.id !== productId) || [];

    setcardItems(result);
  }

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
        style={{ overflow: "auto", height: "57vh", marginRight: 24 }}
      >
        {cardItems?.map((card, index) => (
          <CartItem
            handleDeleteItemFromCard={handleDeleteItemFromCard}
            key={`${card.id}${index}`}
            card={card}
          />
        ))}

        {cardItems?.length === 0 && <p>Nenhum item no carrinho</p>}
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          paddingLeft: 47,
          paddingRight: 60,
        }}
      >
        <span>Total</span>

        <span>teste</span>
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
          cursor: "pointer",
        }}
      >
        Finalizar compra
      </div>
    </CartContainer>
  );
};
