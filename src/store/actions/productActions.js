import api from "../../api/api";
import { productActionTypes } from "../reducers/productReducer";

export const setCategories = (categories) => ({
    type: productActionTypes.SET_CATEGORIES,
    payload: categories,
});

export const setProductList = (productList) => ({
    type: productActionTypes.SET_PRODUCT_LIST,
    payload: productList,
});

export const setProduct = (product) => ({
    type: productActionTypes.SET_PRODUCT,
    payload: product,
});

export const setTotal = (total) => ({
    type: productActionTypes.SET_TOTAL,
    payload: total,
});

export const setFetchState = (fetchState) => ({
    type: productActionTypes.SET_FETCH_STATE,
    payload: fetchState,
});

export const setLimit = (limit) => ({
    type: productActionTypes.SET_LIMIT,
    payload: limit,
});

export const setOffset = (offset) => ({
    type: productActionTypes.SET_OFFSET,
    payload: offset,
});

export const setFilter = (filter) => ({
    type: productActionTypes.SET_FILTER,
    payload: filter,
});


export const fetchCategories = () => {
    return async (dispatch, getState) => {
        const categories = getState().product.categories;

        if (categories.length > 0) {
            return;
        }

        try {
            const response = await api.get("/categories");

            console.log("Categories:", response.data);

            dispatch(setCategories(response.data));
        } catch (error) {
            console.error("Categories could not be fetched:", error);
        }
    };
};

export const fetchProducts = ({
    category,
    filter,
    sort,
    limit,
    offset,
} = {}) => {
    return async (dispatch) => {
        try {
            dispatch(setFetchState("FETCHING"));

            const params = {};

            if (category) {
                params.category = category;
            }

            if (filter) {
                params.filter = filter;
            }

            if (sort) {
                params.sort = sort;
            }

            if (limit !== undefined) {
                params.limit = limit;
            }

            if (offset !== undefined) {
                params.offset = offset;
            }

            const response = await api.get("/products", {
                params,
            });

            dispatch(setProductList(response.data.products));
            dispatch(setTotal(response.data.total));

            dispatch(setFetchState("FETCHED"));
        } catch (error) {
            console.error("Products could not be fetched:", error);
            dispatch(setFetchState("FAILED"));
        }
    };
};

export const fetchProduct = (productId) => {
    return async (dispatch) => {
        try {
            dispatch(setFetchState("FETCHING"));

            const response = await api.get(`/products/${productId}`);

            dispatch(setProduct(response.data));

            dispatch(setFetchState("FETCHED"));
        } catch (error) {
            console.error("Product could not be fetched:", error);

            dispatch(setFetchState("FAILED"));
        }
    };
};