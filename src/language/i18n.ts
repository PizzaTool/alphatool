import { createI18n } from 'vue-i18n';
import en from './lang/en.json';
import zh from './lang/zh.json';
import ja from './lang/ja.json';
import ko from './lang/ko.json';

const messages = {
  en,
  zh,
	ja,
	ko
};

const i18n = createI18n({
  locale: 'zh', // 设置默认语言
  fallbackLocale: 'en', // 设置备用语言
  messages, // 设置本地化信息
});

export default i18n;