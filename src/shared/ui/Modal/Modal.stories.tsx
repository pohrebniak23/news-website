import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator';
import { Theme } from 'shared/contexts/themeContext/ThemeContext';
import { Modal } from './Modal';

export default {
  title: 'shared/Modal',
  component: Modal,
  argTypes: {},
} as ComponentMeta<typeof Modal>;

const Template: ComponentStory<typeof Modal> = (args) => <Modal {...args} />;

export const Light = Template.bind({});
Light.args = {
  isOpen: true,
  children:
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga culpa reprehenderit nobis consequatur beatae nihil rem eveniet corrupti labore, cupiditate sed neque quisquam dicta ipsum sequi sunt odit. Consequuntur, voluptatem.',
};

export const Dark = Template.bind({});
Dark.args = {
  isOpen: true,
  children:
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga culpa reprehenderit nobis consequatur beatae nihil rem eveniet corrupti labore, cupiditate sed neque quisquam dicta ipsum sequi sunt odit. Consequuntur, voluptatem.',
};
Dark.decorators = [ThemeDecorator(Theme.DARK)];
