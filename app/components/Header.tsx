'use client';

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

const Header = () => {
  const pathname = usePathname();

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
        <div className="hidden md:block">
            <ul className="flex items-baseline space-x-8">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={`px-3 py-2 rounded-md text-base text-[16px] font-medium transition-colors duration-300 ${
                      pathname === link.href
                        ? 'text-[#94CC29]'
                        : 'text-[#141414] hover:text-[#94CC29]'
                    }`}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header; 