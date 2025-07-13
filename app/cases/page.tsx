"use client";
import { useState } from "react";
import Image from "next/image";
import SectionTitle from "../components/SectionTitle";
import Banner from "../components/Banner";
import CaseDetailModal from "./components/CaseDetailModal";
import CaseCard from "./components/CaseCard";


const projectCases = [
    {
        title: "某交通企业数据中心建设项目",
        imageUrl: "https://images.unsplash.com/photo-1579226922365-b83c483a48e3?q=80&w=1974&auto=format&fit=crop",
        detail: {
          background: "该企业现有机房容量不足，难以支撑现有业务运行，需要新建数据中心来满足当前业务需求，以保障业务正常运转。新数据中心需满足机房建设标准，并具有低能耗、先进性、安全可靠、快速部署、观赏性高等特点。",
          process: "提供服务器、存储、网络设备的选型、采购、安装调试等服务，构建高效、可靠的数据中心基础设施。部署数据备份与恢复系统，确保企业数据的安全性和可靠性；同时提供数据中心运维服务，保障数据中心的稳定运行，支持企业的业务发展。"
        }
    },
    {
        title: "某高校网络系统升级项目",
        imageUrl: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=2070&auto=format&fit=crop",
        detail: {
          background: "高校原有网络系统老旧，无法满足现代教学和管理需求。升级项目旨在提升网络带宽、覆盖范围和安全性，支持智慧校园建设。",
          process: "对核心交换机、无线AP等设备进行升级，优化网络结构，提升整体性能。实施网络安全防护措施，保障校园网络安全。"
        }
    },
    {
        title: "某医院安全加固项目",
        imageUrl: "https://images.unsplash.com/photo-1588776814546-da631a743948?q=80&w=2070&auto=format&fit=crop",
        detail: {
          background: "医院信息系统面临数据泄露和网络攻击风险，需要进行安全加固，保障医疗数据和业务系统安全。",
          process: "部署防火墙、入侵检测、数据加密等安全设备和措施，提升医院信息系统的安全防护能力。"
        }
    },
    {
        title: "某高速公路监控系统升级项目",
        imageUrl: "https://images.unsplash.com/photo-1569317212177-161b35c056b3?q=80&w=2070&auto=format&fit=crop",
        detail: {
          background: "原有监控系统分辨率低、覆盖不足，无法满足交通管理需求。升级项目提升了监控清晰度和智能化水平。",
          process: "更换高清摄像头，部署智能分析平台，实现对交通流量、异常事件的实时监控和预警。"
        }
    },
    {
        title: "某医院网络及安全运维项目",
        imageUrl: "https://images.unsplash.com/photo-1551076805-e1869033e561?q=80&w=1932&auto=format&fit=crop",
        detail: {
          background: "医院网络系统复杂，运维压力大。项目目标是提升网络运维效率和安全性，保障医院业务连续性。",
          process: "建立运维监控平台，提供7x24小时运维服务，定期巡检和应急响应，确保医院网络安全稳定运行。"
        }
    },
];

const CasesPage = () => {
    const [modalOpen, setModalOpen] = useState(false);
    const [currentCase, setCurrentCase] = useState<typeof projectCases[0] | null>(null);
    return (
      <>
        <Banner
          image="/cases_banner.jpg"
          title="集成致「智」塑造专业、高效服务"
          subtitle="从单点技术到系统集成：我们交付的是行业信息化"
          buttonText="服务支持"
          buttonUrl="/support"
        />
        <div className="bg-white mt-[88px]">
            <SectionTitle title="案例展示" subtitle="为多元行业客户提供标准化+定制化解决方案" className="mb-[48px]" />
            <div className="container mx-auto px-[16px] pb-[96px]">
              <div className="flex items-center justify-center flex-wrap gap-[64px]">
                {projectCases.map((project) => (
                  <CaseCard
                    key={project.title}
                    imageUrl={project.imageUrl}
                    title={project.title}
                    onClick={() => { setCurrentCase(project); setModalOpen(true); }}
                  />
                ))}
              </div>
            </div>
            <CaseDetailModal visible={modalOpen} onClose={() => setModalOpen(false)} caseItem={currentCase} />
        </div>
      </>
    );
};

export default CasesPage; 