import Api from "./api";

export default class CartApi extends Api {
  checkout = (data) => {
    const cartData = {
      cartId: data.id,
      cartItems: data.items,
    };
    return super.init().post("/checkout-session", cartData);
  };
}
