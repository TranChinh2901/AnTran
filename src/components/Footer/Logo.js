import styled from "styled-components";
import ImgLogo from "../../assets/images/395849073_214076151700597_2588403550386430625_n.png";

function Logo() {
  return (
    <LogoItems>
      <img className="LogoImg" src={ImgLogo} alt="anh" />
      <div className="Profile">
        <h2 className="ProTitle">Tập Đoàn AnLTer</h2>
        <p>
          17/47 Lương Văn Can,<br></br> P.An Cựu,Thành Phố Huế
        </p>
        <p>Hotline: 0394699761</p>
        <p>Tel:(84)394699761</p>
        <p>Fax:(84)394699761</p>
        <div className="span">
          <span>© 2023 Tập Đoàn AnLTer</span>
        </div>
      </div>
    </LogoItems>
  );
}

export default Logo;

const LogoItems = styled.div`
  margin: 0;
  padding: 0;
  display: flex;

  .LogoImg {
    width: 200px;
  }
  .Profile {
    padding-left: 100px;

    .ProTitle {
      font-size: 20px;
      padding: 15px 0;
    }
    p {
      padding: 2.5px 0;
      font-size: 15px;
    }
    .span {
      color: #afafaf;
      font-size: 15px;
      margin-top: 10px;
    }
  }
  @media screen and (max-width: 768px) {
    .LogoImg {
      width: 150px;
      height: 150px;
      margin-top: 18px;
      margin-left: 10px;
    }
    .Profile {
      padding-left: 40px;
      padding-top: 15px;

      .ProTitle {
        font-size: 17px;
        padding: 15px 0;
      }
      p {
        padding: 2.5px 0;
        font-size: 13px;
      }
      .span {
        color: #afafaf;
        font-size: 13px;
        margin-top: 10px;
        display: none;
      }
    }
  }
`;
