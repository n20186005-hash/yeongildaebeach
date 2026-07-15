export const siteConfig = {
  name: 'Yeongildae Beach',
  baseUrl: 'https://yeongildaebeach.com',
  slug: 'yeongildaebeach',
  locales: ['zh', 'en', 'ja', 'ko'] as const,
};

export const ogLocale: Record<string, string> = {
  zh: 'zh_CN',
  en: 'en_US',
  ja: 'ja_JP',
  ko: 'ko_KR',
};
