import { useEffect, useState } from 'react';
/* eslint-disable i18next/no-literal-string */

// Компонент для тестирования ErrorBoundary
export const BugButton = () => {
  const [error, setError] = useState(false);

  const toggleError = () => {
    setError(!error);
    throw new Error();
  };

  useEffect(() => {
    if (error) {
      throw new Error();
    }
  }, [error]);

  return (
    <button type="button" onClick={toggleError}>
      Toggle error
    </button>
  );
};
