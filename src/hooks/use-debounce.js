import { useState, useEffect } from "react";

export default function useDebounce(value, timeout) {
  const [debouncedValue, setDebouncedValue] = useState("");

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, timeout);
    return () => {
      clearTimeout(handler);
    };
  }, [value, timeout]);

  return debouncedValue;
}
