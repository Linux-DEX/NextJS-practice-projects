"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

const page: React.FC = () => {
  const router = useRouter();
  const [email, setEmail] = useState<string>("");

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Email submitted:", email);
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
            <div className="">
              <h2 className="text-2xl font-bold mb-1">Forgot</h2>
              <h2 className="text-2xl font-bold">Your Password?</h2>
              <form
                onSubmit={handleSubmit}
                className="flex flex-col gap-6 py-6"
              >
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Email
                  </label>
                  <input
                    type="text"
                    id="email"
                    value={email}
                    onChange={handleEmailChange}
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    placeholder="Enter your email"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-indigo-600 text-white py-2 rounded-lg hover:bg-indigo-700 transition"
                >
                  Reset my password
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default page;
