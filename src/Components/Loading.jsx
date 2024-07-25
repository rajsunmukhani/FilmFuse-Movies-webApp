import React from 'react';

const Loading = () => {
  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-[#1F1E24]">
      <div className="uib-container">
        <div className="newtons-cradle relative flex items-center justify-center">
          <div className="newtons-cradle__dot relative flex items-center"></div>
          <div className="newtons-cradle__dot relative flex items-center"></div>
          <div className="newtons-cradle__dot relative flex items-center "></div>
          <div className="newtons-cradle__dot relative flex items-center "></div>
        </div>
      </div>
    </div>
  );
};

export default Loading;
