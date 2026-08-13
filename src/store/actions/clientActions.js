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

export const loginUser = (loginData, rememberMe = false) => {
    return async (dispatch) => {
        try {
            const response = await api.post("/login", loginData);

            const data = response.data;

            dispatch(setUser(data));

            if (data.token) {
                api.defaults.headers.common["Authorization"] = data.token;
            }

            if (rememberMe && data.token) {
                localStorage.setItem("token", data.token);
            } else {
                localStorage.removeItem("token");
            }

            return {
                success: true,
                data,
            };
        } catch (error) {
            return {
                success: false,
                message:
                    error.response?.data?.message ||
                    "Email or password is incorrect.",
            };
        }
    };
};

export const verifyToken = () => {
    return async (dispatch) => {
        const token = localStorage.getItem("token");

        if (!token) {
            return;
        }

        try {
            api.defaults.headers.common["Authorization"] = token;

            const response = await api.get("/verify");

            const user = response.data;

            dispatch(setUser(user));

            if (user.token) {
                localStorage.setItem("token", user.token);

                api.defaults.headers.common["Authorization"] = user.token;
            }
        } catch (error) {
            localStorage.removeItem("token");

            delete api.defaults.headers.common["Authorization"];

            dispatch(setUser({}));

            console.error("Token verification failed:", error);
        }
    };
};