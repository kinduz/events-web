import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { HeaderStyled } from './Header.styles';
import { Flex, useTheme } from '@/shared';

export const Header = () => {
  const { toggleTheme } = useTheme();
  const { i18n, t } = useTranslation();
  return (
    <HeaderStyled>
      <Flex align="center" gap={8} justify="space-between">
        <Link to="/">{t('titleApp')}</Link>
        <Flex align="center" gap={32}>
          <button onClick={() => i18n.changeLanguage('en')}>Язык (en)</button>
          <button onClick={() => i18n.changeLanguage('ru')}>Язык (ru)</button>
          <button onClick={toggleTheme}>Тема</button>
        </Flex>
      </Flex>
    </HeaderStyled>
  );
};
