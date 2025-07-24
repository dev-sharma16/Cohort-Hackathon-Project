import React from "react";
import { Link } from "react-router-dom";
import { RiErrorWarningLine } from "react-icons/ri";
import { authService } from "../appwrite/authService";
import { useNavigate } from "react-router";
import { clearUser } from '../redux store/authSlice'
import { useDispatch } from "react-redux";

const PaymentGateway = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const goBackHandler = async() => {
     const userIsLogout = await authService.logoutAccount();
        if (userIsLogout){
            dispatch(clearUser())
            navigate('/login')
        }
  }
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-black text-white p-6">
      <div className=" shadow-lg rounded-2xl p-8 max-w-md w-full text-center">
        <RiErrorWarningLine
          size={60}
          className="text-yellow-500 mb-4 mx-auto"
        />
        <h2 className="text-2xl font-semibold mb-2">Payment Required</h2>
        <p className="mb-4 text-sm">
          You’ve successfully enrolled but haven't completed the payment yet.
          Please complete the payment to access the course details.
        </p>

        <div className="flex gap-4 justify-center mt-6">
          <Link to="/login">
            <button onClick={goBackHandler} className="px-4 py-2 bg-blue-500 text-white rounded-xl hover:bg-blue-600 transition">
              Go to Login Page
            </button>
          </Link>

          <Link to="/course/course-details">
            <button className="px-4 py-2 bg-green-500 text-white rounded-xl hover:bg-green-600 transition">
              Go to Course Detail Page
            </button>
          </Link>
        </div>

        <p className="text-lg text-gray-500 mt-6 ">
          (Note: This is a dummy payment gateway. If the user has already paid, they will be automatically redirected to the next page (Course Detail page). If not, they must complete the payment to gain access to the course.)
        </p>
      </div>
    </div>
  );
};

export default PaymentGateway;
