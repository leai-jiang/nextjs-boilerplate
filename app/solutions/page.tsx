"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import SolutionDetailModal from "./components/SolutionDetailModal";
import Banner from "../components/Banner";
import SectionTitle from "../components/SectionTitle";

type TabKey = "ict" | "security" | "ops" | "weak";

type SolutionDetail = {
  title: string;
  img: string;
  desc: string;
  background: string;
  customer: string;
  description: string;
  diagram?: string;
};

type ContentJson = {
  solutions: {
    tabs: { key: TabKey; label: string }[];
    list: Record<TabKey, SolutionDetail[]>;
  };
};



const SolutionsPage = () => {
  const [tab, setTab] = useState<TabKey>("ict");
  const [modalOpen, setModalOpen] = useState(false);
  const [currentSolution, setCurrentSolution] = useState<SolutionDetail | null>(null);
  const [content, setContent] = useState<ContentJson["solutions"] | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/content.json")
      .then((res) => res.json())
      .then((data) => {
        setContent(data.solutions);
        setLoading(false);
      });
  }, []);

  if (loading || !content) {
    return <div className="text-center py-[128px] text-gray-400">加载中...</div>;
  }

  return (
    <>
      <Banner
        image="/solutions_banner.jpg"
        title="以集成技术为笔，绘制行业新图景"
        subtitle="以客户需求为导向，提供个性化解决方案"
        buttonText="服务支持"
        buttonUrl="/support"
      />

      <div className="bg-white">
        {/* Core Tabs Section */}
        <div id="core" className="max-w-5xl mx-auto py-[80px] px-[16px]">
          <SectionTitle title="四大业务核心" className="mb-[32px]" />
          <div className="flex flex-wrap justify-center gap-[16px] mb-[32px]">
            {content.tabs.map((t) => (
              <button
                key={t.key}
                onClick={() => setTab(t.key)}
                className={`px-6 py-2 rounded-full border-2 text-lg font-semibold transition-colors ${tab === t.key ? 'bg-lime-400 border-lime-400 text-white' : 'bg-white border-gray-200 text-gray-700 hover:bg-lime-50'}`}
              >
                {t.label}
              </button>
            ))}
          </div>
          <div className="text-center text-gray-600 mb-[48px]">
            {tab === "ict" && <p>从网络到数据中心，提供一站式ICT集成服务，助力企业数字化转型。</p>}
            {tab === "security" && <p>全方位信息安全防护，保障数据与业务安全。</p>}
            {tab === "ops" && <p>专业运维团队，7x24小时守护您的IT系统。</p>}
            {tab === "weak" && <p>弱电工程全流程服务，打造智能化办公与生产环境。</p>}
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-[32px]">
            {content.list[tab].map((item) => (
              <div key={item.title} className="bg-white rounded-2xl shadow-lg overflow-hidden flex flex-col w-[536px] h-[553px]">
                <div className="relative w-full h-[302px]">
                  <Image src={item.img} alt={item.title} fill className="object-cover transition-transform duration-300 group-hover:scale-105" />
                </div>
                <div className="flex-1 p-[32px]">
                  <div>
                    <h3 className="text-xl font-bold mb-[16px] text-gray-800">{item.title}</h3>
                    <p className="text-gray-600 mb-[24px]">{item.desc}</p>
                  </div>
                  <button
                    onClick={() => { setCurrentSolution(item); setModalOpen(true); }}
                    className="inline-block border border-lime-400 text-lime-500 font-semibold px-[32px] py-[8px] rounded-full hover:bg-lime-400 hover:text-white transition-colors duration-300"
                  >了解更多</button>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <SolutionDetailModal visible={modalOpen} onClose={() => setModalOpen(false)} solution={currentSolution} />
      </div>
    </>
  );
};

export default SolutionsPage; 