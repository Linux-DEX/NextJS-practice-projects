'use client'

import isAuth from "@/Components/isAuth";

function Admin() {
  return (
    <main className="text-center h-screen flex justify-center items-center">
      <p className="text-3xl">Admin page</p>
    </main>
  );
}

export default isAuth(Admin);
