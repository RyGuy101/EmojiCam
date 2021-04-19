import { useRef, useCallback } from "react";

export function useConstRefFunc<T extends unknown[], V>(
  fn: (...args: T) => V
): (...args: T) => V {
  const ref = useRef(fn);
  ref.current = fn;
  return useCallback((...args: T) => ref.current(...args), []);
}

function useTimeoutOrInterval(
  callback: () => void,
  delay: number,
  setFunc: typeof window.setTimeout | typeof window.setInterval,
  clearFunc: typeof window.clearTimeout | typeof window.clearInterval
) {
  const callbackRef = useRef(callback);
  callbackRef.current = callback;
  const handleRef = useRef<number | undefined>(undefined);

  const clear = () => {
    clearFunc(handleRef.current);
  };
  const start = () => {
    clear();
    handleRef.current = setFunc(() => callbackRef.current(), delay);
  };

  return [start, clear] as const;
}

export function useTimeout(callback: () => void, delay: number) {
  return useTimeoutOrInterval(
    callback,
    delay,
    window.setTimeout,
    window.clearTimeout
  );
}

export function useInterval(callback: () => void, delay: number) {
  return useTimeoutOrInterval(
    callback,
    delay,
    window.setInterval,
    window.clearInterval
  );
}
