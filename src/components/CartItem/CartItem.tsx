import { CardList } from "../../interfaces/CartList";
import { CartList } from "./styles";
import { useState } from "react";

interface CardItemProps {
  card: CardList;
  handleDeleteItemFromCard(productId: number): void;
}

export const CartItem = ({ card, handleDeleteItemFromCard }: CardItemProps) => {
  const [count, setCount] = useState(0);

  const decrement = () => {
    if (count > 0) {
      setCount((count) => count - 1);
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
            <button className="button-count" onClick={() => decrement()}>
              -
            </button>
            <p>{count}</p>
            <button
              className="button-count"
              onClick={() => setCount((count) => count + 1)}
            >
              +
            </button>
          </div>
          <div className="container-price-item">
            <p className="price-item-cart">R${Number(card.price).toFixed(0)}</p>
          </div>
        </div>
      </div>

      <div
        style={{
          position: "absolute",
          right: -6,
          top: -6,
          width: 18,
          height: 18,
          color: "white",
          backgroundColor: "#000",
          display: "inline-flex",
          justifyContent: "center",
          alignItems: "center",
          borderRadius: 25,
          fontSize: 12,
          cursor: "pointer",
        }}
        onClick={() => handleDeleteItemFromCard(card.id)}
      >
        X
      </div>
    </CartList>
  );
};
