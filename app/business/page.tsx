import Image from "next/image";

const PageTitle = ({ children }: { children: React.ReactNode }) => (
    <div className="relative py-24 bg-gray-900 text-center">
        <div 
            className="absolute inset-0 z-0 opacity-10" 
            style={{ 
                backgroundImage: `url('data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" preserveAspectRatio="none" fill="%23fff"><path d="M0,50 C40,120 60,-20 100,50 L100,100 L0,100 Z"/></svg>')`,
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'bottom',
                backgroundSize: '100% auto',
            }} 
        />
        <div className="relative z-10">
            <h1 className="text-5xl font-bold text-white tracking-wider">{children}</h1>
            <div className="mt-4 w-24 h-1 bg-lime-400 mx-auto" />
        </div>
    </div>
);

const SectionTitle = ({ children }: { children: React.ReactNode }) => (
    <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800">{children}</h2>
        <div className="mt-4 w-20 h-1 bg-lime-400 mx-auto" />
    </div>
);

const IctCategory = ({ title, items }: { title: string; items: string[] }) => (
    <div className="border-t-2 border-gray-200 pt-6">
        <h4 className="text-cyan-600 font-bold mb-4 text-center">{title}</h4>
        <div className="flex flex-wrap justify-center gap-3">
            {items.map(item => (
                <span key={item} className="bg-gray-100 text-gray-700 px-4 py-2 rounded-md text-sm shadow-sm hover:bg-cyan-100 transition-colors">
                    {item}
                </span>
            ))}
        </div>
    </div>
);

const PartnerLogo = ({ src, alt }: { src: string; alt: string }) => (
    <div className="bg-white p-4 rounded-full shadow-md w-32 h-32 flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-300">
        <Image src={src} alt={alt} width={100} height={50} className="object-contain"/>
    </div>
);


