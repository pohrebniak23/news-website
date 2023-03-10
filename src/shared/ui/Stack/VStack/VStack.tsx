import classNames from 'classnames';
import { Flex, FlexProps } from '../Flex/Flex';

interface VStackProps extends FlexProps {}

export const VStack = ({ className, children, ...props }: VStackProps) => {
  return (
    <Flex direction="column" className={classNames(className)} {...props}>
      {children}
    </Flex>
  );
};
