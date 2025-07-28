interface NewsItem {
  title: string;
  desc: string;
}

interface NewsModalProps {
  visible: boolean;
  onClose: () => void;
  newsItem: NewsItem | null;
}

const  NewsModal = ({ visible, onClose, newsItem }: NewsModalProps) => {
  if (!visible || !newsItem) return null;
  
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
        <div className="overflow-y-auto max-h-[700px] rounded-t-2xl">
        
          <div className="p-[20px]">
            <h2 className="text-xl font-bold mb-[12px]">{newsItem.title}</h2>
            <div className="text-gray-700 leading-relaxed" dangerouslySetInnerHTML={{ __html: newsItem.desc }} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default NewsModal;