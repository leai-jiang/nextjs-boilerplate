'use client';

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

const Header = () => {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  const navLinks = [
    { href: '/', label: '首页' },
    { href: '/business', label: '主营业务' },
    { href: '/cases', label: '项目案例' },
    { href: '/solutions', label: '解决方案' },
    { href: '/support', label: '服务支持' },
    { href: '/about', label: '关于耒石' },
  ];

  return (
    <header className="bg-white backdrop-blur-[8px] fixed top-0 left-0 w-full z-50 h-[64px]">
      <nav className="container mx-auto flex items-center justify-between py-[18px] text-[#141414]">
        <Link href="/" className="flex items-center space-x-2 text-xl font-bold">
          <Image alt='logo' src="/logo.svg" width={28} height={28} />
          <span className="ml-[8px] text-[18px] font-bold">耒石网络</span>
        </Link>
        {/* 桌面导航 */}
        <div className="hidden lg:block">
          <ul className="flex items-baseline space-x-8">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={`px-3 py-2 rounded-md text-base text-[16px] font-medium transition-colors duration-300 relative group
                    ${pathname === link.href ? 'text-blue-600' : 'text-[#141414] hover:text-blue-600'}`}
                >
                  {link.label}
                  <span className="absolute left-[14px] bottom-[4px] w-2/3 h-[1px] bg-gradient-to-r from-blue-200 to-blue-600 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left rounded-full"></span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
        {/* 移动端汉堡按钮 */}
        <button
          className="block lg:hidden p-2 rounded focus:outline-none"
          onClick={() => setMobileOpen((v) => !v)}
          aria-label="打开导航菜单"
        >
          <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
        {/* 移动端抽屉菜单 */}
        {mobileOpen && (
          <div className="fixed inset-0 z-50 bg-black/40" onClick={() => setMobileOpen(false)}>
            <div className="fixed top-0 right-0 w-64 h-full bg-white shadow-lg p-6 flex flex-col">
              <button
                className="self-end mb-6 p-2 rounded focus:outline-none"
                onClick={() => setMobileOpen(false)}
                aria-label="关闭导航菜单"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
              <ul className="flex flex-col gap-4 mt-4">
                {navLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className={`block px-3 py-2 rounded-md text-base font-medium transition-colors duration-300 ${
                        pathname === link.href
                          ? 'text-blue-600'
                          : 'text-[#141414] hover:text-blue-600'
                      }`}
                      onClick={() => setMobileOpen(false)}
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header; 