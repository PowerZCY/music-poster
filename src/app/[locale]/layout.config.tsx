import { i18n } from '@/i18n';
import { SiteIcon } from '@/lib/site-config';
// import { globalLucideIcons as icons } from '@windrun-huaiin/base-ui/components/server';
import { type LinkItemType } from 'fumadocs-ui/layouts/docs';
import { BaseLayoutProps } from 'fumadocs-ui/layouts/shared';
import { getTranslations } from 'next-intl/server';

// home page normal menu
export async function homeNavLinks(_locale: string): Promise<LinkItemType[]> {
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
export async function levelNavLinks(_locale: string): Promise<LinkItemType[]> {
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
          <span className="font-medium [.uwu_&]:hidden [header_&]:text-[15px]">
            {t('title')}
          </span>
        </>
      ),
      transparentMode: 'none',
    },
    i18n,
    
  };
}