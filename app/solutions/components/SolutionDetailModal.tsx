import { SolutionDetail } from "../type";

interface SolutionDetailModalProps {
  visible: boolean;
  onClose: () => void;
  solution: SolutionDetail | null;
}

const SolutionDetailModal = ({ visible, onClose, solution }: SolutionDetailModalProps) => {
  if (!visible || !solution) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70">
      <div className="relative bg-white rounded-2xl shadow-2xl max-w-2xl w-full mx-[16px] animate-fadeIn">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 w-[40px] h-[40px] flex items-center justify-center rounded-full bg-gray-100 hover:bg-gray-200 text-2xl"
          aria-label="关闭"
        >
          ×
        </button>
        <div className="overflow-hidden rounded-t-2xl">
          <img src={solution.img} alt={solution.title} width={720} height={325} className="w-full h-[325px] object-cover" />
        </div>
        <div className="p-[32px]" dangerouslySetInnerHTML={{ __html: solution.detail }} />
      </div>
    </div>
  );
}

export default SolutionDetailModal;
