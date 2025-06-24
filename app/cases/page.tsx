import Image from "next/image";
import Link from "next/link";

const PageTitle = ({ title, subtitle }: { title: string; subtitle: string }) => (
    <div className="text-center py-24 bg-white">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800">{title}</h1>
        <div className="mt-4 w-24 h-1 bg-lime-400 mx-auto" />
        <p className="mt-6 text-gray-500">{subtitle}</p>
    </div>
);

const CaseCard = ({ imageUrl, title, link }: { imageUrl: string; title: string; link: string }) => (
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden group transform transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">
        <div className="relative w-full h-64">
            <Image src={imageUrl} alt={title} layout="fill" objectFit="cover" className="transition-transform duration-300 group-hover:scale-110" />
        </div>
        <div className="p-6 text-center">
            <h3 className="text-xl font-semibold text-gray-800 mb-4 h-14 flex items-center justify-center">{title}</h3>
            <Link href={link} className="inline-block border border-lime-400 text-lime-500 font-semibold px-8 py-2 rounded-full hover:bg-lime-400 hover:text-white transition-colors duration-300">
                了解更多
            </Link>
        </div>
    </div>
);

const projectCases = [
    {
        title: "某交通企业数据中心建设项目",
        imageUrl: "https://images.unsplash.com/photo-1579226922365-b83c483a48e3?q=80&w=1974&auto=format&fit=crop",
        link: "/cases/1",
    },
    {
        title: "某高校网络系统升级项目",
        imageUrl: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=2070&auto=format&fit=crop",
        link: "/cases/2",
    },
    {
        title: "某医院安全加固项目",
        imageUrl: "https://images.unsplash.com/photo-1588776814546-da631a743948?q=80&w=2070&auto=format&fit=crop",
        link: "/cases/3",
    },
    {
        title: "某高速公路监控系统升级项目",
        imageUrl: "https://images.unsplash.com/photo-1569317212177-161b35c056b3?q=80&w=2070&auto=format&fit=crop",
        link: "/cases/4",
    },
    {
        title: "某医院网络及安全运维项目",
        imageUrl: "https://images.unsplash.com/photo-1551076805-e1869033e561?q=80&w=1932&auto=format&fit=crop",
        link: "/cases/5",
    },
];

const CasesPage = () => {
    return (
        <div className="bg-gray-50">
            <PageTitle title="案例展示" subtitle="为多元行业客户提供标准化+定制化解决方案" />
            <div className="container mx-auto px-4 pb-24">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
                   {projectCases.map((project) => (
                       <CaseCard key={project.title} {...project} />
                   ))}
                </div>
            </div>
        </div>
    );
};

export default CasesPage; 