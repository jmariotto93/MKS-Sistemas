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
} from "./styles";
import { useProductsQuery } from "../../hooks/useProducts";
import { motion } from "framer-motion";

export const Products = () => {
  const { data, isLoading, isError } = useProductsQuery();

  // if (isLoading) return <div>Carregando...</div>;
  if (isError) return <div>Ocorreu um erro ao buscar os produtos</div>;

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
    >
      <ContainerMain>
        {isLoading ? (
          <div className="ProductSkeleton" style={{ height: "100vh" }}>
            loading
          </div>
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
                  <ButtonAddCart>
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
