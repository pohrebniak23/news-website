import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator';
import { Theme } from 'shared/contexts';
import { Button } from './Button';

export default {
  title: 'shared/Button',
  component: Button,
  argTypes: {},
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: 'Test',
};

export const DefaultDark = Template.bind({});
DefaultDark.args = {
  children: 'Test',
};
DefaultDark.decorators = [ThemeDecorator(Theme.DARK)];

export const Clear = Template.bind({});
Clear.args = {
  children: 'Test',
  theme: 'clear',
};

export const ClearDark = Template.bind({});
ClearDark.args = {
  children: 'Test',
  theme: 'clear',
};
ClearDark.decorators = [ThemeDecorator(Theme.DARK)];

export const Outline = Template.bind({});
Outline.args = {
  children: 'Test',
  theme: 'outline',
};

export const OutlineDark = Template.bind({});
OutlineDark.args = {
  children: 'Test',
  theme: 'outline',
};
OutlineDark.decorators = [ThemeDecorator(Theme.DARK)];

export const Modal = Template.bind({});
Modal.args = {
  children: 'Test',
  theme: 'modal',
};

export const ModalDisabled = Template.bind({});
ModalDisabled.args = {
  children: 'Test',
  disabled: true,
  theme: 'modal',
};

export const ModalDark = Template.bind({});
ModalDark.args = {
  children: 'Test',
  theme: 'modal',
};

export const ModalDarkDisabled = Template.bind({});
ModalDarkDisabled.args = {
  children: 'Test',
  disabled: true,
  theme: 'modal',
};
