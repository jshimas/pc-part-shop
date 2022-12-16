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
    return super.init().delete(`cart?itemId=${itemId}`);
  };

  addItem = async (cartId, partId) => {
    return super.init().post(`cart?cartId=${cartId}&partId=${partId}`);
  };

  addBuildPartsToCart = async (cartId, buildId) => {
    return super
      .init()
      .post(`cart/buy-build-parts?cartId=${cartId}&buildId=${buildId}`);
  };

  checkout = (user, cartId, items) => {
    const cartData = {
      user,
      cartId,
      items,
    };
    return super.init().post("/checkout/checkout-session", cartData);
  };

  createOrder = async (cartId, userId) => {
    return super.init().post(`/checkout?cartId=${cartId}&userId=${userId}`);
  };
}
