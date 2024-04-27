import { ButtonCart } from "../ButtonCart/ButtonCart";
import { HeaderContainer, LogoWrapper } from "./styles";

interface HeaderProps {
  handleOpenCardModal(): void;
}

const Header = ({ handleOpenCardModal }: HeaderProps) => {
  return (
    <>
      <HeaderContainer>
        <LogoWrapper>
          <span>MKS</span>
          <span>Sistemas</span>
        </LogoWrapper>

        <ButtonCart price="0" onClick={handleOpenCardModal} />
      </HeaderContainer>
    </>
  );
};

export { Header };
