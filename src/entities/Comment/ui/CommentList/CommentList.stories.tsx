import { ComponentMeta, ComponentStory } from '@storybook/react';
import { UserRole } from 'entities/User';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator';
import { Theme } from 'shared/contexts/themeContext/ThemeContext';
import { CommentList } from './CommentList';

export default {
  title: 'entities/Comment/CommentList',
  component: CommentList,
  argTypes: {},
} as ComponentMeta<typeof CommentList>;

const Template: ComponentStory<typeof CommentList> = (args) => (
  <CommentList {...args} />
);

export const Light = Template.bind({});
Light.args = {
  comments: [
    {
      user: {
        id: '0',
        username: 'admin',
        role: UserRole.ADMIN,
        avatar:
          'https://d1fmx1rbmqrxrr.cloudfront.net/cnet/optim/i/edit/2019/04/eso1644bsmall__w770.jpg',
      },
      articleId: '1',
      text: 'Good article',
      id: '0',
    },
    {
      user: {
        id: '1',
        username: 'admin',
        role: UserRole.ADMIN,
        avatar:
          'https://d1fmx1rbmqrxrr.cloudfront.net/cnet/optim/i/edit/2019/04/eso1644bsmall__w770.jpg',
      },
      articleId: '1',
      text: 'Good article',
      id: '0',
    },
  ],
};

export const Dark = Template.bind({});
Dark.args = {
  comments: [
    {
      user: {
        id: '0',
        username: 'admin',
        role: UserRole.ADMIN,
        avatar:
          'https://d1fmx1rbmqrxrr.cloudfront.net/cnet/optim/i/edit/2019/04/eso1644bsmall__w770.jpg',
      },
      articleId: '1',
      text: 'Good article',
      id: '0',
    },
    {
      user: {
        id: '0',
        username: 'admin',
        role: UserRole.ADMIN,
        avatar:
          'https://d1fmx1rbmqrxrr.cloudfront.net/cnet/optim/i/edit/2019/04/eso1644bsmall__w770.jpg',
      },
      articleId: '1',
      text: 'Good article',
      id: '0',
    },
  ],
};
Dark.decorators = [ThemeDecorator(Theme.DARK)];

export const LightNotFound = Template.bind({});
LightNotFound.args = {
  comments: undefined,
};
LightNotFound.decorators = [ThemeDecorator(Theme.DARK)];

export const DarkNotFound = Template.bind({});
DarkNotFound.args = {
  comments: undefined,
};
DarkNotFound.decorators = [ThemeDecorator(Theme.DARK)];
