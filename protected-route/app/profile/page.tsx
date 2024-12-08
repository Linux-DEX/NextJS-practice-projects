"use client";

import { isAuthenticated } from "@/Auth";
import { redirect } from "next/navigation";
import { useLayoutEffect } from "react";

export default function Home() {
  useLayoutEffect(() => {
    const isAuth = isAuthenticated;
    if (!isAuth) {
      redirect("/");
    }
  }, []);

  return (
    <main className="text-center h-screen flex justify-center items-center">
      <p className="text-3xl">profile page</p>
    </main>
  );
}
