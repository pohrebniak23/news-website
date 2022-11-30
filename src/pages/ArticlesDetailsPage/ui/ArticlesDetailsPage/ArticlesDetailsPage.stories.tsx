import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator';
import { Theme } from 'shared/contexts/themeContext/ThemeContext';
import ArticlesDetailsPage from './ArticlesDetailsPage';

export default {
  title: '/AriclesDetailsPage',
  component: ArticlesDetailsPage,
  argTypes: {},
} as ComponentMeta<typeof ArticlesDetailsPage>;

const Template: ComponentStory<typeof ArticlesDetailsPage> = () => (
  <ArticlesDetailsPage />
);

export const Light = Template.bind({});
Light.args = {};

export const Dark = Template.bind({});
Dark.args = {};
Dark.decorators = [ThemeDecorator(Theme.DARK)];
