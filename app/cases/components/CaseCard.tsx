import AnimatedButton from "@/app/components/AnimatedButton";

interface CaseCardProps {
  imageUrl: string;
  title: string;
  onClick: () => void;
}

const CaseCard = ({ imageUrl, title, onClick }: CaseCardProps) => {
  return (
      <div className="w-[342px] h-[335px] bg-white rounded-2xl shadow-lg overflow-hidden group transform transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">
          <div className="relative w-full h-[192px]">
            <img className="w-full h-full" src={imageUrl} alt={title} />
          </div>
          <div className="p-[20px] text-left w-full mt-[12px]">
            <h3 className="text-[18px] font-semibold leading-[1.5] mb-[24px]">{title}</h3>
            <AnimatedButton onClick={onClick}>了解更多</AnimatedButton>
          </div>
      </div>
  );
}

export default CaseCard;