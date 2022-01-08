import React from "react";
import { useDispatch } from "react-redux";
import { cartActions } from "../../../store/cart-slice";

const TrendItem = props => {
  const dispatch = useDispatch();

  const addToCartHandler = () => {
    dispatch(
      cartActions.addItemToCart({
        id: props.item.id,
        name: props.item.name,
        price: props.item.price,
        imageUrl: props.item.imageUrl,
      })
    );
    props.toast(
      "success",
      `${props.item.name} is successfully added to the cart!`
    );
  };
  return (
    <div className="col-lg-3 col-6 col-sm-12">
      <div className="product">
        <i onClick={addToCartHandler} className="fas fa-shopping-bag icon"></i>
        <div className="product-img text-center">
          <img src={props.item.imageUrl} className="w-100" alt="Coca-Cola®" />
        </div>
        <h2 className="product-name py-2">{props.item.name}</h2>
        <p className="product-price">${props.item.price}</p>
      </div>
    </div>
  );
};
export default TrendItem;
