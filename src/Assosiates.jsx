import React from "react";

const Associates = () => {
  // Example associates data
  const associates = [
    {
      name: "Fountain Gate Church",
      logo: "fgcn.png",
    },
    {
      name: "Rabacare",
      logo: "rabacare.png",
    },
    {
      name: "Mombasa Computers",
      logo: "mombasaComputers.png",
    },
    
  ];

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-6 text-center">Our Associates</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {associates.map((associate, index) => (
          <div
            key={index}
            className="flex flex-col items-center bg-white rounded-2xl shadow-md p-4"
          >
            <img
              src={associate.logo}
              alt={associate.name}
              className="w-32 h-24 object-contain mb-3"
            />
            <p className="text-lg font-medium text-gray-700">
              {associate.name}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Associates;
