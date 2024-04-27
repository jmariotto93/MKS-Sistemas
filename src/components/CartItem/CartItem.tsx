import { CartList } from "./styles";

import { useState } from "react";

export const CartItem = () => {
  const [count, setCount] = useState(0);

  const decrement = () => {
    if (count > 0) {
      setCount((count) => count - 1);
    }
  };
  return (
    <CartList>
      <img
        src="https://cdn.shoppub.io/cdn-cgi/image/w=1000,h=1000,q=80,f=auto/oficinadosbits/media/uploads/produtos/foto/ljqsbgjg/file.png"
        alt=""
      />
      <div className="container-subTitle">
        <h4>Apple Watch Series 4</h4>
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
            <p className="price-item-cart">R$450</p>
          </div>
        </div>
      </div>
    </CartList>
  );
};
