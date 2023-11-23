import { BrowserRouter as Router, Link } from "react-router-dom";
import styled from "styled-components";

function Social() {
  return (
    <SocialItems>
      <h2 className="SocialTitle">SOCIAL MEDIA</h2>
      <Router>
        <div className="Link">
          <Link to="https://www.facebook.com/profile.php?id=100015299828774">
            Facebook
          </Link>
        </div>
        <div className="Link">
          <Link to="https://www.instagram.com/_tranbinhan/">Instagram</Link>
        </div>
        <div className="Link">
          <Link to="tel:0394699761">Phone</Link>
        </div>
        <div className="Link">
          <Link to="https://www.tiktok.com/@tranbinhan12?is_from_webapp=1&sender_device=pc">
            Tiktok
          </Link>
        </div>
      </Router>
    </SocialItems>
  );
}

export default Social;

const SocialItems = styled.div`
  margin: 0;
  padding: 0;

  .SocialTitle {
    font-size: 20px;
    padding: 15px 0;
  }
  .Link {
    padding: 2px 0;
  }
  @media screen and (max-width: 768px) {
    .SocialTitle {
      font-size: 17px;
      position: relative;
      top: 15px;
      text-align: center;
    }
    .Link {
      position: relative;
      top: 15px;

      font-size: 14px;
    }
  }
`;
