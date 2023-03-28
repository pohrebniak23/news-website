import classNames from 'classnames';
import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { AppLink } from 'shared/ui/AppLink/AppLink';
import { HStack } from 'shared/ui/Stack';
import { Text } from 'shared/ui/Text';
import { getMenuItems } from '../../models/selectors/getMenuItems';
import { MenuLinksListType } from '../../models/types/menuLinksList';
import styles from './MenuLinkList.module.scss';

interface MenuLinkListProps {
  className?: string;
}

export const MenuLinkList = memo(({ className }: MenuLinkListProps) => {
  const { t } = useTranslation();
  const menuLinksList = useSelector(getMenuItems);

  return (
    <HStack w100={false} gap="48" className={className}>
      {menuLinksList.map((item: MenuLinksListType) => (
        <AppLink to={item.path} className={classNames(styles.link)}>
          <Text size="s" className={styles.linkText}>
            {t(item.text)}
          </Text>
        </AppLink>
      ))}
    </HStack>
  );
});
