import styled from "styled-components";

import { MdKeyboardArrowRight } from "react-icons/md";

function Info(props) {
  return (
    <InfoItems>
      <h1 className="InfoItems">THẾ GIỚI CAFE</h1>
      <div className="InfoBig">
        <div className="One">
          <img
            className="ImgBig"
            src="https://cafe.net.vn/wp/wp-content/uploads/2019/10/THE-ART-COFFEE-HOUSE-1.jpg"
            alt=" "
          />
          <div className="contentImg">
            <h4 className="InfoTitleA">Văn hóa cafe sài gòn</h4>
            <p className="InfoSpan Bonus">Oct 31 - 02:44 PM</p>
          </div>
        </div>
        <div className="SoSmall">
          <div className="InfoSmall">
            <div className="InfoMini">
              <img
                className="ImgSmall"
                src="https://cafe.net.vn/pub/media/wysiwyg/goccaphe/2018/QUAY-PHA-CHE.jpg"
                alt=" "
              />
              <h4 className="InfoTitle">
                Có gì bên trong một quầy pha chế cafe
              </h4>
              <p className="InfoSpan">Sep 10 - 01:29 PM </p>
            </div>
            <div className="InfoMini">
              <img
                className="ImgSmall"
                src="https://cafe.net.vn/wp/wp-content/uploads/2017/06/42425d5f373553a3f986734d1f575bf7.jpg"
                alt=" "
              />
              <h4 className="InfoTitle">
                Sự tinh tế trong văn hóa cafe của người Ý
              </h4>
              <p className="InfoSpan">Jun 01 - 01:52 PM</p>
            </div>
          </div>
          <div className="InfoSmall Additional">
            <div className="InfoMini">
              <img
                className="ImgSmall"
                src="https://cafe.net.vn/pub/media/wysiwyg/kienthuccaphe/190.jpg"
                alt=" "
              />
              <h4 className="InfoTitle">Cafe Xưa và Nay</h4>
            </div>
            <div className="InfoMini">
              <img
                className="ImgSmall"
                src="https://cafe.net.vn/pub/media/wysiwyg/goccaphe/2018/CA-PHE-Scandinavian.png"
                alt=" "
              />
              <h4 className="InfoTitle">
                Top những phong cách quán cafe chất nhất hiện nay
              </h4>
              <p className="InfoSpan">Sep 04 - 02:18 PM</p>
            </div>
          </div>
        </div>
      </div>
      <div>
        <button className="Button">
          Xem thêm
          <MdKeyboardArrowRight className="Icon" />
        </button>
      </div>
    </InfoItems>
  );
}

export default Info;

const InfoItems = styled.div`
  margin: 0;
  padding: 0;
  margin: 0 auto;
  width: 85%;
  .Button {
    width: 96px;
    height: 30px;
    background: #090909;
    color: var(--color-while);
    display: flex;
    align-items: center;
    float: right;
    margin-right: -145px;

    .Icon {
      font-size: 20px;
      margin-left: 3px;
    }
  }
  .InfoItems {
    font-size: 26px;
    font-weight: 600;
    color: gray;
    line-height: 1.31;
    text-align: center;
    /* margin-left: 170px; */
    padding: 40px 0;
  }

  .InfoBig {
    display: flex;
    margin-left: 10px;
    .Bonus {
      margin-top: 20px;
    }
    .ImgBig {
      width: 610px;
      height: 390px;
    }
    .InfoTitle {
      font-size: 18px;
      font-weight: 600;
      padding: 12px 0 1px 0;
    }
    .InfoSpan {
      font-size: 14px;
      font-weight: 400;
      line-height: 1.43;
      color: #bfafb6;
      padding: 1px 0;
    }
    .SoSmall {
      .Additional {
        margin-top: 20px;
      }

      .InfoSmall {
        display: flex;

        .ImgSmall {
          width: 295px;
          height: 145px;
        }
        .InfoMini {
          margin-left: 15px;
        }
      }
    }
  }
  @media screen and (max-width: 700px) {
    .InfoItems {
      font-size: 25px;
      font-weight: 600;
      color: gray;
      line-height: 1.31;
      text-align: center;
      margin: 0 auto;
      /* margin-left: 170px; */
      padding: 40px 0;
    }

    .InfoBig {
      flex-wrap: wrap;
      .Bonus {
        margin-top: 20px;
      }
      .ImgBig {
        position: relative;
        left: -0.7cm;
        width: 600px;
        height: 300px;
      }
      .InfoTitle {
        font-size: 18px;
        font-weight: 600;
        padding: 12px 0 1px 0;
      }
      .InfoTitleA {
        font-size: 25px;
        font-weight: 600;
        text-align: center;
      }
      .InfoSpan {
        font-size: 14px;
        font-weight: 400;
        line-height: 1.43;
        color: #bfafb6;
        padding: 1px 0;
        text-align: center;
        margin-bottom: 20px;
      }
      .SoSmall {
        .Additional {
          margin-top: 20px;
        }

        .InfoSmall {
          display: flex;

          .ImgSmall {
            width: 295px;
            height: 145px;
          }
          .InfoMini {
            position: relative;
            right: 1cm;
          }
        }
      }
    }
  }
  /* @media screen and (max-width: 1100px) {
    .InfoItems {
      font-size: 25px;
      font-weight: 600;
      color: gray;
      line-height: 1.31;
      text-align: center;
      margin: 0 auto;
      
      padding: 40px 0;
    }

    .InfoBig {
      flex-wrap: wrap;
      .Bonus {
        margin-top: 20px;
      }
      .ImgBig {
        position: relative;

        width: 800px;
        height: 450px;
      }
      .InfoTitle {
        font-size: 18px;
        font-weight: 600;
        padding: 12px 0 1px 0;
      }
      .InfoTitleA {
        font-size: 25px;
        font-weight: 600;
        text-align: center;
      }
      .InfoSpan {
        font-size: 14px;
        font-weight: 400;
        line-height: 1.43;
        color: #bfafb6;
        padding: 1px 0;
        text-align: center;
        margin-bottom: 20px;
      }
      .SoSmall {
        .Additional {
          margin-top: 20px;
        }

        .InfoSmall {
          display: flex;

          .ImgSmall {
            width: 295px;
            height: 145px;
          }
          .InfoMini {
            position: relative;
            right: 1cm;
          }
        }
      }
    }
  } */
`;
