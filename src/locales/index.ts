import Vue from 'vue';
import VueI18n from 'vue-i18n';

import jaLocale from './ja';
import enLocale from './en';

Vue.use(VueI18n);

const messages = {
  ja: jaLocale,
  en: enLocale,
};

const locale = 'ja';

const i18n = new VueI18n({
  locale,
  messages,
});

export default i18n;
