'use client';

import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';

const images = [
  "/images/gallery/DSC00278.JPG",
  "/images/gallery2.jpg",
  "/images/gallery3.jpg",
  "/images/gallery4.jpg",
  "/images/gallery5.jpg",
  "/images/gallery6.jpg",
];

export default function GalleryPage() {
  return (
    <main className="p-6">
      <h1 className="text-3xl font-bold mb-6">Galeri</h1>
      <PhotoProvider>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {images.map((src, index) => (
            <PhotoView key={index} src={src}>
              <img
                src={src}
                alt={`Gallery ${index + 1}`}
                className="w-full h-64 object-cover rounded-lg cursor-pointer hover:opacity-80 transition"
              />
            </PhotoView>
          ))}
        </div>
      </PhotoProvider>
    </main>
  );
}
