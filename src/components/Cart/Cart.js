import products from "./Data";
import "./Cart.css";

function Cart() {
  const cartList = products.map((product) => {
    return (
        
        <div className="container" key={product.id}>
          <div className="img ">
            <img className="imgItems" src={product.image} alt=" " />
          </div>
          <div className="content">
            <h3 className="contentTitle">{product.name}</h3>
            <p className="contentContact">{product.price} đ</p>
          </div>
        </div>
    );
  });
  return <>{cartList}</>;
}

export default Cart;
