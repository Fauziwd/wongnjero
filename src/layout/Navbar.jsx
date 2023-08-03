import React from 'react';

const Navbar = () => {
  return (

<nav class="bg-white border-gray-200 dark:bg-gray-900 shadow-xl" style={{ fontFamily: 'Montserrat, sans-serif' }}>
  <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
  <a href="/" class="flex items-center">
      {/* <img src="https://flowbite.com/docs/images/logo.svg" class="h-8 mr-3" alt="Flowbite Logo" /> */}
      <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Wonk Njero✨</span>
  </a>
  <div class="flex md:order-2">

      <button type="button" data-drawer-target="drawer-navigation" data-drawer-show="drawer-navigation" aria-controls="drawer-navigation">
        <span class="sr-only"></span>
        <svg xmlns="http://www.w3.org/2000/svg" width="25" fill="currentColor" class="bi bi-three-dots-vertical text-black dark:text-white" viewBox="0 0 16 16">
        <path d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z"/>
      </svg>
    </button>
  </div>
  <div class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-cta">
  </div>
  </div>
</nav>

)};

export default Navbar;