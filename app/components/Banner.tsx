import Link from "next/link"
import Image from "next/image"

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
      {/* 背景大图 */}
      <Image src={image} alt="Banner" fill className="object-cover object-center z-0" priority />
      {/* 左侧渐变遮罩增强可读性 */}
      <div className="absolute inset-0 z-10 bg-gradient-to-r from-white/90 via-white/70 to-transparent" />
      {/* 文字内容 */}
      <div className="max-w-[1440px] mx-auto">
        <div className="relative z-20 flex flex-col justify-center pl-[96px] w-full max-w-[700px]">
          <h1 className="text-[40px] font-bold text-[#222] leading-tight mb-[24px]">{title}</h1>
          <p className="text-[18px] text-[#666] mb-[40px]">{subtitle}</p>
          <Link href={buttonUrl} className="w-[144px] h-[44px] bg-lime-400 text-white font-medium rounded-full text-[16px] hover:bg-lime-500 transition-colors flex items-center justify-center">
            {buttonText}
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Banner;