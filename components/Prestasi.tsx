import React from "react";

const Prestasi = () => {
  return (
    <div className="mt-6 w-96 rounded-lg shadow-lg overflow-hidden border border-gray-200">
      <div className="h-56 relative">
        <img
          src="https://images.unsplash.com/photo-1540553016722-983e48a2cd10?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
          alt="card-image"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-4">
        <h5 className="text-blue-700 text-xl font-semibold mb-2">UI/UX Review Check</h5>
        <p className="text-gray-700">
          Tempat ini dekat dengan Pantai Barceloneta dan halte bus hanya 2 menit jalan kaki serta dekat dengan "Naviglio" di mana Anda dapat menikmati kehidupan malam utama di Barcelona.
        </p>
      </div>
      <div className="p-4 pt-0">
        <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
          Baca Selengkapnya
        </button>
      </div>
    </div>
  );
};

export default Prestasi;
