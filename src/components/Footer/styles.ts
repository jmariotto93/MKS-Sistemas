import styled from "styled-components";
import { colors } from "../../theme/theme";

export const FooterContainer = styled.footer`
  width: 100%;
  height: 2.13rem;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${colors.footer};
  transition: background-color 0.4s ease;

  p {
    font-weight: 400;
    font-size: 0.8rem;
    line-height: 0.94rem;
    color: ${colors.black};
  }

  &:hover {
    background-color: ${colors.primary};
  }

  &:hover p {
    color: ${colors.white};
  }
`;
