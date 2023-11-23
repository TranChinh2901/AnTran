import { BrowserRouter as Router, Link } from "react-router-dom";
import { MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";
import styled from "styled-components";

function Path() {
  return (
    <PathItems>
      <h2 className="PathTitle">Liên Kết Nhanh</h2>
      <Router>
        <div className="Link">
          <Link to="#">
            <MdOutlineKeyboardDoubleArrowRight />
            TRUYỀN THÔNG
          </Link>
        </div>
        <div className="Link">
          <Link to="#">
            <MdOutlineKeyboardDoubleArrowRight />
            CƠ HỘI NGHỀ NGHIỆP
          </Link>
        </div>
        <div className="Link">
          <Link to="#">
            <MdOutlineKeyboardDoubleArrowRight />
            CHÍNH SÁCH BẢO MẬT
          </Link>
        </div>
        <div className="Link">
          <Link to="#">
            <MdOutlineKeyboardDoubleArrowRight />
            THÔNG TIN LIÊN HỆ
          </Link>
        </div>
      </Router>
    </PathItems>
  );
}

export default Path;

const PathItems = styled.div`
  margin: 0;
  padding: 0;

  .PathTitle {
    font-size: 20px;
    padding: 15px 0;
  }
  .Link {
    padding: 2px 0;
  }
  @media screen and (max-width: 768px) {
    .PathTitle {
      position: relative;
      top: 8px;
      font-size: 17px;
      padding: 22px 0;
    }
    .Link {
      padding: 2px 0;
      font-size: 13px;
    }
  }
`;
