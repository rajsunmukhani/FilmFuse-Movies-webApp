import React from 'react'

const NotFoundPage = () => {
    return (
      <div className="flex h-full w-full flex-col items-center justify-center h-screen bg-gray-100">
        <div className="number relative bg-white font-bold text-[30vmin] leading-none tracking-[5vmin]">
          404
        </div>
        <div className="text text-center mt-4">
          <span className="block text-[10vmin]">Ooops...</span>
          <br />
          <span>Page Not Found</span>
        </div>
      </div>
    );
  };
  
  export default NotFoundPage