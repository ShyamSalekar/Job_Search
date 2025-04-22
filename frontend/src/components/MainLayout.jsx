// src/components/MainLayout.jsx
import React from "react";

const MainLayout = ({ children }) => {
  return (
    <div className="min-h-screen p-8 bg-gradient-to-br from-pink-200 via-purple-200 to-blue-200 overflow-hidden">
      <div className="max-w-7xl mx-auto">{children}</div>
    </div>
  );
};

export default MainLayout;
