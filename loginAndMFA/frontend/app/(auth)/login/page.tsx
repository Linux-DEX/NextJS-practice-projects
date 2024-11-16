"use client";

import { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

type authUser = {
  username: string;
  password: string;
};

const page: React.FC = () => {
  const router = useRouter();
  const [userDetail, setUserDetail] = useState<authUser>({
    username: "",
    password: "",
  });
  const [showPassword, setShowPassword] = useState<boolean>(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setUserDetail((prevState) => ({
      ...prevState,
      [id]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("User details submitted: ", userDetail);
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleForgotPassword = () => {
    router.push("/forgot-password");
  };

  const handleCreateAccount = () => {
    router.push("/register");
  };

  return (
    <>
      <div className="relative bg-violet-400 h-screen text-black">
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white p-4 w-[50%] h-[60%] flex justify-around items-center rounded-xl bg-opacity-50">
          <div className="" style={{ mixBlendMode: "multiply" }}>
            <Image
              src="/images/authlogo.png"
              alt="Login Icon"
              width={450}
              height={450}
              className="opacity-80"
            />
          </div>
          <div className="flex flex-col justify-center w-[40%]">
            <div className="h-[100%]">
              <h2 className="text-2xl font-bold mb-4">Login your account</h2>
              <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <div>
                  <label
                    htmlFor="username"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Username
                  </label>
                  <input
                    type="text"
                    id="username"
                    value={userDetail.username}
                    onChange={handleInputChange}
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    placeholder="Enter your username"
                  />
                </div>
                <div className="relative">
                  <label
                    htmlFor="password"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Password
                  </label>
                  <input
                    type={showPassword ? "text" : "password"}
                    id="password"
                    value={userDetail.password}
                    onChange={handleInputChange}
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    placeholder="Enter your password"
                  />
                  <button
                    type="button"
                    onClick={togglePasswordVisibility}
                    className="absolute right-3 top-[67%] transform -translate-y-1/2 text-gray-500 hover:text-gray-700"
                  >
                    {showPassword ? (
                      <span role="img" aria-label="Hide password">
                        👁️
                      </span>
                    ) : (
                      <span role="img" aria-label="Show password">
                        🙈
                      </span>
                    )}
                  </button>
                </div>
                <div className="flex justify-between items-center text-sm">
                  <button
                    type="button"
                    onClick={handleForgotPassword}
                    className="text-indigo-600 hover:underline"
                  >
                    Forgot Password?
                  </button>
                </div>
                <button
                  type="submit"
                  className="w-full bg-indigo-600 text-white py-2 rounded-lg hover:bg-indigo-700 transition"
                >
                  Login
                </button>
              </form>
              <div className="text-center text-sm mt-1">
                <p>
                  Don’t have an account?{" "}
                  <button
                    type="button"
                    onClick={handleCreateAccount}
                    className="text-indigo-600 font-medium hover:underline"
                  >
                    Create Account
                  </button>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default page;
