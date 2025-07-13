import Image from "next/image";
import Banner from "../components/Banner";
import SectionTitle from "../components/SectionTitle";


const BusinessPage = () => {
    return (
        <>
            <Banner
              image="/business_banner.jpg"
              title="聚力精进技术，同心服务客户"
              subtitle="以客户需求为导向，提供个性化解决方案"
              buttonText="查看案例"
              buttonUrl="/cases"
            />
            <main>
                {/* ICT集成 Section */}
                <section className="py-[96px] bg-gray-50">
                    <SectionTitle title="ICT集成" className="mb-[24px]" />
                    <div className="container mx-auto px-[16px] w-[1120px]">
                        <div className="bg-white rounded-2xl border-2 border-dashed border-[#B6D9F7] p-8 md:p-12 max-w-5xl mx-auto">
                            <div className="text-center mb-8">
                                <div className="text-[20px] md:text-[22px] font-bold text-[#2CA3FA] mb-2">ICT集成业务架构</div>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                                {/* 网络 */}
                                <div className="bg-[#F7FAFE] rounded-xl p-6 flex flex-col items-center">
                                    <div className="text-[#2CA3FA] font-bold text-lg mb-4">网络</div>
                                    <div className="flex flex-col gap-3 w-full">
                                        <div className="bg-[#E6F2FE] text-[#2CA3FA] rounded-lg py-2 text-center text-base font-medium">Wi-Fi无线</div>
                                        <div className="bg-[#E6F2FE] text-[#2CA3FA] rounded-lg py-2 text-center text-base font-medium">园区网络</div>
                                        <div className="bg-[#E6F2FE] text-[#2CA3FA] rounded-lg py-2 text-center text-base font-medium">数据中心网络</div>
                                        <div className="bg-[#E6F2FE] text-[#2CA3FA] rounded-lg py-2 text-center text-base font-medium">SD-WAN</div>
                                        <div className="bg-[#E6F2FE] text-[#2CA3FA] rounded-lg py-2 text-center text-base font-medium">SDN网络</div>
                                        <div className="bg-[#E6F2FE] text-[#2CA3FA] rounded-lg py-2 text-center text-base font-medium">光网络</div>
                                        <div className="bg-[#E6F2FE] text-[#2CA3FA] rounded-lg py-2 text-center text-base font-medium">网络监控与管理</div>
                                    </div>
                                </div>
                                {/* IT&云视频 */}
                                <div className="bg-[#F7FAFE] rounded-xl p-6 flex flex-col items-center">
                                    <div className="text-[#2CA3FA] font-bold text-lg mb-4">IT&云视频</div>
                                    <div className="flex flex-col gap-3 w-full">
                                        <div className="bg-[#E6F2FE] text-[#2CA3FA] rounded-lg py-2 text-center text-base font-medium">服务器</div>
                                        <div className="bg-[#E6F2FE] text-[#2CA3FA] rounded-lg py-2 text-center text-base font-medium">存储</div>
                                        <div className="bg-[#E6F2FE] text-[#2CA3FA] rounded-lg py-2 text-center text-base font-medium">虚拟化</div>
                                        <div className="bg-[#E6F2FE] text-[#2CA3FA] rounded-lg py-2 text-center text-base font-medium">桌面云</div>
                                        <div className="bg-[#E6F2FE] text-[#2CA3FA] rounded-lg py-2 text-center text-base font-medium">超融合</div>
                                        <div className="bg-[#E6F2FE] text-[#2CA3FA] rounded-lg py-2 text-center text-base font-medium">云计算平台</div>
                                        <div className="bg-[#E6F2FE] text-[#2CA3FA] rounded-lg py-2 text-center text-base font-medium">大数据平台</div>
                                    </div>
                                </div>
                                {/* 视频监控&智能协作 */}
                                <div className="bg-[#F7FAFE] rounded-xl p-6 flex flex-col items-center">
                                    <div className="text-[#2CA3FA] font-bold text-lg mb-4">视频监控&智能协作</div>
                                    <div className="flex flex-col gap-3 w-full">
                                        <div className="bg-[#E6F2FE] text-[#2CA3FA] rounded-lg py-2 text-center text-base font-medium">摄像机</div>
                                        <div className="bg-[#E6F2FE] text-[#2CA3FA] rounded-lg py-2 text-center text-base font-medium">视频云</div>
                                        <div className="bg-[#E6F2FE] text-[#2CA3FA] rounded-lg py-2 text-center text-base font-medium">智能视频</div>
                                        <div className="bg-[#E6F2FE] text-[#2CA3FA] rounded-lg py-2 text-center text-base font-medium">视频监控</div>
                                        <div className="bg-[#E6F2FE] text-[#2CA3FA] rounded-lg py-2 text-center text-base font-medium">云视频</div>
                                        <div className="bg-[#E6F2FE] text-[#2CA3FA] rounded-lg py-2 text-center text-base font-medium">智慧屏</div>
                                        <div className="bg-[#E6F2FE] text-[#2CA3FA] rounded-lg py-2 text-center text-base font-medium">视频会议</div>
                                    </div>
                                </div>
                                {/* 智能终端 */}
                                <div className="bg-[#F7FAFE] rounded-xl p-6 flex flex-col items-center">
                                    <div className="text-[#2CA3FA] font-bold text-lg mb-4">智能终端</div>
                                    <div className="flex flex-col gap-3 w-full">
                                        <div className="bg-[#E6F2FE] text-[#2CA3FA] rounded-lg py-2 text-center text-base font-medium">台式机</div>
                                        <div className="bg-[#E6F2FE] text-[#2CA3FA] rounded-lg py-2 text-center text-base font-medium">笔记本</div>
                                        <div className="bg-[#E6F2FE] text-[#2CA3FA] rounded-lg py-2 text-center text-base font-medium">平板</div>
                                        <div className="bg-[#E6F2FE] text-[#2CA3FA] rounded-lg py-2 text-center text-base font-medium">打印机</div>
                                        <div className="bg-[#E6F2FE] text-[#2CA3FA] rounded-lg py-2 text-center text-base font-medium">智能穿戴</div>
                                        <div className="bg-[#E6F2FE] text-[#2CA3FA] rounded-lg py-2 text-center text-base font-medium">智能音箱</div>
                                        <div className="bg-[#E6F2FE] text-[#2CA3FA] rounded-lg py-2 text-center text-base font-medium">智能产品</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                
                {/* 信息安全 Section */}
                <section className="py-[96px]">
                    <div className="container mx-auto px-[16px]">
                        <SectionTitle title="信息安全" />
                        <div className="bg-white rounded-2xl border-2 border-dashed border-[#B6D9F7] p-6 md:p-10 max-w-6xl mx-auto mt-8 w-[1120px]">
                            {/* 顶部大标题 */}
                            <div className="bg-[#2CA3FA] text-white text-center text-lg md:text-xl font-bold rounded-t-xl py-3 mb-4">安全咨询</div>
                            {/* 体系与解决方案 */}
                            <div className="flex flex-col md:flex-row gap-4 mb-6">
                                {/* 左侧竖排 */}
                                <div className="flex md:flex-col items-center md:items-start md:justify-center md:w-[80px] shrink-0">
                                    <span className="text-[#2CA3FA] font-bold text-base md:text-lg tracking-widest md:rotate-[-90deg] md:mb-0 mb-2">解决方案</span>
                                </div>
                                {/* 体系与方案内容 */}
                                <div className="flex-1 grid grid-cols-1 md:grid-cols-3 gap-4">
                                    {/* 安全策略体系 */}
                                    <div className="bg-[#F7FAFE] rounded-xl p-4 flex flex-col items-center">
                                        <div className="text-[#2CA3FA] font-bold mb-2">安全策略体系</div>
                                        <div className="flex flex-col gap-2 w-full">
                                            <div className="bg-[#E6F2FE] text-[#2CA3FA] rounded-lg py-1 px-2 text-center text-sm font-medium">安全态势感知解决方案</div>
                                            <div className="bg-[#E6F2FE] text-[#2CA3FA] rounded-lg py-1 px-2 text-center text-sm font-medium">威胁情报管理解决方案</div>
                                        </div>
                                    </div>
                                    {/* 安全组织体系 */}
                                    <div className="bg-[#F7FAFE] rounded-xl p-4 flex flex-col items-center">
                                        <div className="text-[#2CA3FA] font-bold mb-2">安全组织体系</div>
                                        <div className="flex flex-col gap-2 w-full">
                                            <div className="bg-[#E6F2FE] text-[#2CA3FA] rounded-lg py-1 px-2 text-center text-sm font-medium">等级保护解决方案</div>
                                            <div className="bg-[#E6F2FE] text-[#2CA3FA] rounded-lg py-1 px-2 text-center text-sm font-medium">三位一体机/UDDOS</div>
                                        </div>
                                    </div>
                                    {/* 安全运行体系 */}
                                    <div className="bg-[#F7FAFE] rounded-xl p-4 flex flex-col items-center">
                                        <div className="text-[#2CA3FA] font-bold mb-2">安全运行体系</div>
                                        <div className="flex flex-col gap-2 w-full">
                                            <div className="bg-[#E6F2FE] text-[#2CA3FA] rounded-lg py-1 px-2 text-center text-sm font-medium">数据安全解决方案</div>
                                            <div className="bg-[#E6F2FE] text-[#2CA3FA] rounded-lg py-1 px-2 text-center text-sm font-medium">云计算安全解决方案</div>
                                            <div className="bg-[#E6F2FE] text-[#2CA3FA] rounded-lg py-1 px-2 text-center text-sm font-medium">勒索病毒防护解决方案</div>
                                            <div className="bg-[#E6F2FE] text-[#2CA3FA] rounded-lg py-1 px-2 text-center text-sm font-medium">零信任安全解决方案</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* 五大安全领域 */}
                            <div className="grid grid-cols-1 md:grid-cols-5 gap-4 mb-6">
                                {/* 网络安全 */}
                                <div className="bg-[#E6F2FE] rounded-xl p-4 flex flex-col items-center">
                                    <div className="text-[#2CA3FA] font-bold mb-2">网络安全</div>
                                    <div className="text-xs text-[#2CA3FA] leading-relaxed text-center">
                                        下一代防火墙<br />安全接入网关<br />入侵检测系统<br />入侵防御系统<br />流量监控系统<br />ANTI-DDOS<br />上网行为管理
                                    </div>
                                </div>
                                {/* 系统安全 */}
                                <div className="bg-[#E6F2FE] rounded-xl p-4 flex flex-col items-center">
                                    <div className="text-[#2CA3FA] font-bold mb-2">系统安全</div>
                                    <div className="text-xs text-[#2CA3FA] leading-relaxed text-center">
                                        系统安全<br />终端检测系统<br />移动终端管理<br />网络安全准入系统<br />SSLVPN<br />安全传输加密认证系统
                                    </div>
                                </div>
                                {/* 应用安全 */}
                                <div className="bg-[#E6F2FE] rounded-xl p-4 flex flex-col items-center">
                                    <div className="text-[#2CA3FA] font-bold mb-2">应用安全</div>
                                    <div className="text-xs text-[#2CA3FA] leading-relaxed text-center">
                                        应用漏洞扫描系统<br />渗透测试系统<br />WEB防篡改系统<br />网页防泄密系统<br />WEB应用防火墙
                                    </div>
                                </div>
                                {/* 数据安全 */}
                                <div className="bg-[#E6F2FE] rounded-xl p-4 flex flex-col items-center">
                                    <div className="text-[#2CA3FA] font-bold mb-2">数据安全</div>
                                    <div className="text-xs text-[#2CA3FA] leading-relaxed text-center">
                                        数据库安全审计<br />数据库防火墙<br />数据脱敏系统<br />特权账号管理系统<br />备份一体机
                                    </div>
                                </div>
                                {/* 云安全 */}
                                <div className="bg-[#E6F2FE] rounded-xl p-4 flex flex-col items-center">
                                    <div className="text-[#2CA3FA] font-bold mb-2">云安全</div>
                                    <div className="text-xs text-[#2CA3FA] leading-relaxed text-center">
                                        云安全管理平台<br />数据安全中心<br />统一服务安全管理系统<br />WEB应用防火墙<br />数据备份系统
                                    </div>
                                </div>
                            </div>
                            {/* 底部四大服务按钮 */}
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
                                <div className="bg-[#2CA3FA] text-white rounded-lg py-3 text-center font-bold text-base">安全检测</div>
                                <div className="bg-[#2CA3FA] text-white rounded-lg py-3 text-center font-bold text-base">安全巡检服务</div>
                                <div className="bg-[#2CA3FA] text-white rounded-lg py-3 text-center font-bold text-base">应急响应服务</div>
                                <div className="bg-[#2CA3FA] text-white rounded-lg py-3 text-center font-bold text-base">安全保障服务</div>
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
                            <div className="w-[334px] h-[596px]">
                                <Image src="/business_1.jpg" alt="弱电工程1" width={334} height={594} className="rounded-xl object-cover w-full h-full border border-primary" />
                            </div>
                            {/* 中间三张竖排小图 */}
                            <div className="flex flex-col gap-[12px] h-full">
                                <Image src="/business_2.jpg" alt="弱电工程2" width={340} height={192} className="rounded-xl object-cover w-[340px] h-[192px] border border-primary" />
                                <Image src="/business_3.jpg" alt="弱电工程3" width={340} height={192} className="rounded-xl object-cover w-[340px] h-[192px] border border-primary" />
                                <Image src="/business_4.jpg" alt="弱电工程4" width={340} height={192} className="rounded-xl object-cover w-[340px] h-[192px] border border-primary" />
                            </div>
                            {/* 右侧大图 */}
                            <div className="w-[334px] h-[596px]">
                                <Image src="/business_5.jpg" alt="弱电工程5" width={400} height={600} className="rounded-xl object-cover w-full h-full border border-primary" />
                            </div>
                        </div>
                    </div>
                </section>

                {/* 运维服务 Section */}
                <section className="py-[96px]">
                    <div className="container mx-auto px-[16px]">
                        <SectionTitle title="运维服务" subtitle="驻场服务、安全巡检、系统调优、设备维保等技术服务" className="mb-[48px]" />
                        <div className="flex flex-wrap justify-center gap-[32px]">
                            <div className="p-[40px] rounded-xl text-center w-[320px] shadow-lg transition-transform hover:scale-105">
                                <p className="text-4xl font-bold">5 * 8 <span className="text-2xl">小时</span></p>
                                <p className="mt-[8px]">常规运维</p>
                            </div>
                            <div className="p-[40px] rounded-xl text-center w-[320px] shadow-lg transition-transform hover:scale-105">
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
                        </div>
                    </div>
                </section>

                {/* 集成资质 Section */}
                 <section className="py-[96px]">
                    <SectionTitle title="集成资质" className="mb-[48px]" />
                    <div className="container mx-auto px-[16px] w-[1120px]">
                         <div className="text-primary grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[32px]">
                            <div className="border p-[32px] rounded-lg text-center bg-gray-50 hover:shadow-xl transition-shadow">
                                <h3 className="font-bold text-lg">华为</h3>
                                <p className="mt-[8px]">五钻产品金牌</p>
                            </div>
                             <div className="text-primary border p-[32px] rounded-lg text-center bg-gray-50 hover:shadow-xl transition-shadow">
                                <h3 className="font-bold text-lg">ISO9001</h3>
                                <p className="mt-[8px]">质量管理体系认证</p>
                            </div>
                             <div className="text-primary border p-[32px] rounded-lg text-center bg-gray-50 hover:shadow-xl transition-shadow">
                                <h3 className="font-bold text-lg">ISO14001</h3>
                                <p className="mt-[8px]">环境管理体系认证</p>
                            </div>
                             <div className="text-primary border p-[32px] rounded-lg text-center bg-gray-50 hover:shadow-xl transition-shadow">
                                <h3 className="font-bold text-lg ">ISO27001</h3>
                                <p className="mt-[8px]">信息安全管理体系认证</p>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </>
    );
};

export default BusinessPage; 