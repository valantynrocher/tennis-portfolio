import { useLayoutEffect } from "react";

const useResizeObserver = (
  ref: React.MutableRefObject<HTMLElement | undefined>,
  callback: (entry: ResizeObserverEntry) => void
) => {
  useLayoutEffect(() => {
    if (!ref.current) return;

    const resize = (entries: ResizeObserverEntry[]) => {
      window.requestAnimationFrame(() => {
        if (!Array.isArray(entries) || !entries.length) return;
        const entry = entries[0];
        callback(entry);
      });
    };
    let observer: ResizeObserver | null = new ResizeObserver(resize);
    observer.observe(ref.current);

    return () => {
      observer!.disconnect();
      observer = null;
    };
  }, [callback, ref]);
};

export default useResizeObserver;
