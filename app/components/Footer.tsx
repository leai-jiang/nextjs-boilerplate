'use client';

import { useState } from 'react';
import FeedbackModal from './FeedbackModal';

const MessageIcon = () => (
  <svg className="w-5 h-5 mr-2 inline-block align-middle" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path strokeLinecap="round" strokeLinejoin="round" d="M8 10h8M8 14h4M21 12c0 4.418-4.03 8-9 8a9.77 9.77 0 01-4-.8L3 21l1.8-4A8.96 8.96 0 013 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
  </svg>
);

const Footer = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  return (
    <>
      <footer className="h-[272px] bg-[#666] text-white py-[64px] relative overflow-hidden">
        {/* m */}
        <div className="container mx-auto px-[16px] relative z-10">
          <div className="flex flex-wrap justify-between items-end">
            <div className="w-full md:w-[400px] lg:w-[400px] mb-[40px] md:mb-[0px]">
              <h2 className="text-4xl font-bold mb-[16px]">联系我们</h2>
              <p className="text-gray-400">
                以客户为中心, 以技术为根本, 团结协作, 求真务实
              </p>
              <button
                onClick={() => setIsModalOpen(true)}
                className="mt-[12px] px-6 py-2 rounded-full font-semibold text-base transition-colors duration-300 bg-primary text-white cursor-pointer flex items-center justify-center"
              >
                <MessageIcon />
                <span className="ml-[4px]">线上留言</span>
              </button>
            </div>
            <div className="w-full md:w-[400px] lg:w-[400px]/5">
              <ul className="space-y-4 text-gray-300">
                <li className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-[24px] w-[24px] mr-[12px] mt-[4px] text-primary flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 20l-4.95-5.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                  </svg>
                  <span>地址： 上海市杨浦区抚顺路360号</span>
                </li>
                <li className="flex items-center">
                   <svg xmlns="http://www.w3.org/2000/svg" className="h-[24px] w-[24px] mr-[12px] text-primary flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M2.003 5.884L10 10.884l7.997-5V5.884l-7.997 5-7.997-5V5.884z" />
                    <path fillRule="evenodd" d="M18 5H2a2 2 0 00-2 2v8a2 2 0 002 2h16a2 2 0 002-2V7a2 2 0 00-2-2zM2 7v8h16V7l-8 5-8-5z" clipRule="evenodd" />
                  </svg>
                  <span>邮箱： hr@lshinet.com.cn</span>
                </li>
                <li className="flex items-center">
		  <span>ICP备案号：沪ICP备2025139935号</span>
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
