import { ComponentStory, ComponentMeta } from '@storybook/react';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator';
import { Theme } from 'shared/contexts/themeContext/ThemeContext';
import HomePage from './HomePage';

export default {
  title: 'pages/HomePage',
  component: HomePage,
  argTypes: {},
} as ComponentMeta<typeof HomePage>;

const Template: ComponentStory<typeof HomePage> = () => <HomePage />;

export const Light = Template.bind({});
Light.decorators = [StoreDecorator({})];

export const Dark = Template.bind({});
Dark.decorators = [ThemeDecorator(Theme.DARK)];
Dark.decorators = [StoreDecorator({})];
