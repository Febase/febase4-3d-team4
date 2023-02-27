import { useCallback, useEffect, useRef } from "react";

interface Times {
  maxMs: number;
  startMs: number;
  /**
   * @description
   * 시간이 줄어드는 간격
   */
  interval: number;
}

export function useDecelerateInterval(callback: VoidFunction, times: Times) {
  const timerRef = useRef<ReturnType<typeof setTimeout>>();
  const callbackRef = useRef<typeof callback>();

  useEffect(() => {
    callbackRef.current = callback;
  }, [callback]);

  const executeCallback = ({ maxMs, startMs, interval }: Times) => {
    timerRef.current = setTimeout(() => {
      if (callbackRef.current) {
        callbackRef.current();
      }
      executeCallback({ startMs: startMs * interval, interval, maxMs });
    }, Math.min(startMs, maxMs));
  };

  const startInterval = useCallback(() => {
    if (!timerRef.current) {
      executeCallback(times);
    }
  }, []);

  const stopInterval = useCallback(() => {
    if (timerRef.current) {
      clearInterval(timerRef.current);
      timerRef.current = undefined;
    }
  }, []);

  return { startInterval, stopInterval };
}
