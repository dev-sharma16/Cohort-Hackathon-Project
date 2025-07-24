import React from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { RiLogoutBoxRLine, RiBookOpenLine } from "react-icons/ri";
import { authService } from "../appwrite/authService";
import { useNavigate } from "react-router";
import { clearUser } from '../redux store/authSlice'
import { useDispatch } from "react-redux";

const CourseCard = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleGoToClassroom = () => {
    toast.success("Redirecting to Classroom...");
    // simulate navigation or use navigate("/classroom") if using React Router
  };

  const handleLogout = async() => {
    toast.info("Logging out...");
    const userIsLogout = await authService.logoutAccount();
    if (userIsLogout){
        dispatch(clearUser())
        navigate('/course')
    }
  };

  return (
    <div className="bg-[#1e1e1e] text-white w-[350px] p-4 rounded-xl shadow-lg flex flex-col sm:flex-row items-center space-x-4">
      {/* Course Image */}
      <img
        src="https://i.ibb.co/XZy9xLN/course-thumbnail.png"
        alt="Course Thumbnail"
        className="w-14 h-14 rounded-full object-cover"
      />

      {/* Course Info and Buttons */}
      <div className="flex flex-col w-full">
        <h2 className="text-lg font-semibold mb-2">
          Instagram Workshop
        </h2>

        <div className="flex space-x-2">
          <button
            onClick={handleGoToClassroom}
            className="flex items-center space-x-1 bg-green-500 hover:bg-green-600 text-white px-3 py-1 rounded-md text-sm"
          >
            <RiBookOpenLine />
            <span>Go to Course</span>
          </button>

          <button
            onClick={handleLogout}
            className="flex items-center space-x-1 bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded-md text-sm"
          >
            <RiLogoutBoxRLine />
            <span>Logout</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
