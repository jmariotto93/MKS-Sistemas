import { ButtonCart } from "../ButtonCart/ButtonCart";
import { HeaderContainer, LogoWrapper } from "./styles";

interface HeaderProps {
  handleOpenCardModal(): void;
  cardLength: number;
}

const Header = ({ handleOpenCardModal, cardLength }: HeaderProps) => {
  return (
    <>
      <HeaderContainer>
        <LogoWrapper>
          <span>MKS</span>
          <span>Sistemas</span>
        </LogoWrapper>

        <ButtonCart price={cardLength} onClick={handleOpenCardModal} />
      </HeaderContainer>
    </>
  );
};

export { Header };
