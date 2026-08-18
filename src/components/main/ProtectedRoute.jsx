import { Navigate, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";

const ProtectedRoute = ({ children }) => {
    const user = useSelector(
        (state) => state.client.user
    );

    const location = useLocation();

    const isLoggedIn = Boolean(user?.email);

    if (!isLoggedIn) {
        return (
            <Navigate
                to="/login"
                replace
                state={{ from: location.pathname }}
            />
        );
    }

    return children;
};

export default ProtectedRoute;