import React from "react";

const ScreenWrapper = ({ children }) => {
  const dataSample = new FormData();

  return (
    <>
      <div
        className=""
        style={{
          height: "100vh",
          placeItems: "center",
        }}
      >
        {children}
      </div>
    </>
  );
};

export default ScreenWrapper;
