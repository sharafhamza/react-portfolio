import React from "react";
const Container = ({ children, className }) => {
  return (
    <div
      className={`1400:max-w-1320 1200:max-w-1140 992:max-w-960 768:max-w-720 576:max-w-540 576:px-4 px-3 mx-auto ${className}`}
    >
      {children}
    </div>
  );
};

export default Container;
