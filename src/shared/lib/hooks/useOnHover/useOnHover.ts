import { useMemo, useState, useCallback } from 'react';

interface BindHover {
  onMouseLeave: () => void;
  onMouseEnter: () => void;
}

type UseOnHoverResult = [boolean, BindHover];

export const useOnHover = () => {
  const [isHover, setIsHover] = useState<boolean>(false);

  const onMouseEnter = useCallback(() => {
    setIsHover(true);
  }, []);

  const onMouseLeave = useCallback(() => {
    setIsHover(false);
  }, []);

  return useMemo<UseOnHoverResult>(
    () => [isHover, { onMouseEnter, onMouseLeave }],
    [isHover, onMouseEnter, onMouseLeave],
  );
};
