import { ComponentMeta, ComponentStory } from '@storybook/react';
import { UserRole } from 'entities/User';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator';
import { Theme } from 'shared/contexts/themeContext/ThemeContext';
import { CommentItem } from './CommentItem';

export default {
  title: 'entities/Comment/CommentItem',
  component: CommentItem,
  argTypes: {},
} as ComponentMeta<typeof CommentItem>;

const Template: ComponentStory<typeof CommentItem> = (args) => (
  <CommentItem {...args} />
);

export const Light = Template.bind({});
Light.args = {
  comment: {
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
};

export const Dark = Template.bind({});
Dark.args = {
  comment: {
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
};
Dark.decorators = [ThemeDecorator(Theme.DARK)];
