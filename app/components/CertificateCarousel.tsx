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

  // 计算左右索引
  const prevIndex = (index - 1 + certImages.length) % certImages.length;
  const nextIndex = (index + 1) % certImages.length;

  return (
    <div className="relative w-[360px] h-[400px] flex items-center justify-center select-none">
      {/* 左侧预览，露出90%，带缩放动画 */}
      <img
        src={certImages[prevIndex]}
        alt="prev"
        className={`absolute left-[-90px] top-1/2 -translate-y-1/2 w-[180px] h-[240px] object-contain opacity-60 z-0 transition-all duration-700 shadow-md ${index === prevIndex ? 'scale-100' : 'scale-90'}`}
        style={{ borderRadius: 12, boxShadow: '0 2px 12px 0 #94cc2922', clipPath: 'inset(0 10% 0 0)' }}
      />
      {/* 中间主图，带缩放动画 */}
      <img
        src={certImages[index]}
        alt="current"
        className={`absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[274px] h-[358px] z-10 transition-all duration-700 shadow-xl scale-100`}
        style={{ borderRadius: 16, boxShadow: '0 4px 24px 0 #94cc2944' }}
      />
      {/* 右侧预览，露出90%，带缩放动画 */}
      <img
        src={certImages[nextIndex]}
        alt="next"
        className={`absolute right-[-90px] top-1/2 -translate-y-1/2 w-[180px] h-[240px] object-contain opacity-60 z-0 transition-all duration-700 shadow-md ${index === nextIndex ? 'scale-100' : 'scale-90'}`}
        style={{ borderRadius: 12, boxShadow: '0 2px 12px 0 #94cc2922', clipPath: 'inset(0 0 0 10%)' }}
      />
      {/* 指示点 */}
      <div className="absolute bottom-[4px] left-0 right-0 flex justify-center gap-2">
        {certImages.map((_, i) => (
          <span key={i} className={`inline-block w-2 h-2 rounded-full ${i === index ? 'bg-primary' : 'bg-gray-300'}`}></span>
        ))}
      </div>
    </div>
  );
} 