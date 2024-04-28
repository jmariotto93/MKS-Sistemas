import { FiShoppingBag } from "react-icons/fi";
import {
  DescriptionProduct,
  ImageProduct,
  NameProduct,
  Product,
  ProductsContainer,
  PriceProduct,
  ButtonAddCart,
  ContainerMain,
  BoxCardSqueleton,
} from "./styles";
import { useProductsQuery } from "../../hooks/useProducts";
import { motion } from "framer-motion";
import { CardList } from "../../interfaces/CartList";

interface ProdocutsProps {
  setcardItems: React.Dispatch<React.SetStateAction<CardList[] | []>>;
}

export const Products = ({ setcardItems }: ProdocutsProps) => {
  const { data, isLoading, isError } = useProductsQuery();

  if (isError) return <div>Ocorreu um erro ao buscar os produtos</div>;

  function handleAddProductToCard(product: CardList) {
    const productsFromLocalStorage = localStorage.getItem("card-products");
    const productsParsed =
      productsFromLocalStorage && JSON.parse(productsFromLocalStorage);

    const productsArray = productsParsed
      ? [...productsParsed, product]
      : [product];

    localStorage.setItem("card-products", JSON.stringify(productsArray));

    setcardItems((prev) => {
      if (prev) {
        return [...prev, product];
      } else {
        return [product];
      }
    });
  }

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
    >
      <ContainerMain>
        {isLoading ? (
          <ProductsContainer>
            {Array.from({ length: 8 }).map((_, index) => {
              return (
                <BoxCardSqueleton key={index}>
                  <div className="is-loading  loading">
                    <div className="image"></div>
                    <div className="content">
                      <h4></h4>
                      <div className="description"></div>
                    </div>
                  </div>
                </BoxCardSqueleton>
              );
            })}
          </ProductsContainer>
        ) : (
          <ProductsContainer>
            {data?.products?.map((product) => {
              return (
                <div className="box-card" key={product.id}>
                  <Product>
                    <ImageProduct src={product.photo} alt={product.name} />

                    <div className="container-name-and-price">
                      <div className="div-name-product">
                        <NameProduct>{product.name}</NameProduct>
                      </div>

                      <div className="container-price-product">
                        <PriceProduct>
                          R${Number(product.price).toFixed(0)}
                        </PriceProduct>
                      </div>
                    </div>

                    <div className="container-description-product">
                      <DescriptionProduct>
                        {product.description}
                      </DescriptionProduct>
                    </div>
                  </Product>
                  <ButtonAddCart
                    onClick={() => handleAddProductToCard(product)}
                  >
                    <FiShoppingBag className="icon-shopping-bag" /> Comprar
                  </ButtonAddCart>
                </div>
              );
            })}
          </ProductsContainer>
        )}
      </ContainerMain>
    </motion.div>
  );
};
