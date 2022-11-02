import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator';
import { Theme } from 'shared/contexts/themeContext/ThemeContext';
import { Loader } from './Loader';

export default {
  title: 'shared/Loader',
  component: Loader,
  argTypes: {
    blockSize: {
      control: { type: 'range', min: 200, max: 1500, step: 50 },
    },
    spinnerSize: {
      control: { type: 'range', min: 200, max: 1500, step: 50 },
    },
    borderDepth: {
      control: { type: 'range', min: 200, max: 1500, step: 50 },
    },
  },
} as ComponentMeta<typeof Loader>;

const Template: ComponentStory<typeof Loader> = () => <Loader />;

export const Light = Template.bind({});
Light.args = {
  blockSize: 120,
  spinnerSize: 120,
  borderDepth: 20,
};

export const Dark = Template.bind({});
Dark.args = {
  blockSize: 40,
  spinnerSize: 40,
  borderDepth: 5,
};
Dark.decorators = [ThemeDecorator(Theme.DARK)];
