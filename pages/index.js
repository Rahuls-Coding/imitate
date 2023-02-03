import Head from "next/head";
import Meta from "../components/Meta";
import Navbar from "../components/Navbar";
import Group from "../components/parts/Group";

export default function Home() {
  const user = "User";

  return (
    <div>
      <Meta title="Imitate" />
      <Navbar />
      <div>
        <h1 className="flex flex-col justify-center items-start max-w-3xl sm:mx-auto pb-16 mx-6 mt-4">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white mt-4">
              {" "}
              Welcome {user}!
            </h1>
          </div>
          <div className='text-xl font-semibold mt-12'>
            Get started with...
          </div>
          <div className="mt-6 grid grid-cols-2 gap-8">
            <div>
              <svg xmlns="http://www.w3.org/2000/svg" fill="lightgreen" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M9 6.75V15m6-6v8.25m.503 3.498l4.875-2.437c.381-.19.622-.58.622-1.006V4.82c0-.836-.88-1.38-1.628-1.006l-3.869 1.934c-.317.159-.69.159-1.006 0L9.503 3.252a1.125 1.125 0 00-1.006 0L3.622 5.689C3.24 5.88 3 6.27 3 6.695V19.18c0 .836.88 1.38 1.628 1.006l3.869-1.934c.317-.159.69-.159 1.006 0l4.994 2.497c.317.158.69.158 1.006 0z" />
                </svg>
              <div className="mt-3">
                <h3> Introduction Guide </h3>
                <p className="text-sm pt-2 w-6/8">This guide provides an overview of the key AI models in the app and explains their basic functionality, and helps understand how they can be utilized to enhance their experience. This introduction is the perfect starting point for those new to AI.</p>
                <p className="text-sm text-sky-500 pt-2 hover:underline cursor-pointer underline-offset-2 w-fit">Read Guide →</p>
              </div>
            </div>
            <div>
            <svg xmlns="http://www.w3.org/2000/svg" fill="orange" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />
</svg>

              <div className="mt-3">
                <h3> API Guide </h3>
                <p className="text-sm pt-2 w-6/8">This guide offers a comprehensive explanation of the API endpoints available in the app, including details on input parameters, outputs, and usage examples. It serves as a helpful reference for developers looking to integrate the app&#39;s functionality into their own projects.</p>
                <p className="text-sm text-sky-500 pt-2 hover:underline cursor-pointer underline-offset-2 w-fit">Read Guide →</p>
              </div>
            </div>

          </div>
        </h1>
      </div>
    </div>
  );
}
