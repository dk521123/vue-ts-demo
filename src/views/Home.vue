<template>
  <div class="home">
    <v-container>
      <v-row cols="4" class="lighten-3" style="height: 150px;">
        <v-col>
          {{ $t('Home.title') }}
        </v-col>
        <v-col cols="8">
          {{ $t('Home.subtitle') }}
        </v-col>
      </v-row>
    </v-container>
    <GoToTopButton />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

import GoToTopButton from '../components/GoToTopButton.vue';

@Component({
  components: {
    GoToTopButton,
  },
})
export default class Home extends Vue {
}
</script>
