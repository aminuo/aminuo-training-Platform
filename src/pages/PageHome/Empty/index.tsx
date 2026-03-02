import styles from './index.module.less';

const Empty: React.FC = () => {
  return (
    <div className={styles.empty}>
      <div className={styles.emptyTitle}>占位块</div>
    </div>
  );
};

export default Empty;
