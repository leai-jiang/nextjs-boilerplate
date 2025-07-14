import Image from "next/image";
import Banner from "../components/Banner";
import SectionTitle from "../components/SectionTitle";
import { PageDataType } from "./type";


export default async function BusinessPage() {
    const { data } = await fetchPageData();

    return (
        <main>
            <Banner {...data.banner} />
            
            {/* ICT集成 Section */}
            <section className="py-[96px]">
                <SectionTitle title="ICT集成" className="mb-[48px]" />
                <div className="container mx-auto w-[1120px]">
                    <div className="bg-white rounded-2xl border-2 border-dashed border-[#B6D9F7] p-[16px] mx-auto">
                        <div className="text-center mb-[16px]">
                            <div className="text-[24px] font-semibold text-[#297FCC] mb-2">ICT集成业务架构</div>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-4 gap-[10px]">
                            {data.ict.map((item, i) => (
                                <div className="bg-[#F7FAFE] rounded-xl p-[16px] flex flex-col items-center" key={i}>
                                    <div className="text-[#297FCC] font-bold text-[24px] mb-4">{item.category}</div>
                                    <div className="flex flex-col gap-3 w-full">
                                        {item.subCategories.map(subcate => (
                                            <div className="bg-[#E6F2FE] text-[#297FCC] rounded-lg py-2 text-center text-base font-normal" key={subcate}>{subcate}</div>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
            
            {/* 信息安全 Section */}
            <section className="py-[96px]">
                <div className="container mx-auto">
                    <SectionTitle title="信息安全" className="mb-[48px]" />
                    <div className="bg-white rounded-2xl border-2 border-dashed border-[#B6D9F7] p-[16px] mx-auto w-[1120px] overflow-hidden">
                        {/* 顶部大标题 */}
                        <div className="w-full h-[49px] leading-[49px] bg-[#297FCC] text-white text-center text-lg md:text-xl font-bold rounded-xl mb-4">{data.infoSecurity.title}</div>
                        
                        {/* 体系 */}
                        <div className="flex items-center justify-between gap-[10px]">
                            {data.infoSecurity.subtitles.map(subtitle => (
                                <div className="h-[54px] leading-[54px] bg-[#E6F2FE] text-[#297FCC] rounded-lg text-center text-[20px] font-semibold flex-1" key={subtitle}>{subtitle}</div>
                            ))}
                        </div>

                        {/* 体系与方案内容 */}
                        <div className="flex-1 grid grid-cols-1 md:grid-cols-4 gap-4 rounded-2xl bg-[#297FCC]/10 my-[16px] p-[16px]">
                            {/* 安全策略体系 */}
                            {data.infoSecurity.solutions.map(item => (
                                <div className="h-[45px] leading-[45px] bg-[#297FCC]/10 text-[#297FCC] rounded-lg text-center text-sm font-medium">{item}</div>
                            ))}
                        </div>

                        {/* 安全组织体系 */}
                        <div className="flex gap-[16px]">
                            {data.infoSecurity.categories.map(item => (
                                <div className="bg-[#E6F2FE] p-[16px] rounded-xl flex flex-col items-center flex-1" key={item.category}>
                                    <div className="bg-[#297FCC] w-full text-white h-[49px] leading-[49px] text-[20px] font-semibold rounded-2xl text-center mb-[16px]">{item.category}</div>
                                    <div className="flex flex-col gap-2 w-full">
                                        {item.subCategories.map(subcate => (
                                            <div className="text-[#297FCC] text-[14px] leading-[1.5] text-center" key={subcate}>{subcate}</div>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                        
                    </div>
                    
                    {/* 底部四大服务按钮 */}
                    <div className="bg-white rounded-2xl border-2 border-dashed border-[#B6D9F7] p-[16px] mx-auto mt-[16px] w-[1120px]">
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                            {data.infoSecurity.services.map(service => (
                                <div className="bg-[#297FCC] text-white rounded-lg h-[49px] leading-[49px] text-[20px] text-center font-semibold" key={service}>{service}</div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* 弱电工程 Section */}
            <section className="py-[96px] bg-gray-50">
                <SectionTitle title="弱电工程" subtitle="机房建设、综合布线、门禁、安防、会议室、广播等" />
                <div className="container mx-auto px-[16px] w-[1120px]">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 max-w-5xl mx-auto mt-8 items-stretch">
                        {/* 左侧大图 */}
                        <div className="w-[334px] h-[595px]">
                            <Image src="/business_1.jpg" alt="弱电工程1" width={334} height={595} className="rounded-xl object-cover w-full h-full border border-primary" />
                        </div>
                        {/* 中间三张竖排小图 */}
                        <div className="flex flex-col gap-[12px] w-[334px] h-[595px]">
                            <Image src="/business_2.jpg" alt="弱电工程2" width={340} height={191} className="rounded-xl object-cover w-[340px] h-[192px] border border-primary" />
                            <Image src="/business_3.jpg" alt="弱电工程3" width={340} height={191} className="rounded-xl object-cover w-[340px] h-[192px] border border-primary" />
                            <Image src="/business_4.jpg" alt="弱电工程4" width={340} height={191} className="rounded-xl object-cover w-[340px] h-[192px] border border-primary" />
                        </div>
                        {/* 右侧大图 */}
                        <div className="w-[334px] h-[595px]">
                            <Image src="/business_5.jpg" alt="弱电工程5" width={400} height={595} className="rounded-xl object-cover w-full h-full border border-primary" />
                        </div>
                    </div>
                </div>
            </section>

            {/* 运维服务 Section */}
            <section className="py-[96px]">
                <div className="container mx-auto px-[16px]">
                    <SectionTitle title="运维服务" subtitle="驻场服务、安全巡检、系统调优、设备维保等技术服务" className="mb-[48px]" />
                    <div className="flex flex-wrap justify-center gap-[32px]">
                        <div className="p-[40px] rounded-xl text-center w-[320px] shadow-lg transition-transform hover:scale-105 text-[#297FCC]">
                            <p className="text-4xl font-bold">5 * 8 <span className="text-2xl">小时</span></p>
                            <p className="mt-[8px]">常规运维</p>
                        </div>
                        <div className="p-[40px] rounded-xl text-center w-[320px] shadow-lg transition-transform hover:scale-105 text-[#297FCC]">
                            <p className="text-4xl font-bold">7 * 24 <span className="text-2xl">小时</span></p>
                            <p className="mt-[8px]">应急运维</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* 合作厂商 Section */}
            <section className="py-[96px] bg-gray-50">
                <div className="container mx-auto px-[16px]">
                    <SectionTitle title="合作厂商" className="mb-[48px]" />
                    <div className="w-full flex justify-center">
                        <img src="/business_6.png" alt="合作厂商" />
                    </div>
                </div>
            </section>

            {/* 集成资质 Section */}
            <section className="py-[96px]">
                <SectionTitle title="集成资质" className="mb-[48px]" />
                <div className="container mx-auto px-[16px] w-[1120px]">
                    <div className="text-[#297FCC] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[32px]">
                    {data.inteQualification.map((item, i) => (
                        <div className="border p-[32px] rounded-lg text-center bg-gray-50 hover:shadow-xl transition-shadow" key={i}>
                            <h3 className="font-bold text-lg">{item.title}</h3>
                            <p className="mt-[8px]">{item.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
            </section>
        </main>
    );
};

async function fetchPageData(): Promise<{ data: PageDataType }> {
    return {
        data: {
            banner: {
                image: "/business_banner.jpg",
                title: "聚力精进技术，同心服务客户",
                subtitle: "以客户需求为导向，提供个性化解决方案",
                buttonText: "查看案例",
                buttonUrl: "/cases",
            },
            ict: [
                {
                    category: "网络",
                    subCategories: [
                        "Wi-Fi无线",
                        "园区网络",
                        "数据中心网络",
                        "SD-WAN",
                        "SDN网络",
                        "光网络",
                        "网络监控与管理",
                    ]   
                },
                {
                    category: "IT&云视频",
                    subCategories: [
                        "服务器",
                        "存储",
                        "虚拟化",
                        "桌面云",
                        "超融合",
                        "云计算平台",
                        "大数据平台",
                    ]   
                },
                {
                    category: "视频监控&智能协作",
                    subCategories: [
                        "摄像机",
                        "视频云",
                        "智能视频",
                        "视频监控",
                        "云视频",
                        "智慧屏",
                        "视频会议",
                    ]   
                },
                {
                    category: "智能终端",
                    subCategories: [
                        "台式机",
                        "笔记本",
                        "平板",
                        "打印机",
                        "智能穿戴",
                        "智能音箱",
                        "智能产品",
                    ]   
                },
            ],
            infoSecurity: {
                title: "安全咨询",
                subtitles: ["安全策略体系", "安全组织体系", "安全运作体系"],
                solutions: ["安全态势感知解决方案", "等级保护解决方案", "数据安全解决方案", "勒索病毒防护解决方案", "威胁和漏洞解决方案", "三位一体抗DDOS", "云计算安全解决方案", "零信息安全解决方案"],
                categories: [
                    {
                        category: "网络安全",
                        subCategories: [
                            "下一代防火墙",
                            "安全接入网关网闸",
                            "入侵检测系统",
                            "入侵防御系统",
                            "流量管理系统",
                            "ANTI-DDOS",
                            "上网行为管理",
                        ],
                    },
                    {
                        category: "系统安全",
                        subCategories: [
                            "系统安全",
                            "终端安全防护系统",
                            "移动终端管理",
                            "企业安全一体机",
                            "网络安全准入系统",
                            "SSLVPN",
                            "零信任访问控制系统",
                        ],
                    },
                    {
                        category: "应用安全",
                        subCategories: [
                            "应用漏洞扫描系统",
                            "渗透浏试系统",
                            "WEB应用防火墙",
                            "负载均衡",
                            "网页防慕改系统",
                            "WEB应用防护",
                        ],
                    },
                    {
                        category: "数据安全",
                        subCategories: [
                            "数据库安全审计",
                            "数据库防火墙",
                            "堡垒机",
                            "数据防泄漏系统",
                            "数据脱敏系统",
                            "特权账号管理系统",
                            "备份一体机",
                        ],
                    },
                    {
                        category: "云安全",
                        subCategories: [
                            "云安全管理平台",
                            "云安全中心",
                            "统一服务器安全管理系统",
                            "WEB应用防火墙",
                            "网站检測 等保一体机",
                        ],
                    },
                ],
                services: ["安全检测", "安全巡检服务", "应急响应服务", "安全保障服务"],
            },
            inteQualification: [
                {
                    title: "华为",
                    desc: "五钻产品金牌",
                },
                {
                    title: "ISO9001",
                    desc: "质量管理体系认证",
                },
                {
                    title: "ISO14001",
                    desc: "环境管理体系认证",
                },
                {
                    title: "ISO27001",
                    desc: "信息安全管理体系认证",
                },
            ],
        }
    }
}
