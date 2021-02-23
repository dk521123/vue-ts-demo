<template>
  <v-navigation-drawer
    v-model="isShowedDrawer"
    :mini-variant.sync="isExpanded"
    permanent
    width="200"
    app
    class="pt-0"
    color="accent-4 lighten-3"
    id="navigation-drawer"
  >
    <v-list
      nav
      dense
    >
      <!-- Menu -->
      <v-list-item
        link
        @click="setExpanded()"
      >
        <v-tooltip bottom open-delay="1500">
          <template v-slot:activator="{ on }">
            <v-list-item-icon
              v-on="on"
            >
              <v-icon v-if="isExpanded">
                mdi-menu
              </v-icon>
              <v-icon v-else>
                mdi-chevron-left
              </v-icon>
            </v-list-item-icon>
            <v-list-item-title>
              {{ $t('Drawer.menu') }}
            </v-list-item-title>
          </template>
          <span>{{ $t('Drawer.menu') }}</span>
        </v-tooltip>
      </v-list-item>

      <v-divider class="mb-2" />

      <!-- Other Menu items -->
      <base-item
        :item="{
          title: $t('upgrade'),
          icon: 'mdi-package-up',
          to: '/upgrade',
        }"
      />
      <v-list-item
        link
        v-for="(menuItem, key) in menuItems"
        :key="key"
      >
        <v-tooltip bottom open-delay="500">
          <template v-slot:activator="{ on }">
            <v-list-item-icon
              v-on="on"
            >
              <v-icon>{{ menuItem.icon }}</v-icon>
            </v-list-item-icon>
            <v-list-item-title>
              {{
                $t(menuItem.titleKey)
              }}
            </v-list-item-title>
          </template>
          <span>{{ $t(menuItem.titleKey) }}</span>
        </v-tooltip>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class Drawer extends Vue {
  private isExpanded = false;

  private isShowedDrawer = true;

  private menuItems = [
    {
      icon: 'mdi-view-dashboard',
      titleKey: 'Drawer.dashboard',
      to: '/',
    },
    {
      icon: 'mdi-account',
      titleKey: 'Drawer.user',
      to: '/pages/user',
    },
    {
      icon: 'mdi-folder',
      titleKey: 'Drawer.folder',
      to: '/tables/regular-tables',
    },
    {
      icon: 'mdi-bell',
      titleKey: 'Drawer.notifications',
      to: '/components/notifications',
    },
  ];

  setExpanded() {
    this.isExpanded = !this.isExpanded;
  }
}
</script>
