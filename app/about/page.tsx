'use client';

import { useState, useEffect } from "react";
import SectionTitle from "../components/SectionTitle";
import Banner from "../components/Banner";
import NewsModal from "./components/NewsModal";
import { PageDataType } from "./type";

const AboutPage = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [currentNews, setCurrentNews] = useState<any | null>(null);
  const [data, setData] = useState<PageDataType | null>(null);

  useEffect(() => {
    const loadData = async () => {
      const { data } = await fetchPageData();
      setData(data);
    };
    loadData();
  }, []);

  if (!data) return null;

  return (
    <main>
      <Banner {...data.banner} />

      {/* 行业讯息 */}
      <section id="news" className="max-w-4xl mx-auto py-[80px] px-[16px]">
        <SectionTitle title="行业讯息" className="mb-[24px]" />
        <div className="text-[#171717] text-[14px] leading-[1.75] text-center font-normal">
          {data.news.map((item: any) => (
            <div key={item.title} className="flex flex-col items-center">
              <p 
                className="text-[16px] leading-[2] cursor-pointer hover:border-b-1 hover:border-primary"
                onClick={() => {
                  setCurrentNews(item);
                  setModalOpen(true);
                }}
              >
                {item.title}
              </p>
            </div>
          ))}
        </div>
        <NewsModal 
          visible={modalOpen} 
          onClose={() => setModalOpen(false)} 
          newsItem={currentNews} 
        />
      </section>

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
          {data.develop.map((item: any, i: number) => (
            <div className="flex flex-col items-center" key={i}>
              <div className="w-[48px] h-[48px] text-white flex items-center justify-center rounded-full font-bold text-xl bg-primary mb-[24px]">{i + 1}</div>
              <h3 className="mb-[12px] text-[16px] font-semibold leading-[1.5]">{item.title}</h3>
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
      news: [
        {
          title: "什么是“等级保护”？",
          desc: `<h3 class="my-[12px] font-bold"><strong>1.1 等级保护基本认知</strong></h3>
<p><a href="https://cloud.tencent.com/product/ddos?from_column=20065&amp;from=20065">网络安全</a>：根据《信息安全技术<a href="https://cloud.tencent.com/solution/gradedprotection?from_column=20065&amp;from=20065">网络安全等级保护</a>基本要求》（GB/T 22239-2019），是指通过采取必要措施，防范对网络的攻击、侵入、干扰、破坏和非法使用以及意外事故，使网络处于稳定可靠运行的状态，以及保障网络数据的完整性、保密性、可用性的能力。<br>
网络安全等级保护：是指对网络（含信息系统、数据）实施分等级保护、分等级监管。<br>
信息系统安全等级测评：是验证信息系统是否满足相应安全保护等级的评估过程。信息安全等级保护要求不同安全等级的信息系统应具有不同的安全保护能力。<br></p>
<h3 class="my-[12px] font-bold"><strong>1.2 等级保护的对象</strong></h3>
<p>等级保护对象是指网络安全等级保护工作中的对象，通常是指由计算机或者其他信息终端及相关设备组成的按照一定的规则和程序对信息进行收集、存储、传输、交换、处理的系统，主要包括：<br>
· 基础信息网络<br>
· 云计算平台 / 系统<br>
· <a href="https://cloud.tencent.com/product/bigdata-class?from_column=20065&amp;from=20065">大数据</a>应用 / 平台 / 资源<br>
· 物联网<br>
· 工业控制系统<br>
· 采用移动互联技术的系统等<br>
等级保护对象根据其在国家安全、经济建设、社会生活中的重要程度，遭到破坏后对国家安全、社会秩序、公共利益以及公民、法人和其他组织的合法权益的危害程度等，由低到高被划分为五个安全保护等级。<br></p>
<h3 class="my-[12px] font-bold"><strong>1.3 不同等级的安全保护能力</strong></h3>
<img src="/about_1.jpg" alt="不同等级的安全保护能力" />
<p>目前根据网络、信息系统、网络上的数据和信息的重要性划分为了五个安全保护等级，从一级到五级，逐级增强。不同级别的网络、信息系统、网络上的数据应具备不同的安全保护措施。<br>
&nbsp;<br></p>
`,
        },
        {
          title: "浅谈“三级等保”",
          desc: `<h2>三级等保（等保三级）又被称为国家信息安全等级保护三级认证，是中国最权威的信息产品安全等级资格认证，由公安机关依据国家信息安全保护条例及相关制度规定，按照管理规范和技术标准，对各机构的信息系统安全等级保护状况进行认可及评定。</h2>
<h2>三级等保是指对国家重要信息、法人和其他组织及公民的专有信息以及公开信息在存储、传输、处理这些信息时分等级实行安全保护；对信息系统中使用的信息安全产品实行按等级管理；对信息系统中发生的信息安全事件分等级响应、处置。</h2>
<h3 class="my-[12px] font-bold"><strong>三级等保基本要求</strong></h3>
<p>在安全物理环境、安全通信网络、安全区域边界、安全计算环境、安全管理中心、安全管理制度、安全管理机构、在安全管理人员、安全建设管理、安全运维管理<br>
<strong>递交的备案资料都包括哪些内容？</strong><br></p>
<ol>
<li>备案表和定级报告；<br></li>
<li>网络安全等级保护应急联系登记表；<br></li>
<li>《信息安全工作管理制度》；<br></li>
<li>系统使用的安全产品清单及认证、销售许可证明；<br></li>
<li>单位拓扑图及说明；<br></li>
<li>专家评审意见。<br>
<strong>如何整改？</strong><br>
根据《GB T22239-2008信息安全技术信息系统安全等级保护基本要求》，三级系统有如下要求：<br>
应提供主要网络设备、通信线路和数据处理系统的硬件冗余，保证系统的高可用性；<br>
应建立备用供电系统；<br>
以上检查项需要购置设备，对二级系统没有此要求，但在二级系统中，构成系统网络安全的必要硬件则必须有。<br></li>
</ol>
<h3 class="my-[12px] font-bold"><strong>测评周期是多久？现场测评时间多长？</strong></h3>
<p>整个测评周期包括前期调研、现场测评、后期报告编写等，一般情况下一个二级系统会占用34周，一个三级系统会占用45周（指初次测评，不包括整改和加固时间）；<br>
其中现场测评（指在被测系统单位现场的测评）的时间根据系统的数量而定：一般一个二级系统会占用34个工作日，一个三级系统会占用56个工作日（两组同时进行，每组两人）。<br></p>
<h3 class="my-[12px] font-bold"><strong>如何证明信息系统已经符合等保要求？</strong></h3>
<p>需要用户向属地网监进行定级备案，获取等保备案证明，同时通过具备测评资质的测评机构对信息系统进行安全测评，获得年度网络安全等级保护测评报告，对于达到至少合格以上测评结论才能证明该信息系统符合等级保护的安全要求。<br></p>
`,
        },
        {
          title: "中央网信办等四部门印发《2025年提升全民数字素养与技能工作要点》",
          desc: `<p>来源：“网信中国”微信公众号 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<br>
近日，中央网信办、教育部、工业和信息化部、人力资源社会保障部联合印发《2025年提升全民数字素养与技能工作要点》（以下简称《工作要点》）。《工作要点》指出，要坚持以习近平新时代中国特色社会主义思想为指导，全面贯彻落实党的二十大和二十届二中、三中全会精神，进一步健全数字人才培育体系，拓展数字经济增长空间，构建普惠包容数字社会，打造智慧便捷数字生活，营造安全有序数字环境，完善协同联动工作格局，不断夯实新质生产力发展的人力资源基础，助力我国人口高质量发展。<br>
《工作要点》明确了工作目标：到2025年底，我国全民数字素养与技能发展水平再上新台阶，数字素养与技能培育体系基本建成，数字资源供给能力显著增强，数字人才队伍进一步壮大，劳动者数字工作能力明显提高，群体间数字技能鸿沟不断缩小，数字发展环境更加普惠包容，数字生活智慧便捷，网络空间安全有序，数字法治道德伦理水平持续提升。<br>
《工作要点》部署了6个方面16项重点任务。一是健全数字人才培育体系，包括培养复合型人工智能人才、完善高水平人才培育体系、壮大应用型技能人才队伍、增强劳动者数字工作能力。二是拓展数字经济增长空间，包括释放数字消费潜力、激发企业数字动能。三是构建普惠包容数字社会，包括推进数字助老助残行动、促进教学资源开放共享、实施数字公益志愿项目。四是打造智慧便捷数字生活，包括强化人工智能应用赋能、丰富新型数字应用场景。五是营造安全有序数字环境，包括健全人工智能治理机制、强化法治道德规范意识、筑牢网络安全防护屏障。六是完善协同联动工作格局，包括深化多方协作机制、加强国际交流合作。<br></p>
`,
        },
        {
          title: "世界互联网大会举行人工智能发展与治理交谈会",
          desc: `<p>来源：&nbsp;<a href="https://www.cac.gov.cn/">中国网信网</a><br></p>
<br>
7月23日下午，世界互联网大会人工智能发展与治理交流会在福建泉州举行。中国国家互联网信息办公室副主任王京涛出席会议并介绍中国人工智能发展与治理情况。世界互联网大会秘书长任贤良致欢迎辞。<br>
会议指出，中国高度重视人工智能的发展与安全。当前中国人工智能发展呈现积极有序发展的良好态势，一是坚持政策供给，初步构建中国特色人工智能安全治理体系；二是坚持创新发展，积极发挥人工智能新质生产力作用；三是坚持安全保障，全生命周期助力企业提升安全防护能力；四是坚持合作开放，携手构建网络空间命运共同体。下一步将持续健全治理机制，统筹发展和安全，进一步推动人工智能向着有益、安全、公平的方向健康有序发展。<br>
中国国家互联网信息办公室网络管理技术局、网络安全协调局、国际合作局负责人参加会议，并在互动环节就人工智能相关政策问题与会员代表进行交流。与会代表表示，本次交流会加深了企业对政策的了解，积极回应了企业关切，希望大会继续组织专题交流活动，为会员搭建广泛交流、深度沟通的平台，持续助力企业成长发展。<br>
本次活动由世界互联网大会主办，来自高通、IBM、诺基亚贝尔、华为、平安集团、百度、腾讯、京东、澳门电讯、麒盛科技、VIVO等50余家会员企业代表参会。<br>`,
        }
      ],
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