const BusinessPage = () => {
    return (
        <div className="bg-white">
            <PageTitle>主营业务</PageTitle>

            <main>
                {/* ICT集成 Section */}
                <section className="py-24 bg-gray-50">
                    <div className="container mx-auto px-4">
                        <SectionTitle>ICT集成</SectionTitle>
                        <div className="bg-white p-8 rounded-xl shadow-lg space-y-8 border border-gray-200">
                            <IctCategory title="基础架构" items={['HPC超算', '私有云', '申泰', 'X86主机', '信创应用', '智能存储', '备份产品']} />
                            <IctCategory title="云数据中心&虚拟化" items={['虚拟化', '超融合', '信创虚拟化', '桌面虚拟化', '云视频', '智慧屏', '信创云盘']} />
                            <IctCategory title="IT运维&审计" items={['堡垒机', '网管', '虚拟化', '桌面虚拟化', '服务器', 'AI计算平台', '大数据中心']} />
                            <IctCategory title="网络" items={['WIFI无线', '园区网', '数据中心网络', 'SD-WAN', '5G网络', '光网络', '弹性裸金属']} />
                        </div>
                    </div>
                </section>
                
                {/* 信息安全 Section */}
                <section className="py-24">
                    <div className="container mx-auto px-4">
                        <SectionTitle>信息安全</SectionTitle>
                        <div className="text-center p-8 border rounded-lg bg-white shadow-lg">
                           <p className="text-gray-600">此部分图表结构复杂，将使用占位符代替，后续可填充具体内容。</p>
                           <Image src="https://via.placeholder.com/1200x600.png?text=Information+Security+Diagram" alt="信息安全图表" width={1200} height={600} className="mt-8 mx-auto rounded-md" />
                        </div>
                    </div>
                </section>

                {/* 弱电工程 Section */}
                <section className="py-24 bg-gray-50">
                    <div className="container mx-auto px-4">
                        <SectionTitle>弱电工程</SectionTitle>
                        <p className="text-center text-gray-500 mb-12">机房建设、综合布线、门禁、安防、会议室、广播等</p>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            <Image src="https://images.unsplash.com/photo-1587831990711-23d7e4a642da?q=80&w=2070&auto=format&fit=crop" alt="弱电工程1" width={400} height={300} className="rounded-lg shadow-md object-cover w-full h-80" />
                            <Image src="https://images.unsplash.com/photo-1591453082333-4343a628b3a0?q=80&w=2070&auto=format&fit=crop" alt="弱电工程2" width={400} height={300} className="rounded-lg shadow-md object-cover w-full h-80" />
                            <Image src="https://images.unsplash.com/photo-1544197150-b99a580bb7a8?q=80&w=2070&auto=format&fit=crop" alt="弱电工程3" width={400} height={300} className="rounded-lg shadow-md object-cover w-full h-80" />
                        </div>
                    </div>
                </section>

                {/* 运维服务 Section */}
                <section className="py-24">
                    <div className="container mx-auto px-4">
                        <SectionTitle>运维服务</SectionTitle>
                        <p className="text-center text-gray-500 mb-12">驻场服务、安全巡检、系统调优、设备维保等技术服务</p>
                        <div className="flex flex-wrap justify-center gap-8">
                            <div className="border border-cyan-200 bg-cyan-50 p-10 rounded-xl text-center w-80 shadow-lg transition-transform hover:scale-105">
                                <p className="text-4xl font-bold text-cyan-600">5 * 8 <span className="text-2xl">小时</span></p>
                                <p className="text-gray-600 mt-2">常规运维</p>
                            </div>
                            <div className="border border-lime-200 bg-lime-50 p-10 rounded-xl text-center w-80 shadow-lg transition-transform hover:scale-105">
                                <p className="text-4xl font-bold text-lime-600">7 * 24 <span className="text-2xl">小时</span></p>
                                <p className="text-gray-600 mt-2">应急运维</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* 合作厂商 Section */}
                <section className="py-24 bg-gray-50">
                    <div className="container mx-auto px-4">
                        <SectionTitle>合作厂商</SectionTitle>
                        <div className="relative w-full max-w-4xl mx-auto flex items-center justify-center" style={{ height: '500px' }}>
                             {/* Central Logo */}
                            <div className="absolute z-10">
                                <div className="bg-white p-6 rounded-full shadow-2xl w-48 h-48 flex items-center justify-center">
                                    <svg viewBox="0 0 105 86" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-24 h-24"><path d="M16.3571 85.0117L2.43343 61.2238L52.5 0.988281L102.567 61.2238L88.6429 85.0117H16.3571Z" stroke="#38BDF8" strokeWidth="4"></path><path d="M19.3334 79.0117L52.5 24.0994L85.6667 79.0117H19.3334Z" stroke="#38BDF8" strokeWidth="4"></path></svg>
                                </div>
                            </div>

                            {/* Orbiting Logos */}
                            <div className="absolute w-full h-full animate-spin-slow">
                                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2"> <PartnerLogo src="https://via.placeholder.com/150x60/0000FF/808080?Text=Huawei" alt="Huawei" /> </div>
                                <div className="absolute top-1/4 -translate-y-1/2 left-4"> <PartnerLogo src="https://via.placeholder.com/150x60/FF0000/FFFFFF?Text=H3C" alt="H3C" /> </div>
                                <div className="absolute top-1/4 -translate-y-1/2 right-4"> <PartnerLogo src="https://via.placeholder.com/150x60/00FF00/808080?Text=Sangfor" alt="Sangfor" /> </div>
                                <div className="absolute bottom-1/4 -translate-y-1/2 left-4"> <PartnerLogo src="https://via.placeholder.com/150x60/FFFF00/808080?Text=Topsec" alt="Topsec" /> </div>
                                <div className="absolute bottom-1/4 -translate-y-1/2 right-4"> <PartnerLogo src="https://via.placeholder.com/150x60/FFA500/FFFFFF?Text=Venustech" alt="Venustech" /> </div>
                                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2"> <PartnerLogo src="https://via.placeholder.com/150x60/800080/FFFFFF?Text=Westone" alt="Westone" /> </div>
                                <div className="absolute top-1/2 -translate-y-1/2 left-20"> <PartnerLogo src="https://via.placeholder.com/150x60/00FFFF/808080?Text=Hillstone" alt="Hillstone" /> </div>
                                <div className="absolute top-1/2 -translate-y-1/2 right-20"> <PartnerLogo src="https://via.placeholder.com/150x60/FFC0CB/808080?Text=DPtech" alt="DPtech" /> </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* 集成资质 Section */}
                 <section className="py-24">
                    <div className="container mx-auto px-4">
                        <SectionTitle>集成资质</SectionTitle>
                         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                            <div className="border p-8 rounded-lg text-center bg-gray-50 hover:shadow-xl transition-shadow">
                                <h3 className="font-bold text-lg text-cyan-700">华为</h3>
                                <p className="text-gray-500 mt-2">五钻产品金牌</p>
                            </div>
                             <div className="border p-8 rounded-lg text-center bg-gray-50 hover:shadow-xl transition-shadow">
                                <h3 className="font-bold text-lg text-cyan-700">ISO9001</h3>
                                <p className="text-gray-500 mt-2">质量管理体系认证</p>
                            </div>
                             <div className="border p-8 rounded-lg text-center bg-gray-50 hover:shadow-xl transition-shadow">
                                <h3 className="font-bold text-lg text-cyan-700">ISO14001</h3>
                                <p className="text-gray-500 mt-2">环境管理体系认证</p>
                            </div>
                             <div className="border p-8 rounded-lg text-center bg-gray-50 hover:shadow-xl transition-shadow">
                                <h3 className="font-bold text-lg text-cyan-700">ISO27001</h3>
                                <p className="text-gray-500 mt-2">信息安全管理体系认证</p>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    );
};

export default BusinessPage; 