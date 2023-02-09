import React from "react";
import Image from "next/image";

function Navbar() {
  return (
    <div className="w-full ">
      <div className="flex flex-wrap items-center mr-8 mt-4 justify-end text-sm">
        <button className="px-2 py-2 rounded   text-gray-500 hover:text-gray-700">
          <a href="#">Home</a>
        </button>
        <button className="px-2 py-2 rounded  text-gray-500 hover:text-gray-700">
          <a href="/tools">Tools</a>
        </button>
        <Image
          width="25"
          height="25"
          alt="avatar"
          className=" rounded-full ml-2  border border-gray-300 p-1"
          src="/pfp.png"
        />
      </div>
    </div>
  );
}

export default Navbar;
