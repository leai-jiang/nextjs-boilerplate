type SolutionDetail = {
  title: string;
  img: string;
  desc: string;
  background: string;
  customer: string;
  description: string;
  diagram?: string;
};

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
        <div className="p-[32px]">
          <h2 className="text-2xl font-bold mb-[16px]">{solution.title}</h2>
          <p className="mb-[16px] text-gray-700 leading-relaxed">{solution.desc}</p>
          <h3 className="text-lg font-bold mb-[8px]">方案背景</h3>
          <p className="mb-[16px] text-gray-700 leading-relaxed">{solution.background}</p>
          <h3 className="text-lg font-bold mb-[8px]">客户需求</h3>
          <p className="mb-[16px] text-gray-700 leading-relaxed">{solution.customer}</p>
          <h3 className="text-lg font-bold mb-[8px]">方案描述</h3>
          <p className="mb-[16px] text-gray-700 leading-relaxed">{solution.description}</p>
          {solution.diagram && (
            <div className="mt-[24px] flex justify-center">
              <img src={solution.diagram} alt="方案图" width={400} height={120} className="rounded-lg shadow" />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default SolutionDetailModal;
