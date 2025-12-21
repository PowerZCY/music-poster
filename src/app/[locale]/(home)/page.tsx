import { Hero } from "@/components/hero";
import { FAQ, SeoContent } from "@windrun-huaiin/third-ui/main/server";
import { appConfig } from "@/lib/appConfig";

export const revalidate = false;

export default async function Home({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  return (
    <>
      <Hero locale={locale} />
      <SeoContent locale={locale} />
      <FAQ locale={locale} />
    </>
  )
}

export async function generateStaticParams() {
  return appConfig.i18n.locales.map(locale => ({ locale }));
}
