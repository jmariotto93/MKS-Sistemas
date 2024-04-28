import { TiShoppingCart } from "react-icons/ti";
import { ButtonCartContainer } from "./styles";
import { ComponentProps } from "react";

interface ButtonCartProps extends ComponentProps<"button"> {
  price: number;
}

export const ButtonCart: React.FC<ButtonCartProps> = ({ price, ...rest }) => {
  return (
    <ButtonCartContainer {...rest} type="button">
      <TiShoppingCart className="icon-cart" />
      <span>{price}</span>
    </ButtonCartContainer>
  );
};
