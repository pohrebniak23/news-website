import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator';
import { Theme } from 'shared/contexts/themeContext/ThemeContext';
import { Avatar } from './Avatar';

export default {
  title: 'shared/Avatar',
  component: Avatar,
  argTypes: {},
} as ComponentMeta<typeof Avatar>;

const Template: ComponentStory<typeof Avatar> = (args) => <Avatar {...args} />;

export const Light = Template.bind({});
Light.args = {
  widthSize: '120px',
  heightSize: '120px',
  src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/640px-Image_created_with_a_mobile_phone.png',
};

export const Dark = Template.bind({});
Dark.args = {
  widthSize: '120px',
  heightSize: '120px',
  src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/640px-Image_created_with_a_mobile_phone.png',
};
Dark.decorators = [ThemeDecorator(Theme.DARK)];

export const LightRound = Template.bind({});
LightRound.args = {
  widthSize: '120px',
  heightSize: '120px',
  radius: '50%',
  src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/640px-Image_created_with_a_mobile_phone.png',
};

export const DarkRound = Template.bind({});
DarkRound.args = {
  widthSize: '120px',
  heightSize: '120px',
  radius: '50%',
  src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/640px-Image_created_with_a_mobile_phone.png',
};
DarkRound.decorators = [ThemeDecorator(Theme.DARK)];
