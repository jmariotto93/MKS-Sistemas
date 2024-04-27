import { useState } from "react";
import { Footer } from "./components/Footer/Footer";
import { Header } from "./components/Header/Header";
import { Cart } from "./components/Cart/Cart";
import { CardList } from "./interfaces/CartList";
import { Products } from "./components/Products/Products";

function App() {
  const [isCardModalOpen, setIsCardModalOpen] = useState(false);
  const [cardItems, setcardItems] = useState<CardList[]>([]);

  console.log(cardItems);

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

      <Header handleOpenCardModal={handleOpenCardModal} />

      <Products setcardItems={setcardItems} />

      <div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
