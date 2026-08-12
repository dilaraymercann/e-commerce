import { shoppingCartActionTypes } from "../reducers/shoppingCartReducer";

export const setCart = (cart) => ({
    type: shoppingCartActionTypes.SET_CART,
    payload: cart,
});

export const setPayment = (payment) => ({
    type: shoppingCartActionTypes.SET_PAYMENT,
    payload: payment,
});

export const setAddress = (address) => ({
    type: shoppingCartActionTypes.SET_ADDRESS,
    payload: address,
});