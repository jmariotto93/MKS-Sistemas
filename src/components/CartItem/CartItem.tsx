import { useState } from "react";
import { CardList } from "../../interfaces/CartList";
import { ButtonDeleteItemFromCard, CartList } from "./styles";

interface CardItemProps {
  card: CardList;
  handleDeleteItemFromCard(productId: number): void;
  setTotalPriceSumState: React.Dispatch<React.SetStateAction<number>>;
}

export const CartItem = ({
  card,
  handleDeleteItemFromCard,
  setTotalPriceSumState,
}: CardItemProps) => {
  const [count, setCount] = useState(1);

  const decrement = () => {
    if (count === 1) {
      handleDeleteItemFromCard(card.id);
    } else if (count > 0) {
      setCount(count - 1);
      setTotalPriceSumState((prev) => prev - parseFloat(card.price));
    }
  };

  const increment = () => {
    if (count >= 8) {
      alert("Ops!!! Não temos produto suficiente em estoque.");
    } else {
      setCount(count + 1);
      setTotalPriceSumState((prev) => prev + parseFloat(card.price));
    }
  };

  return (
    <CartList>
      <img src={card.photo} alt="" />
      <div className="container-subTitle">
        <h4>{card.name}</h4>
      </div>

      <div className="containerCount">
        <p className="label-amount-button-count">Qtds</p>

        <div className="divCount">
          <div className="div-button">
            <button className="button-count" onClick={decrement}>
              -
            </button>
            <p>{count}</p>
            <button className="button-count" onClick={increment}>
              +
            </button>
          </div>
          <div className="container-price-item">
            <p className="price-item-cart">
              R${parseFloat(card.price).toFixed(0)}
            </p>
          </div>
        </div>
      </div>

      <ButtonDeleteItemFromCard
        onClick={() => handleDeleteItemFromCard(card.id)}
      >
        X
      </ButtonDeleteItemFromCard>
    </CartList>
  );
};
