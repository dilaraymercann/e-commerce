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

export const addToCart = (product) => ({
    type: shoppingCartActionTypes.ADD_TO_CART,
    payload: product,
});

export const increaseCartItem = (productId) => ({
    type: shoppingCartActionTypes.INCREASE_CART_ITEM,
    payload: productId,
});

export const decreaseCartItem = (productId) => ({
    type: shoppingCartActionTypes.DECREASE_CART_ITEM,
    payload: productId,
});

export const removeCartItem = (productId) => ({
    type: shoppingCartActionTypes.REMOVE_CART_ITEM,
    payload: productId,
});

export const toggleCartItem = (productId) => ({
    type: shoppingCartActionTypes.TOGGLE_CART_ITEM,
    payload: productId,
});