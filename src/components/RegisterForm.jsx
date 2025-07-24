import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { authService } from "../appwrite/authService";
const RegisterForm = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset
    } = useForm();
    const navigate = useNavigate();

    const onSubmit = async (data) => {
        console.log("Form Data:", data);
        const {name,email,password} = data
        const isUserCreated = await authService.createAccount(email,password,name)
        console.log(isUserCreated);
        reset();
        navigate('/course')
    };

    return (
        <form
            onSubmit={handleSubmit(onSubmit)}
            className="max-w-md mx-auto mt-8 p-4 border rounded-2xl shadow"
        >
            <h2 className="text-4xl font-semibold mb-4 text-center mt-4 text-white">Register</h2>

            <div className="mb-4">
                <label className="block mb-1">Name</label>
                <input
                    {...register("name", { required: "Name is required" })}
                    type="text"
                    className="w-full border px-3 py-2 rounded "
                />
                {errors.name && (
                    <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
                )}
            </div>
            
            <div className="mb-4">
                <label className="block mb-1">Email</label>
                <input
                    {...register("email", {
                        required: "Email is required",
                        pattern: {
                            value: /^\S+@\S+$/i,
                            message: "Invalid email address",
                        },
                    })}
                    type="email"
                    className="w-full border px-3 py-2 rounded"
                />
                {errors.email && (
                    <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
                )}
            </div>
            
            <div className="mb-4">
                <label className="block mb-1">Password</label>
                <input
                    {...register("password", { required: "Password is required" })}
                    type="password"
                    className="w-full border px-3 py-2 rounded"
                />
                {errors.password && (
                    <p className="text-red-500 text-sm mt-1">{errors.password.message}</p>
                )}
            </div>
            
            <button
                type="submit"
                className="w-full bg-yellow-400 text-black py-2 rounded hover:bg-yellow-500 transition duration-300 shadow-md hover:scale-105 hover:shadow-amber-50 border"
            >
                Register
            </button>
            
            <p className="mt-4 text-center text-md">
                Already have an account?{" "}
                <span
                    className="text-yellow-400 cursor-pointer hover:underline"
                    onClick={() => navigate("/login")}
                >
                    Login
                </span>
            </p>
        </form>
    );
};

export default RegisterForm;
