const initialState = {
    cart: [],
    payment: {},
    address: {},
};

const SET_CART = "SET_CART";
const SET_PAYMENT = "SET_PAYMENT";
const SET_ADDRESS = "SET_ADDRESS";

const ADD_TO_CART = "ADD_TO_CART";
const INCREASE_CART_ITEM = "INCREASE_CART_ITEM";
const DECREASE_CART_ITEM = "DECREASE_CART_ITEM";
const REMOVE_CART_ITEM = "REMOVE_CART_ITEM";
const TOGGLE_CART_ITEM = "TOGGLE_CART_ITEM";

export const shoppingCartActionTypes = {
    SET_CART,
    SET_PAYMENT,
    SET_ADDRESS,
    ADD_TO_CART,
    INCREASE_CART_ITEM,
    DECREASE_CART_ITEM,
    REMOVE_CART_ITEM,
    TOGGLE_CART_ITEM,
};

const shoppingCartReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_CART:
            return {
                ...state,
                cart: action.payload,
            };

        case SET_PAYMENT:
            return {
                ...state,
                payment: action.payload,
            };

        case SET_ADDRESS:
            return {
                ...state,
                address: action.payload,
            };

        case ADD_TO_CART: {
            const existingItem = state.cart.find(
                (item) => item.product.id === action.payload.id
            );

            if (existingItem) {
                return {
                    ...state,
                    cart: state.cart.map((item) =>
                        item.product.id === action.payload.id
                            ? {
                                ...item,
                                count: item.count + 1,
                            }
                            : item
                    ),
                };
            }

            return {
                ...state,
                cart: [
                    ...state.cart,
                    {
                        count: 1,
                        checked: true,
                        product: action.payload,
                    },
                ],
            };
        }

        case INCREASE_CART_ITEM:
            return {
                ...state,
                cart: state.cart.map((item) =>
                    item.product.id === action.payload
                        ? {
                            ...item,
                            count: item.count + 1,
                        }
                        : item
                ),
            };

        case DECREASE_CART_ITEM:
            return {
                ...state,
                cart: state.cart.map((item) =>
                    item.product.id === action.payload
                        ? {
                            ...item,
                            count: Math.max(1, item.count - 1),
                        }
                        : item
                ),
            };

        case REMOVE_CART_ITEM:
            return {
                ...state,
                cart: state.cart.filter(
                    (item) => item.product.id !== action.payload
                ),
            };

        case TOGGLE_CART_ITEM:
            return {
                ...state,
                cart: state.cart.map((item) =>
                    item.product.id === action.payload
                        ? {
                            ...item,
                            checked: !item.checked,
                        }
                        : item
                ),
            };

        default:
            return state;
    }
};

export default shoppingCartReducer;