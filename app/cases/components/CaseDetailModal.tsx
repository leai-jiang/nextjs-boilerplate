interface ProjectCase {
  title: string;
  imageUrl: string;
  detail: {
    background: string;
    process: string;
  }
}

interface CaseDetailModalProps {
  visible: boolean;
  onClose: () => void;
  caseItem: ProjectCase | null;
}

const  CaseDetailModal = ({ visible, onClose, caseItem }: CaseDetailModalProps) => {
  if (!visible || !caseItem) return null;
  
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70">
      <div className="relative bg-white rounded-2xl shadow-2xl max-w-lg w-full mx-[16px] animate-fadeIn">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 w-[40px] h-[40px] flex items-center justify-center rounded-full bg-gray-100 hover:bg-gray-200 text-2xl"
          aria-label="关闭"
        >
          ×
        </button>
        <div className="overflow-hidden rounded-t-2xl">
          <img src={caseItem.imageUrl} alt={caseItem.title} width={600} height={240} className="w-full h-[192px] object-cover" />
        </div>
        <div className="p-[32px]">
          <h2 className="text-xl font-bold mb-[24px]">案例详情</h2>
          <div className="mb-[24px]">
            <h3 className="text-lg font-bold mb-[8px]">项目背景</h3>
            <p className="text-gray-700 leading-relaxed">{caseItem.detail.background}</p>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-[8px]">项目过程</h3>
            <p className="text-gray-700 leading-relaxed">{caseItem.detail.process}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CaseDetailModal;