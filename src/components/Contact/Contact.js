import { BrowserRouter as Router, Link } from "react-router-dom";
import ImageMe from "../../assets/images/binhan.jpg";
import { BiLogoFacebook } from "react-icons/bi";
import { BsInstagram } from "react-icons/bs";
import { AiFillPhone } from "react-icons/ai";
import styled from "styled-components";

function Contact() {
  return (
    <ContactDirect>
      <h1 className="contactTitle"> Coffee B.A xin chào quý khách</h1>
      <div className="contactInformation">
        <div>
          <img className="contactImage" src={ImageMe} alt="anh" />
        </div>
        <div className="contactProfile">
          <h3 className="contactName">KOC Trần Bình An</h3>
          <p className="contactAddress">Địa chỉ: 17 Kiệt 47 Lương Văn Can</p>
          <Router>
            <div className="contactLink">
              <Link to="https://www.facebook.com/profile.php?id=100015299828774">
                <BiLogoFacebook className="contactIcon" />
              </Link>
              <Link to="https://www.instagram.com/_tranbinhan/">
                <BsInstagram className="contactIcon" />
              </Link>
              <Link to="tel:0394699761">
                <AiFillPhone className="contactIcon" />
              </Link>
            </div>
          </Router>
        </div>
      </div>
    </ContactDirect>
  );
}

export default Contact;

const ContactDirect = styled.div`
  margin: 0;
  padding: 0;
  height: 440px;

  .contactTitle {
    text-align: center;
    padding: 30px;
    color: var(--color-background);
    font-size: 45px;
  }
  @media screen and (max-width: 760px) {
    .contactTitle {
      font-size: 30px;
    }
  }
  .contactInformation {
    display: flex;
    justify-content: center;
    margin-left: 30px;

    .contactImage {
      width: 280px;
      border-radius: 5px;
    }
    .contactProfile {
      padding-top: 40px;
      align-items: center;
      padding-left: 70px;

      .contactName {
        color: var(--color-background);
        font-size: 22px;
        padding-bottom: 20px;
      }
      .contactAddress {
        color: var(--color-background);
        font-size: 20px;
        padding-bottom: 20px;
      }
      .contactLink {
        display: flex;
        .contactIcon {
          color: var(--color-background);
          font-size: 23px;
          margin-right: 20px;
        }
      }
    }
  }
`;
