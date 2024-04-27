import styled from "styled-components";
import { colors } from "../../theme/theme";

export const ContainerMain = styled.div`
  width: 90%;
  height: 100%;
  margin: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-bottom: 34px;

  @media screen and (max-width: 945px) {
    display: flex;
    flex-wrap: wrap;
    height: auto;
  }
`;

export const ProductsContainer = styled.div`
  width: 938px;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  margin: 25px 0 25px 0;
  gap: 22.4px;

  .box-card {
    display: flex;
    flex-direction: column;
    transition: transform 0.3s ease;

    &:hover {
      /* background-color: #084197; */
      transform: translateY(-3px);
    }
  }
  .div-name-product {
    height: auto;
  }

  .container-price-product {
    width: 64px;
    height: 26px;
    border-radius: 5px;
    background-color: #373737;
    text-align: center;
  }
  .container-name-and-price {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 14px 0 14px;
  }

  .container-description-product {
    height: 25px;
    padding: 0 14px 0 14px;
  }

  @media screen and (max-width: 945px) {
    width: 100%;
    height: 100%;
    display: flex;
    flex-wrap: wrap;
  }
`;

export const Product = styled.div`
  width: 200px;
  height: 250px;
  display: flex;
  border-radius: 6px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-shadow: 0 0 16px 1px rgba(0, 0, 0, 0.1);

  @media screen and (max-width: 485px) {
    width: 218px;
  }
`;

export const ImageProduct = styled.img`
  width: 131px;
  height: 138px;
  margin-top: 18px;
  object-fit: cover;
`;

export const NameProduct = styled.h3`
  font-weight: 400;
  font-size: 15px;
  line-height: 19px;
  color: #2c2c2c;
`;

export const PriceProduct = styled.h3`
  font-weight: 700;
  font-size: 15px;
  line-height: 15px;
  color: ${colors.white};
  padding-top: 5px;
`;

export const DescriptionProduct = styled.p`
  font-weight: 300;
  font-size: 10px;
  line-height: 12px;
  color: #2c2c2c;
  margin-top: 8px;
  max-lines: 2;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
`;

export const ButtonAddCart = styled.button`
  width: 100%;
  height: 32px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 14px;
  text-transform: uppercase;
  font-weight: 600;
  font-size: 14px;
  line-height: 18px;
  color: ${colors.white};
  border: none;
  background-color: ${colors.primary};
  border-radius: 0 0 5px 5px;
  cursor: pointer;

  .icon-shopping-bag {
    font-size: 18px;
  }

  &:hover {
    background-color: #084197;
    transform: translateY(3px, 0);
  }
`;
