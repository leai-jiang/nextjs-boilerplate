'use client';

import { useState } from 'react';

const Footer = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <footer className="bg-black text-white py-16 relative overflow-hidden">
        <div 
          className="absolute inset-0 z-0 opacity-10" 
          style={{ 
            backgroundImage: `url('data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="32" height="32" fill="none" stroke="%2334d399"><path d="M0 .5H32V32"/></svg>')`,
          }} 
        />
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-wrap justify-between items-start">
            <div className="w-full md:w-1/2 lg:w-2/5 mb-10 md:mb-0">
              <h2 className="text-4xl font-bold mb-4">联系我们</h2>
              <p className="text-gray-400">
                以客户为中心, 以技术为根本, 团结协作, 求真务实
              </p>
              <button
                onClick={() => setIsModalOpen(true)}
                className="mt-8 bg-lime-400 text-black font-bold py-3 px-8 rounded-full text-lg hover:bg-lime-500 transition-colors"
              >
                线上留言
              </button>
            </div>
            <div className="w-full md:w-1/2 lg:w-2/5">
              <ul className="space-y-4 text-gray-300">
                <li className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-3 mt-1 text-cyan-400 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 20l-4.95-5.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                  </svg>
                  <span>地址： 上海市杨浦区抚顺路360号</span>
                </li>
                <li className="flex items-center">
                   <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-3 text-cyan-400 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M2.003 5.884L10 10.884l7.997-5V5.884l-7.997 5-7.997-5V5.884z" />
                    <path fillRule="evenodd" d="M18 5H2a2 2 0 00-2 2v8a2 2 0 002 2h16a2 2 0 002-2V7a2 2 0 00-2-2zM2 7v8h16V7l-8 5-8-5z" clipRule="evenodd" />
                  </svg>
                  <span>邮箱： wuz@lshinet.com.cn</span>
                </li>
                <li className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-3 text-cyan-400 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.518.759a11.024 11.024 0 005.176 5.176l.76-1.518a1 1 0 011.06-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2a13 13 0 01-13-13V3z" />
                  </svg>
                  <span>电话： 176 0934 7716</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>

      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center z-50 transition-opacity duration-300">
          <div className="bg-white p-8 rounded-lg shadow-2xl w-full max-w-md m-4 relative transform transition-all duration-300 scale-100">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-2xl font-bold text-gray-800">在线留言</h3>
              <button
                onClick={() => setIsModalOpen(false)}
                className="text-gray-400 hover:text-gray-800 text-3xl leading-none"
              >
                &times;
              </button>
            </div>
            <form>
              <div className="mb-4">
                <label htmlFor="name" className="block text-gray-700 text-sm font-bold mb-2">
                  姓名
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full p-3 bg-gray-100 rounded border border-gray-200 focus:outline-none focus:ring-2 focus:ring-lime-400"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="phone" className="block text-gray-700 text-sm font-bold mb-2">
                  电话
                </label>
                <input
                  type="text"
                  id="phone"
                  className="w-full p-3 bg-gray-100 rounded border border-gray-200 focus:outline-none focus:ring-2 focus:ring-lime-400"
                />
              </div>
              <div className="mb-6">
                <label htmlFor="message" className="block text-gray-700 text-sm font-bold mb-2">
                  内容
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full p-3 bg-gray-100 rounded border border-gray-200 focus:outline-none focus:ring-2 focus:ring-lime-400"
                ></textarea>
              </div>
              <div className="text-center">
                <button
                  type="submit"
                  className="bg-lime-400 text-black font-bold py-3 px-10 rounded-full hover:bg-lime-500 transition-colors"
                >
                  发送
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default Footer; 