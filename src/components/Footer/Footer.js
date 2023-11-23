import styled from "styled-components";
import Logo from "./Logo";
import Path from "./Path";
import Social from "./Social";

function Footer() {
  return (
    <FooterItems>
      <Logo className="logo"></Logo>
      <Path className="path"></Path>
      <Social className="social"></Social>
    </FooterItems>
  );
}

export default Footer;

const FooterItems = styled.div`
  margin-top: 50px;
  padding: 0;
  display: flex;
  background: #000;
  color: var(--color-while);
  justify-content: space-around;
  width: 100%;
  height: 200px;

  @media screen and (max-width: 768px) {
    .path {
      position: relative;
      top: 1cm;
    }
  }
`;
