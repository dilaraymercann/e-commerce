import { legacy_createStore, applyMiddleware } from "redux";
import { thunk } from "redux-thunk";
import { createLogger } from "redux-logger";

import rootReducer from "./rootReducer";

const logger = createLogger();

const store = legacy_createStore(
    rootReducer,
    applyMiddleware(thunk, logger)
);

export default store;