'use client';
import { useState } from "react";
import { SolutionDetail, SolutionType } from "../type";
import SolutionDetailModal from "./SolutionDetailModal";

interface SolutionListProps {
  solutions: SolutionType[];
}

export default function SolutionList({ solutions }: SolutionListProps) {
  const [tab, setTab] = useState("ict");
  const [modalOpen, setModalOpen] = useState(false);
  const [currentSolution, setCurrentSolution] = useState<SolutionDetail | null>(null);

  const activeSolution = solutions.find(item => item.key === tab);

  return (
    <div>
      <div className="flex flex-wrap justify-center gap-[16px] mb-[32px]">
            {solutions.map((t) => (
              <button
                key={t.category}
                onClick={() => setTab(t.key)}
                className={`px-6 py-2 rounded-full border-2 text-lg font-semibold transition-colors ${tab === t.key ? 'bg-lime-400 border-lime-400 text-white' : 'bg-white border-gray-200 text-gray-700 hover:bg-lime-50'}`}
              >
                {t.category}
              </button>
            ))}
      </div>

      <div className="text-center text-gray-600 mb-[48px]">
        <p>{activeSolution?.desc}</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-[32px]">
        {activeSolution?.cases.map((item) => (
          <div key={item.title} className="bg-white rounded-2xl shadow-lg overflow-hidden flex flex-col w-[536px] h-[553px]">
            <div className="relative w-full h-[302px]">
              <img src={item.img} alt={item.title} className="object-cover transition-transform duration-300 group-hover:scale-105" />
            </div>
            <div className="flex-1 p-[32px]">
              <div>
                <h3 className="text-xl font-bold mb-[16px] text-gray-800">{item.title}</h3>
                <p className="text-gray-600 mb-[24px]">{item.intro}</p>
              </div>
              <button
                onClick={() => { setCurrentSolution(item); setModalOpen(true); }}
                className="inline-block border border-lime-400 text-lime-500 font-semibold px-[32px] py-[8px] rounded-full hover:bg-lime-400 hover:text-white transition-colors duration-300"
              >了解更多</button>
            </div>
          </div>
        ))}
      </div>

      <SolutionDetailModal visible={modalOpen} onClose={() => setModalOpen(false)} solution={currentSolution} />
    </div>
  )
}