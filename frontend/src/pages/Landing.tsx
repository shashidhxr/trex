import React from 'react';

export const Landing = () => {
  return (
    <div className="flex flex-col min-h-screen bg-[#222222]">
      <section className="bg-center bg-no-repeat bg-cover bg-[url('https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-[#373A40] bg-blend-multiply flex-grow">

        <div className="px-4 mx-auto max-w-screen-xl text-center py-24 lg:py-56">
          <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-[#EEEEEE] md:text-5xl lg:text-6xl">
            We invest in the world’s potential
          </h1>
          <p className="mb-8 text-lg font-normal text-[#686D76] lg:text-xl sm:px-16 lg:px-48">
            Here at Flowbite we focus on markets where technology, innovation, and capital can unlock long-term value and drive economic growth.
          </p>
          <div className="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0">
            <a
              href="#"
              className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-[#EEEEEE] rounded-lg bg-[#DC5F00] hover:bg-[#BF4F00] focus:ring-4 focus:ring-[#DC5F00]/50 dark:focus:ring-[#BF4F00]"
            >
              Sign Up
              <svg
                className="w-3.5 h-3.5 ml-2 rtl:rotate-180"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 10"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 5h12m0 0L9 1m4 4L9 9"
                />
              </svg>
            </a>
            <a
              href="#"
              className="inline-flex justify-center items-center py-3 px-5 sm:ml-4 text-base font-medium text-center text-[#EEEEEE] rounded-lg border border-[#EEEEEE] hover:bg-[#686D76] hover:text-[#222222] focus:ring-4 focus:ring-gray-400"
            >
              Sign In
            </a>
          </div>
        </div>
      </section>

      <footer className="bg-[#373A40] rounded-lg dark:bg-[#222222] p-0">
  <div className="w-full max-w-screen-xl mx-auto md:py-1">
    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
      <a href="#" className="flex items-center text-lg font-semibold text-[#EEEEEE] mb-2 sm:mb-0">
        Trex
      </a>
      <ul className="flex space-x-3 text-xs font-medium text-[#686D76]">
        <li>
          <a href="#" className="hover:text-[#EEEEEE]">About</a>
        </li>
        <li>
          <a href="#" className="hover:text-[#EEEEEE]">Privacy</a>
        </li>
        <li>
          <a href="#" className="hover:text-[#EEEEEE]">Contact</a>
        </li>
      </ul>
    </div>
    <div className="mt-0 text-center text-xs text-[#EEEEEE]">
      <span>© 2023 <a href="#" className="hover:text-[#DC5F00]">Trex™</a>. All Rights Reserved.</span>
    </div>
  </div>
</footer>



    </div>
  );
};
