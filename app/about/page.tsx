import SectionTitle from "../components/SectionTitle";
import Banner from "../components/Banner";
import { PageDataType } from "./type";

const AboutPage = async () => {
  const { data } = await fetchPageData();

  return (
    <main>
      <Banner {...data.banner} />

      {/* 公司简介 */}
      <section id="company" className="max-w-4xl mx-auto py-[80px] px-[16px]">
        <SectionTitle title="公司简介" className="mb-[24px]" />
        <p className="text-[#171717] text-[14px] leading-[1.75] text-center font-normal">
          {data.intro}
        </p>
      </section>

      {/* 公司文化 */}
      <section className="max-w-4xl mx-auto py-[80px] px-[16px]">
        <SectionTitle title="公司文化" className="mb-[24px]" />
        <p className="text-[#171717] text-[14px] leading-[1.75] text-center font-normal">
          {data.culture}
        </p>
      </section>

      {/* 未来发展 */}
      <section className="max-w-6xl mx-auto py-[80px] px-[16px]">
        <SectionTitle title="未来发展" className="mb-[24px]" />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-[48px]">
          {data.develop.map((item, i) => (
            <div className="flex flex-col items-center" key={i}>
              <div className="w-[48px] h-[48px] text-white flex items-center justify-center rounded-full font-bold text-xl bg-primary mb-[24px]">{i + 1}</div>
              <h3 className="mb-[12px] text-[24px] font-semibold leading-[1.5]">{item.title}</h3>
              <p className="text-[#171717] text-center text-[16px] leading-[1.75] font-normal">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
};

async function fetchPageData(): Promise<{data: PageDataType}> {
  return {
    data: {
      banner: {
        image: "/about_banner.jpg",
        title: "技术筑基客户先，团队聚力服务臻",
        subtitle: "以务实之心，铸集成未来！",
        buttonText: "首页",
        buttonUrl: "/",
      },
      intro: "上海耒石网络科技有限公司成立于 2020 年 ，主营业务为信息安全、网络技术研究发展、系统集成服务、弱电工程等，拥有丰富的项目经验和技术，以及雄厚的售后服务实力。为用户提供网络平台、系统平台、应用平台等全方位、高品质、有效的整体性技术服务，服务对象涉及政府、卫生、教育、企业等行业。",
      culture: `注重人才、注重技术、注重管理、注重服务品质是公司发展之根本；
以“以客户为中心，以技术为根本，团结协作，求真务实”为宗旨。
公司汇集了一批技术过硬、能力出众、具有创新意识的售前、售后技术、项目管理等人才，并充分利用各类人才的专业技术知识，为公司目标用户提供高品质、高满意度技术服务，短时间内响应用户的各种服务需求，为用户解除后顾之忧。`,
      develop: [
        {
          title: "拓展市场领域与客户群体",
          desc: `加强市场调研和分析，深入了解不同行业和领域的需求特点，制定针对性的市场拓展策略。
  积极拓展新兴市场领域，寻找新的业务增长点，扩大客户群体，提升市场份额。`,
        },
        {
          title: "加强品牌建设与市场推广",
          desc: `注重品牌建设和市场推广，提升公司的品牌知名度和市场影响力。
加强与合作伙伴的合作与交流，共同推动行业发展。`,
        },
        {
          title: "提升客户服务质量与满意度",
          desc: `以客户需求为导向，持续优化服务流程和服务质量，为客户提供更加个性化、专业化的服务。
加强客户关系管理，建立长期稳定的客户合作关系，实现业务的持续增长。`,
        },
      ]
    },
  }
}

export default AboutPage; 