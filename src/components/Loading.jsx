import React from 'react';

const Loading = () => {
  return (
    <div className="min-h-[calc(100vh-72px)] flex items-center justify-center">
      <span className="loading loading-infinity w-[100px] text-indigo-800"></span>
    </div>
  );
};

export default Loading;