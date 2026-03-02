import { PageContainer } from '@ant-design/pro-components';
import styles from './index.module.less';

const PageHome: React.FC = () => {
  const list = [
    {
      title: '企业服务',
      background: 'src/assets/hainan/s1@1x.jpg',
      dsc: '优化业务流程管理、提升跨境业务运营效率，降低运营成本，实现跨境企业运营数据的智能分析和决策支持，提升企业运营效率和市场竞争力。',
    },
    {
      title: '游戏服务',
      background: '/ops-portal/imgs/hainan/s2@1x.jpg',
      dsc: '保障跨国游戏数据合规高效传输、提升游戏全球发行效率、优化多区域玩家体验，实现游戏内容的快速本地化和用户行为分析，提高游戏产品的全球竞争力和用户留存率。',
    },
    {
      title: '影视加工',
      background: '/ops-portal/imgs/hainan/s3@1x.jpg',
      dsc: '提升跨国影视加工协作效率、保障数字版权安全、优化内容分发渠道，实现影视制作素材加密传输和版权认证，加速影视作品全球化进程。',
    },
    {
      title: '商业航天',
      background: '/ops-portal/imgs/hainan/s4@1x.jpg',
      dsc: '强化航天数据跨境共享安全、提升卫星数据服务效率、降低国际合作风险，实现航天数据在研发、发射和应用环节的全球协同，提高国际航天合作项目的成功率。',
    },
    {
      title: '北斗应用',
      background: '/ops-portal/imgs/hainan/s5@1x.jpg',
      dsc: '提升位置数据跨境服务能力、优化全球导航精度、降低多源数据融合成本，实现北斗数据与海外地理信息的合规融合，增强位置服务产业的国际竞争力。',
    },
    {
      title: '跨境电商',
      background: '/ops-portal/imgs/hainan/s6@1x.jpg',
      dsc: '实现商家、消费者行为、市场数据合规跨境流动，帮助商家进行全球消费者洞察，优化商品推荐、广告投放策略与供应链响应速度，提高全球电商运营效率和消费者满意度。',
    },
    {
      title: '跨境直播',
      background: '/ops-portal/imgs/hainan/s7@1x.jpg',
      dsc: '保障直播内容合规传播、提升多语种内容审核效率、优化全球分发网络，实现直播流的低延迟跨国传输与实时监管，增强跨国直播业务的稳定性和覆盖面。',
    },
    {
      title: '跨境旅游',
      background: '/ops-portal/imgs/hainan/s8@1x.jpg',
      dsc: '整合全球旅游资源数据、提升旅游服务精准度、优化风险预警机制，实现旅游产品个性化推荐和安全保障，提高游客满意度和行业抗风险能力。',
    },
    {
      title: '跨境制造',
      background: '/ops-portal/imgs/hainan/s9@1x.jpg',
      dsc: '加强全球供应链协同、提升产能调度效率、降低原材料跨境采购风险，实现多国工厂生产数据的同步与智能优化，提高全球制造资源利用效率。',
    },
    {
      title: '远程医疗',
      background: '/ops-portal/imgs/hainan/s10@1x.jpg',
      dsc: '保障跨国诊疗数据安全共享、提升远程手术协作精度、优化医疗资源配置，实现高敏感医疗数据的加密传输和交互，提高全球医疗服务可及性和诊疗效果。',
    },
    {
      title: '远程教育',
      background: '/ops-portal/imgs/hainan/s11@1x.jpg',
      dsc: '实现全球教育资源整合、提升教学质量、优化学习体验，实现教学内容的动态推送和交互，提高教育普惠性和学习效率。',
    },
    {
      title: '学术交流',
      background: '/ops-portal/imgs/hainan/s12@1x.jpg',
      dsc: '推进科研成果跨境合规共享、提升知识产权保护水平、优化学术资源流通效率，实现学术数据的安全开放与联合研究，促进全球科研协作创新。',
    },
    {
      title: '技术共享',
      background: '/ops-portal/imgs/hainan/s13@1x.jpg',
      dsc: '加快技术成果转化效率、保障核心技术知识产权、优化跨国技术交易流程，实现技术专利的跨境安全评估和交易撮合，提高技术创新的全球协作效率。',
    },
  ];
  return (
    <PageContainer>
      <div className={styles.testScene}>
        {list.map((item) => (
          <div
            className={styles.testSceneItem}
            key={item.title}
            style={{
              backgroundImage: `url(${item.background})`,
              backgroundSize: 'cover',
            }}
          >
            <div className={styles.top}>
              <p>{item.title}</p>
            </div>
            <div className={styles.dsc}>{item.dsc}</div>
          </div>
        ))}
      </div>
    </PageContainer>
  );
};

export default PageHome;
