import api from "../../api/api";
import { clientActionTypes } from "../reducers/clientReducer";

export const setUser = (user) => ({
    type: clientActionTypes.SET_USER,
    payload: user,
});

export const setRoles = (roles) => ({
    type: clientActionTypes.SET_ROLES,
    payload: roles,
});

export const setTheme = (theme) => ({
    type: clientActionTypes.SET_THEME,
    payload: theme,
});

export const setLanguage = (language) => ({
    type: clientActionTypes.SET_LANGUAGE,
    payload: language,
});

export const fetchRoles = () => {
    return async (dispatch, getState) => {
        const roles = getState().client.roles;

        if (roles.length > 0) {
            return;
        }

        try {
            const response = await api.get("/roles");

            dispatch(setRoles(response.data));
        } catch (error) {
            console.error("Roles could not be fetched:", error);
        }
    };
};