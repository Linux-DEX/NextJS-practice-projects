'use client'

import React from 'react'
import Image from 'next/image';
import { useRouter } from 'next/navigation';

const page: React.FC = () => {
  const router = useRouter();

   const handleForgotPassword = () => {
     router.push("/forgot-password");
   };

   const handleCreateAccount = () => {
     router.push("/register"); 
   };

  return (
    <>
      <div className="relative bg-violet-400 h-screen text-black">
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white p-4 w-[50%] h-[60%] flex justify-center items-center gap-12 rounded-xl opacity-50">
          <div className="" style={{ mixBlendMode: "multiply" }}>
            <Image
              src="https://w7.pngwing.com/pngs/339/876/png-transparent-login-computer-icons-password-login-black-symbol-subscription-business-model-thumbnail.png"
              alt="Login Icon"
              width={200}
              height={200}
              className="opacity-80"
            />
          </div>
          <div className="flex flex-col justify-center">
            <div className="flex flex-col">
              <h1 className="text-2xl font-bold">Login</h1>
              <h1 className="text-2xl font-bold">Good Morning</h1>
            </div>
            <div className="">
              <h2 className="text-2xl font-bold">Login your account</h2>
              <form className="flex flex-col gap-4">
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
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    placeholder="Enter your username"
                  />
                </div>
                <div>
                  <label
                    htmlFor="password"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Password
                  </label>
                  <input
                    type="password"
                    id="password"
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    placeholder="Enter your password"
                  />
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
              <div className="text-center text-sm">
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
}

export default page