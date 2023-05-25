import { useState, useEffect } from "react";

function useDebounce(value: any, delay: number) {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const timerId = setTimeout(() => {
      setDebouncedValue(value);
    }, delay ?? 500);

    return () => {
      clearTimeout(timerId);
    };
  }, [value, delay]);

  return debouncedValue;
}
export default useDebounce;
