<template>
  <v-tooltip left open-delay="900">
    <template v-slot:activator="{ on }">
      <v-fab-transition>
        <v-btn
          v-scroll="onScroll"
          v-show="isShowGoToTopButton"
          v-on="on"
          fab
          dark
          fixed
          bottom
          right
          color="secondary"
          @click="onClickGoToTopButton"
        >
          <v-icon dark large>
            mdi-chevron-up
          </v-icon>
        </v-btn>
      </v-fab-transition>
    </template>
    <span>{{ $t('GoToTopButton.tooltip')}}</span>
  </v-tooltip>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class GoToTopButton extends Vue {
  private isShowGoToTopButton = false;

  onScroll(event: Event) {
    if (typeof window === 'undefined') {
      return;
    }
    let scrollTop = 0;
    if (event.target instanceof HTMLInputElement) {
      scrollTop = event.target.scrollTop;
    }
    const top = window.pageYOffset || scrollTop || 0;
    this.isShowGoToTopButton = top > 20;
  }

  onClickGoToTopButton() {
    this.$vuetify.goTo(0);
  }
}
</script>
