import itemList from "./DataMilktea";
import "./CartTwo.css";

function CartItems() {
  const itemLists = itemList.map((listItem) => {
    return (
      <div className="containers">
        <div className="imgs ">
          <img className="imgItem" src={listItem.img} alt=" " />
        </div>
        <div className="contents">
          <h3 className="contentTitles">{listItem.title}</h3>
          <p className="contentContacts">{listItem.stocked} đ</p>
        </div>
      </div>
    );
  });
  return <>{itemLists}</>;
}

export default CartItems;
