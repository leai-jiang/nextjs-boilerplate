import Link from "next/link";
import Image from "next/image";

const SectionTitle = ({ children }: { children: React.ReactNode }) => (
  <div className="text-center mb-16">
    <h2 className="text-3xl md:text-4xl font-bold text-gray-900">{children}</h2>
    <div className="mt-4 w-20 h-1 bg-lime-400 mx-auto" />
  </div>
);

const IctIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-cyan-500 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}><path strokeLinecap="round" strokeLinejoin="round" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>;
const SecurityIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-cyan-500 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}><path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>;
const OpsIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-cyan-500 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}><path strokeLinecap="round" strokeLinejoin="round" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" /><path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /></svg>;
const EngineeringIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-cyan-500 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}><path strokeLinecap="round" strokeLinejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" /></svg>;

const coreBusinesses = [
    {
        icon: <IctIcon />,
        title: "ICT集成",
        description: "从需求分析、方案设计、项目管理、安装、调试、运行、维护等各个环节提供产品及系统技术方案，为客户提供顶级的、可靠的系统服务。",
    },
    {
        icon: <SecurityIcon />,
        title: "信息安全",
        description: "基于等级保护、咨询、顾问、渗透、代码审计、安全咨询检测、方案设计以及产品与解决方案集成服务。",
    },
    {
        icon: <OpsIcon />,
        title: "运维服务",
        description: "提供IT基础运维、维保、系统优化、安全服务、系统迁移等专项技术服务。",
    },
    {
        icon: <EngineeringIcon />,
        title: "弱电工程",
        description: "提供弱电综合布线、弱电工程、综合布线、楼宇对讲系统、综合布线与监控系统、消防弱电与防盗系统等解决方案。",
    },
];

const coreCompetencies = [
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
];

const clientStats = [
  { value: "100+", label: "服务客户" },
  { value: "1000+", label: "完成项目" },
  { value: "60+", label: "专业认证" },
]

