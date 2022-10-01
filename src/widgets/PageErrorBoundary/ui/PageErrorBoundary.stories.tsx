import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator';
import { Theme } from 'shared/contexts/themeContext/ThemeContext';
import { PageErrorBoundary } from './PageErrorBoundary';

export default {
  title: 'widgets/PageErrorBoundary',
  component: PageErrorBoundary,
  argTypes: {},
} as ComponentMeta<typeof PageErrorBoundary>;

const Template: ComponentStory<typeof PageErrorBoundary> = () => (
  <PageErrorBoundary />
);

export const Light = Template.bind({});

export const Dark = Template.bind({});
Dark.decorators = [ThemeDecorator(Theme.DARK)];
