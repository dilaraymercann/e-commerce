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

export const clientActionTypes = {
    SET_USER,
    SET_ROLES,
    SET_THEME,
    SET_LANGUAGE,
};

const clientReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER:
            return { ...state, user: action.payload };

        case SET_ROLES:
            return { ...state, roles: action.payload };

        case SET_THEME:
            return { ...state, theme: action.payload };

        case SET_LANGUAGE:
            return { ...state, language: action.payload };

        default:
            return state;
    }
};

export default clientReducer;