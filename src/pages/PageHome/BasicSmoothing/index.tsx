import useObserver from '@/hooks/useObserver';
import { Divider } from 'antd';
import { useRef, useState } from 'react';
import styles from './index.module.less';

const BasicSmoothing: React.FC = () => {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  useObserver(ref, setIsVisible, 0.3);
  const list = [
    {
      title: '智能客服系统',
      background: require('../../../assets/hainan/card1.png'),
      dsc: '基于AI的多语言对话引擎，实现7×24小时客户响应，自动识别用户意图并提供精准解决方案，显著降低人工客服成本，提升用户满意度。',
    },
    {
      title: '云端协同办公',
      background: require('../../../assets/hainan/card2.png'),
      dsc: '支持跨地域团队实时协作的文档与项目管理平台，集成版本控制、权限管理和智能提醒，保障数据安全的同时提升远程工作效率。',
    },
    {
      title: '数字内容审核',
      background: require('../../../assets/hainan/card1.png'),
      dsc: '利用深度学习模型对图文、视频内容进行自动化合规检测，识别敏感信息与违规内容，助力企业高效满足全球内容监管要求。',
    },
    {
      title: '绿色数据中心',
      background: require('../../../assets/hainan/card2.png'),
      dsc: '采用液冷与智能调度技术的新一代低碳数据中心，PUE值低于1.15，为高算力业务提供稳定、节能、可持续的基础设施支持。',
    },
  ];
  return (
    <div className={styles.testScene} ref={ref}>
      <Divider>
        <p className={styles.title}>平滑入场</p>
      </Divider>
      <div className={styles.testSceneItemList}>
        {list.map((item, index) => (
          <div
            className={`${styles.testSceneItem} ${
              isVisible ? styles['animate-in'] : ''
            }`}
            key={item.title}
            style={{
              backgroundImage: ` linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(${item.background})`,
              backgroundSize: 'cover',
              animationDelay: `${index * 0.1}s`,
            }}
          >
            <div className={styles.titleName}>{item.title}</div>
            <div className={styles.dsc}>{item.dsc}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BasicSmoothing;
