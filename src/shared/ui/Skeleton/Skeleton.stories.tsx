import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator';
import { Theme } from 'shared/contexts/themeContext/ThemeContext';
import { Skeleton } from './Skeleton';

export default {
  title: 'shared/Skeleton',
  component: Skeleton,
  argTypes: {},
} as ComponentMeta<typeof Skeleton>;

const Template: ComponentStory<typeof Skeleton> = (args) => (
  <Skeleton {...args} />
);

export const Light = Template.bind({});
Light.args = {
  width: '100px',
  height: '100px',
  borderRadius: '50%',
};

export const Dark = Template.bind({});
Dark.args = {
  width: '100px',
  height: '100px',
  borderRadius: '50%',
};
Dark.decorators = [ThemeDecorator(Theme.DARK)];
