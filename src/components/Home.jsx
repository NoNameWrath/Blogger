import React from 'react';
import { Box } from '@mui/material';
import wave from '../assets/wave.png';
import Bookicon from '../assets/book.svg';
import { Book } from '@mui/icons-material';
import Pencilicon from '../assets/pencil.svg';
import Progressicon from '../assets/progress.svg';

const MyComponent = () => {
  return (
    <div className="container mx-auto p-4">

      {/* Safe Haven Section */}
      <Box>
        <h1 className="text-3xl text-tertiary text-center font-karla text-heading pb-8 pt-8">
          Scribe
        </h1>
        <p className="text-tertiary font-karla text-center text-para">
          Unleash your creativity. Transform thoughts into powerful narratives. Write without limits
        </p>
      </Box>

      {/* Why Scribe Section */}
      <section className="bg-white py-12 px-6 font-karla">
        <h2 className="text-3xl font-bold text-black mb-12 text-left">Why Scribe?</h2>
        <div className="flex justify-center space-x-12">
          
          {/* Write Freely Box */}
          <div className="flex flex-col items-center text-center bg-white p-8 shadow-lg rounded-lg w-72">
            <img
              src={Pencilicon} // Replace with your pencil icon
              alt="Write Freely"
              className="w-16 h-16 mb-4"
            />
            <h3 className="text-xl font-semibold mb-2">Write Freely</h3>
            <p className="text-gray-600">
              Distraction-free writing environment that inspires creativity.
            </p>
          </div>

          {/* Publish Easily Box */}
          <div className="flex flex-col items-center text-center bg-white p-8 shadow-lg rounded-lg w-72">
            <img
              src={Bookicon} // Replace with your book icon
              alt="Publish Easily"
              className="w-16 h-16 mb-4"
            />
            <h3 className="text-xl font-semibold mb-2">Publish Easily</h3>
            <p className="text-gray-600">
              Share your stories with the world in just a few clicks.
            </p>
          </div>
          <div className="flex flex-col items-center text-center bg-white p-8 shadow-lg rounded-lg w-72">
  <img
    src={Progressicon}// Change this to your icon path or import
    alt="Track Progress"
    className="w-16 h-16 mb-4"
  />
  <h3 className="text-xl font-semibold mb-2">Track Your Progress</h3>
  <p className="text-gray-600">
    Keep tabs on your writing goals and monitor your consistency.
  </p>
</div>

        </div>
      </section>
      <div class="flex justify-center">
          What are you waiting for? Create account now!
        </div>
      <div className="flex justify-center mt-8">
        
  <button className="bg-tertiary text-white px-6 py-3 text-lg rounded-lg shadow-lg hover:bg-tertiary-dark transition">
  <a href="/Register" className="text-xl text-white hover:text-gray-400 font-karla align-top">
            Create Account
          </a>
  </button>
</div>
    </div>
  );
};

export default MyComponent;
