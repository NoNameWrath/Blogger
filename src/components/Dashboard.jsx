import React from 'react';

const Dashboard = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="p-8 bg-white rounded shadow-md w-96">
        <h1 className="text-3xl font-bold text-center text-indigo-600">Welcome to Your Dashboard!</h1>
        <p className="mt-4 text-center text-gray-700">You have successfully logged in. 🎉</p>
      </div>
    </div>
  );
};

export default Dashboard;
