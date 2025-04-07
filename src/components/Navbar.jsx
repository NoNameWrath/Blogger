import React from 'react';
import Login from './Login';

const MyComponent = () => {
  return (
    <nav
      className="flex flex-col text-center bg-tertiary sm:flex-row sm:text-left px-12 py-5 shadow sm:items-center w-full"
    >
        <div className="flex text-xl font-karla text-white items-center justify-start">
        <a href="/" className="text-xl text-white hover:text-gray-400 font-karla align-top">

            scribe
            </a>
        </div>

      <div className="flex justify-end items-center space-x-8 w-full">
        <div>
          <a href="/login" className="text-xl text-white hover:text-gray-400 font-karla align-top">
            login
          </a>
        </div>
      </div>
    </nav>
  );
};

export default MyComponent;
