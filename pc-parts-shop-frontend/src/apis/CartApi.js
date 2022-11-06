import Api from "./api";

export default class CartApi extends Api {
  getCart = async (userId) => {
    return super.init().get(`cart?userId=${userId}`);
  };

  decreaseItemQuantity = async (itemId) => {
    return super.init().patch(`cart?itemId=${itemId}&action=remove`);
  };

  increaseItemQuantity = async (itemId) => {
    return super.init().patch(`cart?itemId=${itemId}&action=add`);
  };

  deleteCartItem = async (itemId) => {
    return super.init().patch(`cart?itemId=${itemId}`);
  };

  addItem = async (cartId, partId) => {
    return super.init().patch(`cart?cartId=${cartId}&partId=${partId}`);
  };

  checkout = (data) => {
    const cartData = {
      cartId: data.id,
      cartItems: data.items,
    };
    return super.init().post("/checkout-session", cartData);
  };
}
