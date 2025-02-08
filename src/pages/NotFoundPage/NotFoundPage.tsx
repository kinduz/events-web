import { t } from 'i18next';
import { Flex } from '@/shared';

const NotFoundPage = () => {
  return (
    <Flex vertical gap={8}>
      <span>{t('notFoundPage.first')}</span>
      <span>{t('notFoundPage.second')}</span>
    </Flex>
  );
};

export default NotFoundPage;
