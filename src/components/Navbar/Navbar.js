import styled from "styled-components";
import CafeLogo from "../../assets/images/395849073_214076151700597_2588403550386430625_n.png";
import { MdSearch } from "react-icons/md";
import { GiShoppingCart } from "react-icons/gi";
import React, { useState } from "react";

function Navbar(props) {
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked(!isClicked);
  };
  return (
    <Navigation>
      <div className="navContainer">
        <div className="logo">
          <img src={CafeLogo} alt="ảnh" />
        </div>
        <div className="navSearch">
          <MdSearch className="iconSearch" />
          <input type="text" placeholder="Tìm cái deo gì?" />
        </div>
        <div className="navBuy">
          <GiShoppingCart className="iconCart" onClick={handleClick} />
          {isClicked && (
            <div className="form">
              <h3 className="formTitle">Đăng nhập để hoàn tất</h3>
              <div className="formNext">
                <div className="yorForm">Đăng Nhập</div>
                <div className="yorForm">Đăng Kí</div>
              </div>
            </div>
          )}
        </div>
      </div>
    </Navigation>
  );
}

export default Navbar;

const Navigation = styled.div`
  width: 100%;
  height: 80px;
  position: fixed;
  top: 0;
  transition-timing-function: ease-in;
  transition: all 1s;
  z-index: 999999;

  @media only screen and (max-width: 768px) {
    height: 100px;
  }
  .navContainer {
    background-color: var(--color-background);
    display: flex;
    align-items: center;
    flex-direction: row;
    justify-content: flex-start;
    width: 100%;
    height: 100%;

    @media only screen and (max-width: 600px) {
      flex-direction: column;
    }

    .logo {
      width: 120px;
      cursor: pointer;
      margin-left: 50px;
      img {
        width: 100%;
      }
    }

    .navSearch {
      color: var(--color-while);
      padding-right: 20px;
      margin-left: 50px;
      display: flex;
      justify-content: flex-end;

      .iconSearch {
        width: 20px;
        height: 20px;
        cursor: pointer;
        transform: translateX(24px) translateY(10px);
        color: #bbb;
      }

      input {
        font-size: 14px;
        border: 1px solid #fff;
        color: var(--color-while);
        outline: none;
        width: 300px;
        padding: 10px;
        cursor: pointer;
        background: var(--color-background);
        transition: width 0.5s;
        padding-left: 26px;
        cursor: text;
        border-radius: 4px;
      }
    }
    .navBuy {
      margin-left: 600px;

      &:hover .iconCart {
        color: var(--color-while);
        cursor: pointer;
      }

      .iconCart {
        color: #bbb;
        width: 40px;
        height: 40px;
        position: relative;
      }
      .form {
        color: var(--color-while);
        width: 250px;
        height: 180px;
        position: absolute;
        margin-top: 90px;
        margin-left: 20px;
        transform: translate(-50%, -50%);
        background: #f0f2f5;
        border-radius: 5px;

        .formNext {
          justify-content: space-evenly;
          display: flex;
        }
        .formTitle {
          text-align: center;
          margin-top: 40px;
          color: #97856b;
        }

        .yorForm {
          padding: 7px;
          height: 30px;
          background: #97856b;
          border-radius: 4px;
          margin-top: 10%;
          cursor: pointer;
        }
      }
    }
  }
`;
