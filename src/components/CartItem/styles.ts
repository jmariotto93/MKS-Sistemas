import styled from "styled-components";
import { colors } from "../../theme/theme";

export const CartList = styled.div`
  width: 379px;
  height: 95px;
  margin: auto;
  margin-top: 36px;
  border-radius: 8px;
  background-color: ${colors.white};
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  position: relative;

  img {
    width: 46px;
    height: 57px;
    object-fit: cover;
  }
  .container-subTitle {
    width: 113px;
    height: 33px;
    margin: 0;
  }

  .container-subTitle h4 {
    font-weight: 400;
    font-size: 13px;
    line-height: 17px;
  }

  .containerCount {
    display: flex;
    flex-direction: column;
  }

  .containerCount .label-amount-button-count {
    padding-bottom: 3px;
    display: flex;
    font-weight: 400;
    font-size: 5px;
    line-height: 6px;
    color: ${colors.black};
  }

  .divCount {
    width: 100%;
    height: 20px;
    border-radius: 4px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .div-button {
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid #bfbfbf;
    border-radius: 4px;
  }

  /* .div-button .button-count:first-child{
      border-right: 1px solid #BFBFBF;
    }
    .div-button .button-count:last-child{
      border-left: 1px solid #BFBFBF;
    } */

  .div-button .button-count {
    font-weight: 400;
    font-size: 12px;
    width: 20px;
    height: 20px;
    border: none;
    background: none;
    cursor: pointer;
  }

  .divCount p {
    font-size: 8px;
    font-weight: 400;
  }

  .container-price-item .price-item-cart {
    font-weight: 700;
    font-size: 14px;
    line-height: 17px;
    padding-left: 40px;
  }

  @media screen and (max-width: 600px) {
    width: 250px;
    height: 220px;
    margin: auto;
    margin-top: 36px;
    border-radius: 8px;
    background-color: ${colors.white};
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 20px;

    img {
      width: 80px;
      height: 95px;
      object-fit: cover;
    }
    .container-subTitle {
      width: 211px;
      height: 22px;
      margin: 0;
    }

    .container-subTitle h4 {
      text-align: center;
      font-weight: 400;
      font-size: 16px;
      line-height: 19px;
    }

    .containerCount {
      width: 100%;
      height: auto;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }

    .containerCount .label-amount-button-count {
      display: none;
    }

    .divCount {
      gap: 30px;
      text-align: center;
    }

    .div-button {
      border: 1px solid #bfbfbf;
      width: 94px;
      height: 35px;
      border-radius: 4px;
      display: flex;
      align-items: center;
      justify-content: space-around;
    }
    .div-button .button-count:first-child {
      border-right: 1px solid #bfbfbf;
      border-radius: 0;
      width: 25px;
      height: 20px;
      padding-right: 5px;
    }
    .div-button .button-count:last-child {
      border-left: 1px solid #bfbfbf;
      border-radius: 0;
      width: 25px;
      height: 20px;
      padding-left: 5px;
    }

    .div-button .button-count {
      background-color: ${colors.white};

      border: none;
      font-weight: 400;
      font-size: 24px;
      padding-bottom: 30px;
    }

    .div-button p {
      font-size: 18px;
      font-weight: 400;
    }
    .container-price-item {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 84px;
      height: 35px;
      border-radius: 5px;
      background-color: #373737;
    }

    .container-price-item .price-item-cart {
      font-weight: 700;
      font-size: 15px;
      line-height: 15px;
      color: ${colors.white};
      padding: 0;
    }
  }
`;
