'use client';

import Link from 'next/link';
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
    <header className="bg-black/50 fixed top-0 left-0 w-full z-50">
      <nav className="container mx-auto flex items-center justify-between p-4 text-white">
        <Link href="/" className="flex items-center space-x-2 text-xl font-bold">
          <svg
            className="h-8 w-8 text-cyan-400"
            viewBox="0 0 105 86"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M16.3571 85.0117L2.43343 61.2238L52.5 0.988281L102.567 61.2238L88.6429 85.0117H16.3571Z" stroke="#38BDF8" strokeWidth="4"/>
            <path d="M19.3334 79.0117L52.5 24.0994L85.6667 79.0117H19.3334Z" stroke="#38BDF8" strokeWidth="4"/>
          </svg>
          <span className="ml-2">耒石网络</span>
        </Link>
        <div className="hidden md:block">
            <ul className="flex items-baseline space-x-8">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={`px-3 py-2 rounded-md text-base font-medium transition-colors duration-300 ${
                      pathname === link.href
                        ? 'text-cyan-400'
                        : 'text-gray-300 hover:text-cyan-400'
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