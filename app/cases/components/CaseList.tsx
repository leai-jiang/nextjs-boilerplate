'use client';

import { useState } from "react";
import CaseCard from "./CaseCard";
import CaseDetailModal from "./CaseDetailModal";
import { ProjectCase } from "../type";

interface CaseListProps {
  cases: ProjectCase[];
}

export default function CaseList({ cases }: CaseListProps) {
  const [modalOpen, setModalOpen] = useState(false);
  const [currentCase, setCurrentCase] = useState<any | null>(null); // 替换为实际类型

  return (
    <div className="bg-white mt-[88px]">
      <div className="container mx-auto px-[16px] pb-[96px]">
        <div className="flex items-center justify-center flex-wrap gap-[64px]">
          {cases.map((project) => (
            <CaseCard
              key={project.title}
              imageUrl={project.imageUrl}
              title={project.title}
              onClick={() => {
                setCurrentCase(project);
                setModalOpen(true);
              }}
            />
          ))}
        </div>
      </div>
      <CaseDetailModal 
        visible={modalOpen} 
        onClose={() => setModalOpen(false)} 
        caseItem={currentCase} 
      />
    </div>
  );
}