import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Course from "../pages/Course";
import About from "../pages/About";
import BookDetails from "../pages/BookDetails";
import Register from "../pages/Register";
import Login from "../pages/Login";
import CourseDetails from "../pages/CourseDetails";
import PublicRoute from "./PublicRoute";
import ProtectedRoute from "./ProtectedRoute";
import PaymentGateway from "../pages/PaymentGateway";

const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} /> //? anyone can access this page

            <Route path="/course" element={
                <PublicRoute><Course /></PublicRoute> //? only non logined user can access this page
            } />

            <Route path="/about" element={<About />} /> //? anyone can access this page

            <Route path="/book-details" element={<BookDetails />} />  //? anyone can access this page

            <Route path="/register" element={
                <PublicRoute><Register /></PublicRoute> //? only non logined user can access this page
            } />

            <Route path="/login" element={
                // <PublicRoute><Login /></PublicRoute> //? only non logined user can access this page
                <Login /> 

            } />

            <Route path="/course/course-details" element={
                // <ProtectedRoute><CourseDetails /></ProtectedRoute> //? only logined user can access this page
                <CourseDetails /> 
            } />

            <Route path="/course/payment-gateway" element={
                <PaymentGateway />
            } />
        </Routes>
    );
};

export default AppRoutes;
