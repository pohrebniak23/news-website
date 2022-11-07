import { ComponentMeta, ComponentStory } from '@storybook/react';
import { LoginReducer } from 'features/AuthByUsername/models/slices/LoginSlice';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator';
import { Theme } from 'shared/contexts/themeContext/ThemeContext';
import { Navbar } from './Navbar';

export default {
  title: 'widgets/Navbar',
  component: Navbar,
  argTypes: {},
} as ComponentMeta<typeof Navbar>;

const Template: ComponentStory<typeof Navbar> = (args) => <Navbar {...args} />;

export const LightUnAuthorize = Template.bind({});
LightUnAuthorize.args = {};
LightUnAuthorize.decorators = [StoreDecorator({})];

export const DarkUnAuthorize = Template.bind({});
DarkUnAuthorize.args = {};
DarkUnAuthorize.decorators = [ThemeDecorator(Theme.DARK)];
DarkUnAuthorize.decorators = [StoreDecorator({})];

export const LightAuthorize = Template.bind({});
LightAuthorize.args = {};
LightAuthorize.decorators = [
  StoreDecorator(
    {
      user: {
        authData: {
          id: '1',
          username: 'Jack',
        },
      },
    },
    { loginForm: LoginReducer },
  ),
];
