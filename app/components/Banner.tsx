'use client';

import Link from "next/link"
import Image from "next/image"
import AnimatedButton from '../components/AnimatedButton';
import { motion } from 'framer-motion';

interface BannerProps {
  image: string;
  title: string;
  subtitle: string;
  buttonText: string;
  buttonUrl: string;
}

const Banner = ({ image, title, subtitle, buttonText, buttonUrl }: BannerProps) => {
  return (
    <div className="mt-[64px] relative w-full h-[388px] flex items-center bg-[#F7F8F9] overflow-hidden">
      <div className="absolute inset-0 z-0 bg-[#00519A]" />
      {/* 背景大图 */}
      <Image src={image} alt="Banner" fill className="object-cover object-center z-0" priority />
      {/* 文字内容 */}
      <div className="w-[1440px] mx-auto">
        <div className="relative z-20 flex flex-col justify-center pl-[96px] w-full max-w-[700px]">
          <motion.h1
            className="text-[40px] font-bold text-white leading-tight mb-[24px]"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
          >
            {title}
          </motion.h1>
          <motion.p
            className="text-[18px] text-white mb-[40px]"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut', delay: 0.15 }}
          >
            {subtitle}
          </motion.p>
          <Link href={buttonUrl}><AnimatedButton>{buttonText}</AnimatedButton></Link>
        </div>
      </div>
    </div>
  )
}

export default Banner;