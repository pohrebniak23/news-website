import { memo } from 'react';

export const genericMemoComponent: <T>(component: T) => T = memo;