const clientLogos = [
  '/clients/logo1.svg', '/clients/logo2.svg', '/clients/logo3.svg', '/clients/logo4.svg', '/clients/logo5.svg', '/clients/logo6.svg',
  '/clients/logo7.svg', '/clients/logo8.svg', '/clients/logo9.svg', '/clients/logo10.svg', '/clients/logo11.svg', '/clients/logo12.svg',
];

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <div className="relative bg-black text-white min-h-screen flex flex-col justify-center items-center text-center -mt-24 pt-24">
        <div 
            className="absolute inset-0 z-0 opacity-20" 
            style={{ 
                backgroundImage: `url('data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="32" height="32" fill="none" stroke="%2334d399"><path d="M0 .5H32V32"/></svg>')`,
            }} 
        />
        <div className="relative z-10 flex flex-col justify-center items-center text-center px-4">
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight">聚力精进技术, 同心服务客户</h1>
            <p className="mt-6 text-lg md:text-xl text-gray-300 max-w-2xl">以客户需求为导向, 提供个性化解决方案</p>
            <Link href="/cases" className="mt-8 inline-block bg-lime-400 text-black font-bold py-3 px-8 rounded-full text-lg hover:bg-lime-500 transition-colors">
                查看案例
            </Link>
        </div>
      </div>

      <main className="bg-white">
        {/* 四大核心业务 Section */}
        <section className="py-24">
            <div className="container mx-auto px-4">
                <SectionTitle>四大核心业务</SectionTitle>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
                    {coreBusinesses.map((business, index) => (
                        <div key={index} className="text-center p-8 rounded-lg hover:shadow-xl transition-shadow duration-300">
                            <div className="p-4 inline-block bg-cyan-100/50 rounded-full mb-4">
                                {business.icon}
                            </div>
                            <h3 className="text-xl font-bold mb-2">{business.title}</h3>
                            <p className="text-gray-600 text-sm">{business.description}</p>
                        </div>
                    ))}
                </div>
                <div className="text-center mt-16">
                    <Link href="/business" className="bg-lime-400 text-black font-bold py-3 px-8 rounded-full text-lg hover:bg-lime-500 transition-colors">
                        了解更多
                    </Link>
                </div>
            </div>
        </section>

        {/* 核心竞争力 Section */}
        <section className="py-24 bg-gray-50">
            <div className="container mx-auto px-4">
                <SectionTitle>核心竞争力</SectionTitle>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <div className="rounded-lg overflow-hidden shadow-lg">
                        <Image src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2071&auto=format&fit=crop" alt="核心竞争力" width={600} height={400} className="w-full h-auto object-cover"/>
                    </div>
                    <div>
                        <ul className="space-y-8">
                          {coreCompetencies.map((item, index) => (
                            <li key={index} className="flex">
                              <div className="flex-shrink-0 mr-6">
                                <div className="w-12 h-12 bg-cyan-500 text-white flex items-center justify-center rounded-full font-bold text-xl">
                                  {index + 1}
                                </div>
                              </div>
                              <div>
                                <h4 className="text-xl font-bold mb-1">{item.title}</h4>
                                <p className="text-gray-600">{item.description}</p>
                              </div>
                            </li>
                          ))}
                        </ul>
                    </div>
                </div>
            </div>
        </section>

        {/* 我们的客户 Section */}
        <section className="py-24">
            <div className="container mx-auto px-4">
                <SectionTitle>我们的客户</SectionTitle>
                <p className="text-center text-gray-600 max-w-3xl mx-auto mb-16">
                    业务网络涉及医疗卫生行业、运营商、教育、非营利组织等多个行业，凭借雄厚的技术实力、健全的服务网络为行业客户提供方位、全流程场景的场景化服务。
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16 text-center">
                  {clientStats.map((stat) => (
                    <div key={stat.label} className="p-8">
                       <div className="w-40 h-40 mx-auto rounded-full bg-gray-100 flex flex-col justify-center items-center shadow-md">
                          <p className="text-4xl font-bold text-cyan-500">{stat.value}</p>
                          <p className="text-gray-600 mt-2">{stat.label}</p>
                       </div>
                    </div>
                  ))}
                </div>
                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 items-center grayscale opacity-60">
                    {clientLogos.map((logo, index) => (
                        <div key={index} className="flex justify-center">
                            <Image src={`https://via.placeholder.com/150x60.png?text=Client+${index+1}`} alt={`Client ${index+1}`} width={120} height={50} className="object-contain" />
                        </div>
                    ))}
                </div>
            </div>
        </section>

        {/* 关于我们 Section */}
        <section className="py-24 bg-gray-50">
            <div className="container mx-auto px-4">
                <SectionTitle>关于我们</SectionTitle>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <div>
                        <p className="text-gray-600 mb-6 leading-relaxed">
                           上海耒石网络科技有限公司成立于2020年12月17日。主营业务为信息安全、网络安全的研究与应用、系统集成、弱电工程、楼宇安防监控的工程应用与服务。公司拥有专业的技术团队，依托雄厚的技术实力，以创新的商业模式为客户提供全方位、一站式服务，为用户的网络平台、系统平台等业务方位、高品质、高效率的整体信息技术服务，服务对象涉及政府、卫生、教育、文旅等行业。
                        </p>
                        <Link href="/about" className="bg-lime-400 text-black font-bold py-3 px-8 rounded-full text-lg hover:bg-lime-500 transition-colors">
                            了解更多
                        </Link>
                    </div>
                    <div className="flex justify-center">
                        <Image src="https://images.unsplash.com/photo-1576267423445-b2e0074d68a4?q=80&w=2070&auto=format&fit=crop" alt="关于我们" width={500} height={350} className="rounded-lg shadow-lg" />
                    </div>
                </div>
            </div>
        </section>
      </main>
    </>
  );
}
