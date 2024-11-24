import React from "react";

const NotFound = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-red-600">
          404 - Page Not Found
        </h1>
        <p className="mt-4 text-lg">
          Sorry, the page you're looking for doesn't exist.
        </p>
      </div>
    </div>
  );
};

export default NotFound;
