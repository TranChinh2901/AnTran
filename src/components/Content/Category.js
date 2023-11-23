import { BrowserRouter as Router, Link } from "react-router-dom";
import React from "react";
import styled from "styled-components";

function Category(props) {
  return (
    <CategoryItems>
      <div className="CategoryBack">
        <h1 className="CategoryTitle">DANH MỤC TIÊU BIỂU</h1>
        <Router>
          <div className="CategoryList">
            <Link className="Link" to="#">
              Coffee hòa tan G7
            </Link>
            <Link className="Link" to="#">
              Máy pha cà phê viên nén
            </Link>
            <Link className="Link" to="#">
              Coffee
            </Link>
            <Link className="Link" to="#">
              Coffee đen hòa tan G7
            </Link>
            <Link className="Link" to="#">
              Dụng vụ nén cafe
            </Link>
            <Link className="Link" to="#">
              Máy làm cafe đá xay
            </Link>
            <Link className="Link" to="#">
              Máy rang cafe
            </Link>
            <Link className="Link" to="#">
              Máy bán tự động
            </Link>
            <Link className="Link" to="#">
              Cafe đen hòa tan G7
            </Link>
            <Link className="Link" to="#">
              Máy làm cafe đá xay
            </Link>
          </div>
        </Router>
      </div>
    </CategoryItems>
  );
}

export default Category;

const CategoryItems = styled.div`
  margin: 0;
  padding: 0;
  width: 100%;
  margin-top: 20px;

  .CategoryBack {
    width: 100%;
    height: 240px;
    background: #343434;
    color: var(--color-while);

    .CategoryTitle {
      font-size: 30px;
      font-weight: 500;
      text-align: center;
      padding: 40px 0 60px 0;
    }
    .CategoryList {
      justify-content: space-between;
      display: flex;
      width: 90%;
      margin-left: 70px;

      .Link {
        flex-wrap: wrap;
        width: 100px;
        font-size: 18px;
      }
    }
  }
  @media screen and (max-width: 700px) {
    .CategoryBack {
      width: 100%;
      height: 100%;

      .CategoryTitle {
        font-size: 25px;
        font-weight: 600;
        text-align: center;
        padding: 40px 0 60px 0;
      }

      .CategoryList {
        flex-wrap: wrap;
        display: flex;
        width: 90%;
        margin-left: 70px;
        margin: 0 auto;
        text-align: center;

        .Link {
          width: 100px;
          height: 80px;
        }
      }
    }
  }

  @media screen and (max-width: 900px) {
    .CategoryBack {
      width: 100%;
      height: 100%;

      .CategoryTitle {
        font-size: 25px;
        font-weight: 600;
        text-align: center;
        padding: 40px 0 60px 0;
      }

      .CategoryList {
        flex-wrap: wrap;
        display: flex;
        width: 90%;
        margin-left: 70px;
        margin: 0 auto;
        text-align: center;

        .Link {
          width: 110px;
          height: 80px;
          font-size: 18px;
        }
      }
    }
  }
`;
