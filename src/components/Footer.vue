<template>
  <v-footer
    app
    id="footer"
  >
    <span>
      &copy; 2021 sample.com All Rights Reserved.
    </span>
    <v-spacer />
    <v-select
      v-model="$i18n.locale"
      item-text="text"
      item-value="value"
      :items="Languages"
      @change="onChangedLanguage"
    ></v-select>
  </v-footer>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import i18n from '../locales';

@Component
export default class Footer extends Vue {
  Languages = [
    {
      text: 'English',
      value: 'en',
    },
    {
      text: '日本語(Japanese)',
      value: 'ja',
    },
  ];

  /**
   * Event for language v-select.
   * @param {string} language - language(e.g. 'en')
   */
  onChangedLanguage(language: string) {
    i18n.locale = language;
    this.$store.commit('updateLocale', language);
  }
}
</script>
