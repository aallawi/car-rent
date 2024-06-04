"use client";

import React, { useState, useEffect } from "react";
import { HashLoader } from "react-spinners";

const Loader = ({ children }) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  return (
    <>
      {loading ? (
        <div className="flex items-center justify-center w-screen h-screen">
          <HashLoader color="#36d7b7" size={100} />
        </div>
      ) : (
        children
      )}
    </>
  );
};

export default Loader;
