import { IoMdCloseCircle } from "react-icons/io";
import {
  CartContainer,
  PurchaseButton,
  TitleCart,
  TotalPriceCart,
} from "./styles";
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

    localStorage.setItem("card-products", JSON.stringify(result));

    setcardItems(result);
  }

  const totalPriceArray = cardItems?.map((product) =>
    parseFloat(product.price)
  );

  const totalPriceSum = totalPriceArray?.reduce(
    (prev, current) => current + prev,
    0
  );

  console.log(totalPriceSum);

  const formatoBrasileiro = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  });

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

        {cardItems?.length === 0 && (
          <p className="empty-cart">Nenhum item no carrinho</p>
        )}
      </div>

      <TotalPriceCart>
        <span>Total: </span>
        {/* @ts-expect-error price*/}
        <span>{formatoBrasileiro.format(totalPriceSum)}</span>
      </TotalPriceCart>

      <PurchaseButton>Finalizar compra</PurchaseButton>
    </CartContainer>
  );
};
