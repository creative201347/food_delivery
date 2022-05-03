import { fetchCart, fetchUser } from "../utils/fetchLocalStorage";

const userInfo = fetchUser();
const cartInfo = fetchCart();

export const initialState = {
  user: userInfo,
  foodItem: null,
  cartShow: false,
  cartItems: cartInfo,
};
