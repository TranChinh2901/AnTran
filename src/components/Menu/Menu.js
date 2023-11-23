import styled from "styled-components";
import { BrowserRouter as Router, Link } from "react-router-dom";

function Menu() {
  return (
    <div>
      <MenuItem>
        <div className="menuTitle">
          <h1 className="menuTitleOne">Menu - Không ngon vẫn lấy tiền</h1>
          <Router>
            <div className="menuItem">
              <Link className="menuItemTitle" to="/">
                Coffee
              </Link>
              <Link className="menuItemTitle" to="#">
                Milk tea
              </Link>
              <Link className="menuItemTitle" to="#">
                Drink
              </Link>
            </div>
          </Router>
        </div>
        <div className="menuList">
          <div menuListCafe></div>
        </div>
      </MenuItem>
    </div>
  );
}

export default Menu;

const MenuItem = styled.div`
  margin: 0;
  padding: 0;
  .menuTitle {
    width: 100%;
    height: 80px;
    background-color: var(--color-background);
    color: var(--color-while);
    font-style: italic;
    display: flex;
    align-items: center;
    justify-content: space-between;

    .menuTitleOne {
      padding-left: 40px;
    }
    .menuItem {
      color: var(--color-while);
      display: flex;
      text-align: center;
      margin-right: 10px;
      /* padding-right: 20px; */

      .menuItemTitle {
        padding: 0 50px;
        font-size: 25px;
        text-decoration: overline;
      }
    }
  }

  @media screen and (max-width: 768px) {
    .menuTitle {
      flex-wrap: wrap;
      width: 100%;
      height: 100%;

      .menuTitleOne {
        /* margin-left: 2cm; */
        margin: 0 auto;
        font-size: 17pt;
        margin-top: 10px;
        padding-right: 40px;
      }
      .menuItem {
        font-size: 13pt;
        margin: 0 auto;
        margin-top: 20px;
        margin-bottom: 10px;

        .menuItemTitle {
          font-size: 14pt;
        }
      }
    }
  }
`;
