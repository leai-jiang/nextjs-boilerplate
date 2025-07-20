import Link from "next/link";
import Banner from "./components/Banner";
import SectionTitle from "./components/SectionTitle";
import CertificateCarousel from './components/CertificateCarousel';
import AnimatedButton from "./components/AnimatedButton";
import { PageDataType } from "./type";
import styles from './page.module.css';


export default async function Home() {
  const { data } = await fetchPageData();

  return (
    <main>
      <Banner {...data.banner} />

      {/* 四大核心业务 Section */}
      <section className="py-[96px] bg-white">
          <div className="container mx-auto px-[16px]">
              <SectionTitle title="四大核心业务" className="mb-[48px]" />
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[48px]">
                  {data.coreBusinesses.map((business, index) => (
                                              <div key={index} className="text-center p-[32px] rounded-lg hover:shadow-xl transition-shadow duration-300 group">
                            <div className="p-[16px] inline-block bg-cyan-100/50 rounded-full mb-[16px] overflow-hidden">
                                <img src={business.icon} className="w-[72px] h-[72px] transition-transform duration-300 ease-in-out group-hover:scale-110" />
                            </div>
                          <h3 className="text-[24px] font-semibold mb-[8px] text-[#141414]">{business.title}</h3>
                          <p className="text-[16px] text-[#141414] leading-[1.75] font-normal">{business.description}</p>
                      </div>
                  ))}
              </div>
              <div className="w-full flex items-center justify-center">
                <div className="text-center mt-[64px] w-[184px] h-[56px]">
                    <Link href="/business"><AnimatedButton>了解更多</AnimatedButton></Link>
                </div>
              </div>
          </div>
      </section>

      {/* 核心竞争力 Section */}
      <section className="py-[96px]">
          <div className="container mx-auto px-[16px]">
              <SectionTitle title="核心竞争力" />
              <div className="grid grid-cols-1 md:grid-cols-2 gap-[48px] items-center">
                  <div className="w-[520px] h-[600px] overflow-hidden">
                      <img src="/home_core_competition.jpg" alt="核心竞争力" className="w-full h-auto object-cover"/>
                  </div>
                  <div>
                      <ul className="space-y-8">
                        {data.coreCompetencies.map((item, index) => (
                          <li key={index} className="flex items-center">
                            <div className="flex-shrink-0 mr-[24px]">
                              <div className="w-[48px] h-[48px] text-white flex items-center justify-center rounded-full font-bold text-xl bg-primary bg-gradient-to-b from-white/30 to-transparent">
                                {index + 1}
                              </div>
                            </div>
                            <div>
                              <h4 className="text-2xl font-semibold leading-[1.5] text-[#141414] mb-[4px]">{item.title}</h4>
                              <p className="text-[#141414] leading-[1.75] text-[16px]">{item.description}</p>
                            </div>
                          </li>
                        ))}
                      </ul>
                  </div>
              </div>
          </div>
      </section>

      {/* 我们的客户 Section */}
      <section className="py-[96px]">
          <div className="container mx-auto px-[16px]">
              <SectionTitle title="我们的客户" />
              <p className="mt-[24px] text-center max-w-[560px] text-[#141414] text-[16px] leading-[1.75] mx-auto mb-[64px]">
                  业务网络涉及医疗卫生行业、运营商、教育、非营利组织等多个行业，凭借雄厚的技术实力、健全的服务网络为行业客户提供方位、全流程场景的场景化服务。
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-[32px] mb-[64px]">
                {data.clientBlocks.map((block) => (
                  <div key={block.label} className={`relative mt-[90px] px-[24px] pt-[126px] w-[342px] h-[430px] ${styles['ourcustomer__card']}`}>
                    <div className={`absolute -top-[90px] left-[81px] rounded-full bg-white flex flex-col justify-center items-center w-[180px] h-[180px] text-primary ${styles['ourcustomer__card__icon']}`}>
                      <p className="font-lobster text-[48px] font-bold leading-[64px]">{block.value}</p>
                      <p className="text-[24px] font-semibold leading-[1.5]">{block.label}</p>
                    </div>
                    <div className="w-[300px] h-[280px]">
                      <img
                        src={block.img}
                        alt={block.label}
                        className="w-full h-full"
                      />
                    </div>
                  </div>
                ))}
              </div>
          </div>
      </section>

      {/* 关于我们 Section */}
      <section className="py-[96px]">
        <div className="container mx-auto px-[16px]">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-[48px] items-center">
            {/* 左侧介绍 */}
            <div>
              <div className="text-left">
                <h2 className="text-[36px] font-semibold text-[#141414]">关于我们</h2>
                <div className="mt-[16px] w-[80px] h-[2px] bg-primary mb-[24px]"></div>
              </div>
              <p className="text-[#141414] text-[16px] leading-[1.75] mb-[200px]">
                上海耒石网络科技有限公司成立于2020年12月17日，主营业务为信息安全、网络技术研究发展、系统集成服务、弱电工程等。拥有丰富的项目经验和技术，以及雄厚的售后服务实力，为用户提供网络平台、系统平台、应用平台等全方位、高品质、有效的整体性技术服务，服务对象涉及政府、卫生、教育、企业等行业。
              </p>
              <Link href="/about"><AnimatedButton>了解更多</AnimatedButton></Link>
              
            </div>
            {/* 右侧证书轮播 */}
            <div className="flex justify-center relative w-full h-[340px]">
              <CertificateCarousel />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

async function fetchPageData(): Promise<{ data: PageDataType }> {
  return {
    data: {
      banner: {
        image: "/home_banner.jpg",
        title: "聚力精进技术，同心服务客户",
        subtitle: "聚力精进技术，同心服务客户",
        buttonText: "查看案例",
        buttonUrl: "/cases",
      },
      coreBusinesses: [
        {
            icon: "/home_tab_1.png",
            title: "ICT集成",
            description: "从需求分析、方案设计、项目管理、安装、调试、运行、维护等各个环节提供产品及系统技术方案，为客户提供顶级的、可靠的系统服务。",
        },
        {
            icon: "/home_tab_2.png",
            title: "信息安全",
            description: "基于等级保护、咨询、顾问、渗透、代码审计、安全咨询检测、方案设计以及产品与解决方案集成服务。",
        },
        {
            icon: "/home_tab_3.png",
            title: "运维服务",
            description: "提供IT基础运维、维保、系统优化、安全服务、系统迁移等专项技术服务。",
        },
        {
            icon: "/home_tab_4.png",
            title: "弱电工程",
            description: "提供弱电综合布线、弱电工程、综合布线、楼宇对讲系统、综合布线与监控系统、消防弱电与防盗系统等解决方案。",
        },
      ],
      coreCompetencies: [
        {
          title: "标准化的服务体系",
          description: "提供标准化的服务流程，结合企业及行业需求形成可定义、可衡量、可预测的服务。"
        },
        {
          title: "专业化的技术团队",
          description: "通过多计算机、网络、安全等资质多个领域，自有资深的技术专家和丰富的实战经验。"
        },
        {
          title: "强化内外部培训",
          description: "组织技术人员参加原厂专业培训，使IT工程师及专业资质、增强团队整体实力。"
        },
        {
          title: "全生命周期服务",
          description: "实现“交付+运维服务”的一站式服务模式，降低客户服务成本。"
        },
      ],
      clientBlocks: [
        {
          value: "100+",
          label: "服务客户",
          img: "/home_ourcustom_03.png",
        },
        {
          value: "1000+",
          label: "完成项目",
          img: "/home_ourcustom_02.png",
        },
        {
          value: "60+",
          label: "专业认证",
          img: "/home_ourcustom_01.png",
        },
      ],
    }
  }
}