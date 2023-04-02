import React, { RefObject, useEffect, useState } from 'react';

export function useOnScreen(ref: RefObject<Element>, options?: IntersectionObserverInit, runOnce?: boolean) {
  const [isIntersecting, setIntersecting] = useState(false);

  const observer = React.useMemo(() => new IntersectionObserver(([entry]) => setIntersecting(entry.isIntersecting), options), []);

  useEffect(() => {
    if (ref.current) observer.observe(ref.current);
    return () => {
      observer.disconnect();
    };
  }, []);

  useEffect(() => {
    if (runOnce && isIntersecting) {
      observer.disconnect();
    }
  }, [runOnce, isIntersecting]);

  return isIntersecting;
}
