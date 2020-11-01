import { useEffect, useRef } from "react";

const usePrevious = (value: any) => {
  const ref = useRef(value);

  useEffect(() => {
    ref.current = value;
  });

  return ref.current;
};

export default usePrevious;
