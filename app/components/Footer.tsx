'use client';

import { useState } from 'react';
import FeedbackModal from './FeedbackModal';

const Footer = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  return (
    <>
      <footer className="h-[272px] bg-black text-white py-[64px] relative overflow-hidden">
        <div 
          className="absolute inset-0 z-0 opacity-10" 
          style={{ 
            backgroundImage: `url('data:image/svg+xml;charset=utf-8,<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 32 32\" width=\"32\" height=\"32\" fill=\"none\" stroke=\"%2334d399\"><path d=\"M0 .5H32V32\"/></svg>')`,
          }} 
        />
        <div className="container mx-auto px-[16px] relative z-10">
          <div className="flex flex-wrap justify-between items-start">
            <div className="w-full md:w-[400px] lg:w-[400px] mb-[40px] md:mb-[0px]">
              <h2 className="text-4xl font-bold mb-[16px]">联系我们</h2>
              <p className="text-gray-400">
                以客户为中心, 以技术为根本, 团结协作, 求真务实
              </p>
              <button
                onClick={() => setIsModalOpen(true)}
                className="mt-[32px] bg-lime-400 text-white font-bold py-[12px] px-[32px] rounded-full text-lg hover:bg-lime-500 transition-colors"
              >
                线上留言
              </button>
            </div>
            <div className="w-full md:w-[400px] lg:w-[400px]/5">
              <ul className="space-y-4 text-gray-300">
                <li className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-[24px] w-[24px] mr-[12px] mt-[4px] text-cyan-400 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 20l-4.95-5.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                  </svg>
                  <span>地址： 上海市杨浦区抚顺路360号</span>
                </li>
                <li className="flex items-center">
                   <svg xmlns="http://www.w3.org/2000/svg" className="h-[24px] w-[24px] mr-[12px] text-cyan-400 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M2.003 5.884L10 10.884l7.997-5V5.884l-7.997 5-7.997-5V5.884z" />
                    <path fillRule="evenodd" d="M18 5H2a2 2 0 00-2 2v8a2 2 0 002 2h16a2 2 0 002-2V7a2 2 0 00-2-2zM2 7v8h16V7l-8 5-8-5z" clipRule="evenodd" />
                  </svg>
                  <span>邮箱： wuz@lshinet.com.cn</span>
                </li>
                <li className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-[24px] w-[24px] mr-[12px] text-cyan-400 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.518.759a11.024 11.024 0 005.176 5.176l.76-1.518a1 1 0 011.06-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2a13 13 0 01-13-13V3z" />
                  </svg>
                  <span>电话： 176 0934 7716</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>

      {isModalOpen && <FeedbackModal onClose={() => setIsModalOpen(false)} />}
    </>
  );
};

export default Footer; 