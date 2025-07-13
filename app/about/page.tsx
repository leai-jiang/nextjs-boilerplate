import Image from "next/image";
import Link from "next/link";
import SectionTitle from "../components/SectionTitle";
import Banner from "../components/Banner";

const AboutPage = () => {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <Banner
        image=""
        title="技术筑基客户先，团队聚力服务臻"
        subtitle="以务实之心，铸集成未来！"
        buttonText="首页"
        buttonUrl="/"
      />

      {/* 公司简介 */}
      <section id="company" className="max-w-4xl mx-auto py-[80px] px-[16px]">
        <SectionTitle title="公司简介" className="mb-[24px]" />
        <p className="text-[#171717] text-[14px] leading-[1.75] text-center font-normal">
          上海耒石网络科技有限公司成立于2020年12月17日，主营业务为信息安全、网络安全的研究与应用、系统集成、弱电工程、楼宇安防监控的工程应用与服务。公司拥有专业的技术团队，依托雄厚的技术实力，以创新的商业模式为客户提供全方位、一站式服务，为用户的网络平台、系统平台等业务方位、高品质、高效率的整体信息技术服务，服务对象涉及政府、卫生、教育、文旅等行业。
        </p>
      </section>

      {/* 公司文化 */}
      <section className="max-w-4xl mx-auto py-[80px] px-[16px]">
        <SectionTitle title="公司文化" className="mb-[24px]" />
        <p className="text-[#171717] text-[14px] leading-[1.75] text-center font-normal">
          以技术为本，创新为魂，凝聚团队力量成就客户价值。<br />
          公司注重人才培养，倡导团结协作、诚信务实、追求卓越的企业文化氛围。<br />
          以开放包容的心态，汇聚各方英才，持续提升企业核心竞争力。
        </p>
      </section>

      {/* 未来发展 */}
      <section className="max-w-6xl mx-auto py-[80px] px-[16px]">
        <SectionTitle title="未来发展" className="mb-[24px]" />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-[48px]">
          <div className="flex flex-col items-center">
            <div className="w-[48px] h-[48px] text-white flex items-center justify-center rounded-full font-bold text-xl bg-[#297FCC] bg-gradient-to-b from-white/30 to-transparent mb-[24px]">1</div>
            <h3 className="mb-[12px] text-[24px] font-semibold leading-[1.5]">拓展市场领域与客户群体</h3>
            <p className="text-[#171717] text-center text-[16px] leading-[1.75] font-normal">持续拓展新兴市场领域，提升市场占有率，服务更多行业客户，打造多元化业务格局。</p>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-[48px] h-[48px] text-white flex items-center justify-center rounded-full font-bold text-xl bg-[#297FCC] bg-gradient-to-b from-white/30 to-transparent mb-[24px]">1</div>
            <h3 className="mb-[12px] text-[24px] font-semibold leading-[1.5]">拓展市场领域与客户群体</h3>
            <p className="text-center text-[16px] leading-[1.75] font-normal">持续拓展新兴市场领域，提升市场占有率，服务更多行业客户，打造多元化业务格局。</p>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-[48px] h-[48px] text-white flex items-center justify-center rounded-full font-bold text-xl bg-[#297FCC] bg-gradient-to-b from-white/30 to-transparent mb-[24px]">1</div>
            <h3 className="mb-[12px] text-[24px] font-semibold leading-[1.5]">拓展市场领域与客户群体</h3>
            <p className="text-center text-[16px] leading-[1.75] font-normal">持续拓展新兴市场领域，提升市场占有率，服务更多行业客户，打造多元化业务格局。</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage; 