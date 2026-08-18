const initialState = {
    user: {},
    addressList: [],
    creditCards: [],
    roles: [],
    theme: "",
    language: "",
};

const SET_USER = "SET_USER";
const SET_ROLES = "SET_ROLES";
const SET_THEME = "SET_THEME";
const SET_LANGUAGE = "SET_LANGUAGE";
const SET_ADDRESS_LIST = "SET_ADDRESS_LIST";
const SET_CREDIT_CARDS = "SET_CREDIT_CARDS";

export const clientActionTypes = {
    SET_USER,
    SET_ROLES,
    SET_THEME,
    SET_LANGUAGE,
    SET_ADDRESS_LIST,
    SET_CREDIT_CARDS,
};

const clientReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER:
            return {
                ...state,
                user: action.payload,
            };

        case SET_ROLES:
            return {
                ...state,
                roles: action.payload,
            };

        case SET_THEME:
            return {
                ...state,
                theme: action.payload,
            };

        case SET_LANGUAGE:
            return {
                ...state,
                language: action.payload,
            };

        case SET_ADDRESS_LIST:
            return {
                ...state,
                addressList: action.payload,
            };

        case SET_CREDIT_CARDS:
            return {
                ...state,
                creditCards: action.payload,
            };

        default:
            return state;
    }
};

export default clientReducer;