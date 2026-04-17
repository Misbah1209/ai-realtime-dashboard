import React from "react";
import "./loader.css";

const Loader: React.FC = () => {
  return (
    <div className="loader-container">
      <div className="spinner" />
      <span>Loading...</span>
    </div>
  );
};

export default Loader;
