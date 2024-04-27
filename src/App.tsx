import { useState } from "react";
import { Footer } from "./components/Footer/Footer";
import { Header } from "./components/Header/Header";
import { Products } from "./components/Products/Products";
import { Cart } from "./components/Cart/Cart";

function App() {
  const [isCardModalOpen, setIsCardModalOpen] = useState(false);

  function handleOpenCardModal() {
    setIsCardModalOpen((prev) => !prev);
  }

  return (
    <div>
      {isCardModalOpen && <Cart handleOpenCardModal={handleOpenCardModal} />}

      <Header handleOpenCardModal={handleOpenCardModal} />
      <Products />

      <div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
