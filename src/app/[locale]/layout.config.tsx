import { SiteIcon } from '@/lib/site-config';
import { BaseLayoutProps } from 'fumadocs-ui/layouts/shared';
import { getTranslations } from 'next-intl/server';
import { ExtendedLinkItem, HomeTitle } from '@windrun-huaiin/third-ui/fuma/base';
import { getAsNeededLocalizedUrl } from '@windrun-huaiin/lib';

// home page normal menu
export async function homeNavLinks(_locale: string): Promise<ExtendedLinkItem[]> {
  // const t1 = await getTranslations({ locale: locale, namespace: 'linkPreview' });
  return [
    // {
    //   icon: <icons.BugOff />,
    //   text: t1('blog'),
    //   url: getAsNeededLocalizedUrl(locale, '/blog'),
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
      url: getAsNeededLocalizedUrl(locale, '/'),
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
  };
}