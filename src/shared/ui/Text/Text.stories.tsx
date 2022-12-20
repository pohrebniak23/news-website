import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator';
import { Theme } from 'shared/contexts/themeContext/ThemeContext';
import { Text } from './Text';

export default {
  title: 'shared/Text',
  component: Text,
  argTypes: {},
} as ComponentMeta<typeof Text>;

const Template: ComponentStory<typeof Text> = (args) => <Text {...args} />;

export const Light = Template.bind({});
Light.args = {
  size: 'small',
  theme: 'default',
  children: 'Test string',
};

export const Dark = Template.bind({});
Dark.args = {
  size: 'small',
  theme: 'default',
  children: 'Test string',
};
Dark.decorators = [ThemeDecorator(Theme.DARK)];

export const LightErrorText = Template.bind({});
LightErrorText.args = {
  size: 'medium',
  theme: 'error',
  children: 'Test string',
};

export const DarkErrorText = Template.bind({});
DarkErrorText.args = {
  size: 'medium',
  theme: 'error',
  children: 'Test string',
};
DarkErrorText.decorators = [ThemeDecorator(Theme.DARK)];
