import BasicSmoothing from './BasicSmoothing';
import Empty from './Empty';
import styles from './index.module.less';

const PageHome = () => {
  return (
    <div className={styles.main}>
      <Empty />
      <BasicSmoothing />
    </div>
  );
};

export default PageHome;
