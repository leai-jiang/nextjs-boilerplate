import Image from "next/image";
import Banner from "../components/Banner";
import SectionTitle from "../components/SectionTitle";
import { PageDataType } from "./type";


export default async function SupportPage() {
  const { data } = await fetchPageData();

  return (
    <>
      <Banner {...data.banner} />
      
      <div className="bg-white min-h-screen">
        {/* 四大业务核心 */}
        <section className="max-w-5xl mx-auto pt-[64px] pb-[32px] px-4">
          <SectionTitle title="四大业务核心" subtitle="专业化定制 支撑服务" className="mb-[48px]" />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 justify-center max-w-3xl mx-auto mb-12">
            {data.tab.map(tab => (
              <div key={tab.key} className="bg-white rounded-xl shadow-md px-6 py-4 text-center font-semibold text-lg text-primary hover:bg-cyan-50 transition cursor-pointer">
                {tab.label}
              </div>
            ))}
          </div>
        </section>

        {/* 业务内容区 */}
        <section className="max-w-5xl mx-auto px-4 mb-20">
          {data.content.map((item, idx) => (
            <div key={item.title} className={`flex flex-col md:flex-row ${item.reverse ? 'md:flex-row-reverse' : ''} items-center mb-16 md:mb-24`}>
              <div className="flex-shrink-0 w-[260px] h-[260px] rounded-full overflow-hidden shadow-md bg-gray-100">
                <Image src={item.img} alt={item.title} width={260} height={260} className="object-cover w-full h-full" />
              </div>
              <div className="md:w-2/3 mt-8 md:mt-0 md:px-12 text-center md:text-left">
                <h3 className="text-xl font-bold mb-4 text-gray-800">{item.title}</h3>
                <p className="text-gray-600 mb-2 leading-relaxed">{item.desc}</p>
                <div className="text-gray-500 text-sm">联系邮箱：<a href={`mailto:${item.mail}`} className="text-cyan-700 underline">{item.mail}</a></div>
              </div>
            </div>
          ))}
        </section>

        {/* 系统集成资质 */}
        <section className="bg-gray-50 py-[64px]">
          <div className="max-w-5xl mx-auto px-4">
            <SectionTitle title="耒石网络系统集成资质" className="mb-16" />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-center">
              {data.systemCerts.map(cert => (
                <div key={cert.label} className="bg-white rounded-xl shadow-md px-8 py-6 min-w-[160px] text-center">
                  <div className="text-cyan-700 font-bold text-lg mb-2">{cert.label}</div>
                  <div className="text-gray-500 text-sm">{cert.desc}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 工程师证书 */}
        <section className="bg-gray-50 py-[64px]">
          <div className="max-w-5xl mx-auto px-4">
            <SectionTitle title="耒石网络工程师证书" className="mb-16" />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-center">
              {data.engineerCerts.map(cert => (
                <div key={cert.label} className="bg-white rounded-xl shadow-md px-8 py-6 min-w-[160px] text-center font-semibold text-cyan-700">
                  {cert.label}
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </>
  );
} 

async function fetchPageData(): Promise<{data: PageDataType}> {
  return {
    data: {
      banner: {
        image: "/support_banner.jpg",
        title: "聚焦ICT集成、信息安全、弱电工程、运维服务四大核心业务",
        subtitle: "快速响应、透明沟通、持续服务",
        buttonText: "关于耒石",
        buttonUrl: "/about",
      },
      tab: [
        { key: "ict", label: "ICT集成" },
        { key: "security", label: "信息安全" },
        { key: "ops", label: "运维服务" },
        { key: "weak", label: "弱电工程" },
      ],
      content: [
        {
          img: "/support_1.jpg",
          title: "7×24小时服务，可及时高效解决",
          desc: "专业售前人员根据每个客户的使用场景和个性化需求，寻找合适的一站式服务解决方案，简化流程、提高效率，为客户带来安全、信赖、极速的体验。",
          mail: "wuz@lshinet.com.cn",
          reverse: false,
        },
        {
          img: "/support_2.jpg",
          title: "7×24小时保障服务，快速响应客户需求",
          desc: "专业团队保障每个客户的服务品质，确保第一时间响应并反馈，在极短的时间内处理解决故障，实时监控每个客户的健康状态。",
          mail: "wuz@lshinet.com.cn",
          reverse: true,
        },
      ],   
      systemCerts: [
        { label: "ISO9001", desc: "质量管理体系认证" },
        { label: "ISO20000", desc: "IT服务管理认证" },
        { label: "ISO27001", desc: "信息安全管理体系认证" },
      ],
      engineerCerts: [
        { label: "H3CIE" },
        { label: "HCIE" },
        { label: "PMP" },
        { label: "CISAW" },
        { label: "CISP" },
        { label: "系统集成项目管理工程师" },
      ]
    }
  }
}