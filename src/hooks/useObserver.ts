import { useEffect, useRef } from 'react';

type Threshold = number | number[];

export default (
  ref: React.RefObject<HTMLElement>,
  setActive: (isActive: boolean) => void,
  threshold: Threshold = 0.4,
) => {
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    if (!ref.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        // 只处理当前目标元素
        const entry = entries[0];
        if (entry) {
          setActive(entry.isIntersecting);
        }
      },
      { root: null, rootMargin: '0px', threshold },
    );

    // 保存实例用于清理
    observerRef.current = observer;
    observer.observe(ref.current);

    // 清理函数：组件卸载或 ref 变化时断开 observer
    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
        observerRef.current = null;
      }
    };
  }, [ref, setActive, threshold]);
};
