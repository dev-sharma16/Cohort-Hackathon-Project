import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const PublicRoute = ({ children }) => {
    const user = useSelector((state) => state.auth.user);
    
    return user ? <Navigate to="/course/course-details" /> : children;
};

export default PublicRoute;
