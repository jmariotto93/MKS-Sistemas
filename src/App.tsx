import { useState } from "react";
import { Footer } from "./components/Footer/Footer";
import { Header } from "./components/Header/Header";
import { Cart } from "./components/Cart/Cart";
import { CardList } from "./interfaces/CartList";
import { Products } from "./components/Products/Products";

function App() {
  const [isCardModalOpen, setIsCardModalOpen] = useState(false);

  const cardItemsFromLocalStorage = localStorage.getItem("card-products");

  const [cardItems, setcardItems] = useState<CardList[]>(
    (cardItemsFromLocalStorage && JSON.parse(cardItemsFromLocalStorage)) || []
  );

  function handleOpenCardModal() {
    setIsCardModalOpen((prev) => !prev);
  }

  return (
    <div>
      {isCardModalOpen && (
        <Cart
          setcardItems={setcardItems}
          cardItems={cardItems}
          handleOpenCardModal={handleOpenCardModal}
        />
      )}

      <Header
        cardLength={cardItems.length}
        handleOpenCardModal={handleOpenCardModal}
      />

      <Products setcardItems={setcardItems} />

      <div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
