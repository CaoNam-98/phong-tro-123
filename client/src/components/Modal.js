import React from "react";

const Modal = () => {
  return (
    <div className="fixed top-0 left-0 right-0 bottom-0 bg-overlay-70 z-20 flex items-center justify-center">
      <div className="w-1/3 bg-white rounded-md">
        <div className="h-[45px]">Site</div>
      </div>
    </div>
  );
};

export default Modal;
