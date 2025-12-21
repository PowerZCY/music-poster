import { i18n } from '@/i18n';
import { SiteIcon } from '@/lib/site-config';
// import { globalLucideIcons as icons } from '@windrun-huaiin/base-ui/components/server';
import { BaseLayoutProps } from 'fumadocs-ui/layouts/shared';
import { getTranslations } from 'next-intl/server';
import { ExtendedLinkItem, HomeTitle } from '@windrun-huaiin/third-ui/fuma/base';

// home page normal menu
export async function homeNavLinks(_locale: string): Promise<ExtendedLinkItem[]> {
  // const t1 = await getTranslations({ locale: locale, namespace: 'linkPreview' });
  return [
    // {
    //   icon: <icons.BugOff />,
    //   text: t1('blog'),
    //   url: `/${locale}/blog`,
    // },
    
  ];
}

// level special menu
export async function levelNavLinks(_locale: string): Promise<ExtendedLinkItem[]> {
  return [];
}

export async function baseOptions(locale: string): Promise<BaseLayoutProps> {
  const t = await getTranslations({ locale: locale, namespace: 'home' });
  return {
    nav: {
      url: `/${locale}`,
      title: (
        <>
          <SiteIcon />
          <HomeTitle>
            {t('title')}
          </HomeTitle>
        </>
      ),
      transparentMode: 'none',
    },
    i18n,
    
  };
}