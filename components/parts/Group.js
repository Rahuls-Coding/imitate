import React from "react";
import Link from "next/link";

function Group({ svg, title, color, text2, ext }) {
  const [showModal, setShowModal] = React.useState(false);

  return (
    <div>
      <Link onClick={() => setShowModal(true)} href={ext}>
        <div className="flex justify-items-center p-2 border border-gray-300 rounded w-60">
          <div className={color}>{svg}</div>
          <div className="text grid">
            <p className="justify-self-start w-28">{title}</p>
            <div className="arrow ml-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                />
              </svg>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default Group;
