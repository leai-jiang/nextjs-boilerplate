interface SectionTitleProps {
  title: string;
  subtitle?: string;
  className?: string;
}

const SectionTitle = ({ title, subtitle, className = '' }: SectionTitleProps) => (
  <div className={`text-center ${className}`}>
    <h2 className="text-[36px] font-semibold text-[#141414]">{title}</h2>
    <div className="mt-[16px] w-[80px] h-[2px] bg-lime-400 mx-auto" />
    {subtitle && <p className="mt-[24px] text-[#141414] font-[16px] leading-[1.75]">{subtitle}</p>}
  </div>
);

export default SectionTitle;