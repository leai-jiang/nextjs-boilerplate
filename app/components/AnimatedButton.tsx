'use client';

import React, { ButtonHTMLAttributes, useRef } from 'react';

interface AnimatedButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  className?: string;
  showIcon?: boolean;
}

const ArrowIcon = () => (
  <svg className="ml-2 inline-block align-middle" width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M5 13L13 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M5 5H13V13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const AnimatedButton: React.FC<AnimatedButtonProps> = ({ children, className = '', showIcon = true, ...props }) => {
  const btnRef = useRef<HTMLButtonElement>(null);

  const handleMouseEnter = () => {
    btnRef.current?.classList.add('animated-btn-hover');
  };
  const handleMouseLeave = () => {
    btnRef.current?.classList.remove('animated-btn-hover');
  };

  return (
    <button
      ref={btnRef}
      className={`relative overflow-hidden px-6 py-2 rounded-[10px] border border-blue-600 text-blue-600 font-semibold transition-colors duration-300 cursor-pointer ${className}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      {...props}
    >
      {/* 背景动画层 */}
      <span
        className="animated-btn-bg absolute left-0 top-0 h-full w-full bg-blue-600 z-0"
        aria-hidden="true"
      />
      {/* 内容层 */}
      <span className="relative z-10 transition-colors duration-300 animated-btn-text flex items-center justify-center">
        {children}
        {showIcon && <ArrowIcon />}
      </span>
    </button>
  );
};

export default AnimatedButton; 