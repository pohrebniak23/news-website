import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator';
import { Theme } from 'shared/contexts';
import { Button, ButtonTheme } from './Button';

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
  theme: ButtonTheme.CLEAR,
};

export const ClearDark = Template.bind({});
ClearDark.args = {
  children: 'Test',
  theme: ButtonTheme.CLEAR,
};
ClearDark.decorators = [ThemeDecorator(Theme.DARK)];

export const Outline = Template.bind({});
Outline.args = {
  children: 'Test',
  theme: ButtonTheme.OUTLINE,
};

export const OutlineDark = Template.bind({});
OutlineDark.args = {
  children: 'Test',
  theme: ButtonTheme.OUTLINE,
};
OutlineDark.decorators = [ThemeDecorator(Theme.DARK)];

export const Modal = Template.bind({});
Modal.args = {
  children: 'Test',
  theme: ButtonTheme.MODAL,
};

export const ModalDisabled = Template.bind({});
ModalDisabled.args = {
  children: 'Test',
  disabled: true,
  theme: ButtonTheme.MODAL,
};

export const ModalDark = Template.bind({});
ModalDark.args = {
  children: 'Test',
  theme: ButtonTheme.MODAL,
};

export const ModalDarkDisabled = Template.bind({});
ModalDarkDisabled.args = {
  children: 'Test',
  disabled: true,
  theme: ButtonTheme.MODAL,
};
