import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator';
import { Theme } from 'shared/contexts/themeContext/ThemeContext';
import { Text, TextSize, TextTheme } from './Text';

export default {
  title: 'shared/Text',
  component: Text,
  argTypes: {},
} as ComponentMeta<typeof Text>;

const Template: ComponentStory<typeof Text> = (args) => <Text {...args} />;

export const Light = Template.bind({});
Light.args = {
  size: TextSize.SMALL,
  theme: TextTheme.DEFAULT,
  children: 'Test string',
};

export const Dark = Template.bind({});
Dark.args = {
  size: TextSize.SMALL,
  theme: TextTheme.DEFAULT,
  children: 'Test string',
};
Dark.decorators = [ThemeDecorator(Theme.DARK)];

export const LightErrorText = Template.bind({});
LightErrorText.args = {
  size: TextSize.MEDIUM,
  theme: TextTheme.ERROR,
  children: 'Test string',
};

export const DarkErrorText = Template.bind({});
DarkErrorText.args = {
  size: TextSize.MEDIUM,
  theme: TextTheme.ERROR,
  children: 'Test string',
};
DarkErrorText.decorators = [ThemeDecorator(Theme.DARK)];
