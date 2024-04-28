import { CardList } from "../../interfaces/CartList";
import { ButtonDeleteItemFromCard, CartList } from "./styles";
import { useEffect, useState } from "react";

interface CardItemProps {
  card: CardList;
  handleDeleteItemFromCard(productId: number): void;
}

export const CartItem = ({ card, handleDeleteItemFromCard }: CardItemProps) => {
  const [count, setCount] = useState(1);
  const [totalPrice, setTotalPrice] = useState<number>(parseFloat(card.price));

  useEffect(() => {
    setTotalPrice(parseFloat(card.price) * count);
  }, [count, card.price]);

  // const decrement = () => {
  //   if (count > 1) {
  //     setCount(count - 1);
  //     setTotalPrice(totalPrice - parseFloat(card.price));
  //   }
  // };

  // const increment = () => {
  //   setCount(count + 1);
  //   setTotalPrice(totalPrice + parseFloat(card.price));
  // };

  const decrement = () => {
    if (count === 1) {
      handleDeleteItemFromCard(card.id);
    } else if (count > 0) {
      setCount(count - 1);
      setTotalPrice(totalPrice - parseFloat(card.price));
    }
  };

  const increment = () => {
    if (count > 8) {
      alert("Ops!!! Não temos produto suficiente em estoque.");
    } else {
      setCount(count + 1);
      setTotalPrice(totalPrice + parseFloat(card.price));
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
            <p className="price-item-cart">R${totalPrice.toFixed(0)}</p>
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
