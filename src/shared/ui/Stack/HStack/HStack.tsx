import classNames from 'classnames';
import { Flex, FlexProps } from '../Flex/Flex';

interface HStackProps extends FlexProps {}

export const HStack = ({ className, children, ...props }: HStackProps) => {
  return (
    <Flex direction="row" className={classNames(className)} {...props}>
      {children}
    </Flex>
  );
};
