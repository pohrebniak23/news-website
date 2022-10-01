import { Story } from '@storybook/react';
import { ThemeProvider } from 'shared/contexts';
import { Theme } from 'shared/contexts/themeContext/ThemeContext';

export const ThemeDecorator = (theme: Theme) => (StoryComponent: Story) => {
  return (
    <ThemeProvider>
      <div className={`app ${theme}`}>
        <StoryComponent />
      </div>
    </ThemeProvider>
  );
};
