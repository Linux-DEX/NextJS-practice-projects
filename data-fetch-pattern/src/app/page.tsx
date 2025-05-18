import Home from "../components/Home.tsx";
import SuspenceComp from "../components/SuspenceComp.tsx";
import UseHook from "../components/UseHook.tsx";

export default function page() {
  return (
    <div className="h-screen bg-gray-900">
      <h1 className="font-bold text-3xl text-center my-2">Data Fetching Pattern Is CRITICAL For Every Developer</h1>
      {/* this component will take time to load whole page and don't show anything */}
      {/* <Home /> */}

      {/* it will render the static component first and then fetch todo data, so h1 todo app will appear faster */}
      {/* but we can not have client side event in this components */}
      {/* <SuspenceComp /> */}

      {/* this is new way of using `use` hooks for fetching the data, and we can use client side event */}
      <UseHook />
    </div>
  );
}
