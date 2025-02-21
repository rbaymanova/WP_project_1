import React from "react";

const FeatureCard = ({ title, description }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md w-[350px]">
      <h3 className="text-lg font-semibold text-purple-600">{title}</h3>
      <p className="text-gray-700 mt-2">{description}</p>
    </div>
  );
};

export default FeatureCard;
