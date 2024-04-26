import { TiShoppingCart } from "react-icons/ti";
import "./Menu.css";

const Menu = () => {
  return (
    <nav className="menu">
      <div className="logo-container">
        <h1>MKS</h1>
        <p>Sistemas</p>
      </div>
      <div className="cart-container">
        <button type="button" className="button-cart">
          <TiShoppingCart className="icon-cart" />
        </button>
      </div>
    </nav>
  );
};

export default Menu;
