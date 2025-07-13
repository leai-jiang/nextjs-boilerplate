"use client";
import { useState, useEffect } from 'react';

const certImages = [
  '/home_cert_1.png',
  '/home_cert_2.png',
  '/home_cert_3.png',
  '/home_cert_4.png',
  '/home_cert_5.png',
];

export default function CertificateCarousel() {
  const [index, setIndex] = useState(0);
  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % certImages.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);
  return (
    <div className="relative w-[320px] h-[340px] flex items-center justify-center">
      {certImages.map((src, i) => (
        <img
          key={src}
          src={src}
          alt={`证书${i+1}`}
          className={`absolute left-0 top-0 w-[320px] h-[340px] object-contain transition-all duration-700 ${i === index ? 'opacity-100 z-10 scale-100' : 'opacity-0 z-0 scale-95'}`}
          style={{ boxShadow: i === index ? '0 4px 24px 0 #297FCC22' : 'none', borderRadius: 16 }}
        />
      ))}
      {/* 指示点 */}
      <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2">
        {certImages.map((_, i) => (
          <span key={i} className={`inline-block w-2 h-2 rounded-full ${i === index ? 'bg-lime-400' : 'bg-gray-300'}`}></span>
        ))}
      </div>
    </div>
  );
} 