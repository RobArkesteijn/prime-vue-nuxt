
<template>
  <div>
      <PrimeMenubar :model="items">
          <template #start>
            <Logo class="fill-surface-950 dark:fill-surface-50 py-2" />
          </template>
          <template #item="{ item, props, hasSubmenu, root }">
              <a v-ripple class="flex items-center" v-bind="props.action">
                  <span :class="item.icon" />
                  <span class="ml-2">{{ item.label }}</span>
                  <PrimeBadge v-if="item.badge" :class="{ 'ml-auto': !root, 'ml-2': root }" :value="item.badge" />
                  <span v-if="item.shortcut" class="ml-auto border border-surface-200 dark:border-surface-500 rounded-md bg-surface-100 dark:bg-surface-800 text-xs p-1">{{ item.shortcut }}</span>
                  <i v-if="hasSubmenu" :class="['pi pi-angle-down text-primary-500 dark:text-primary-400-500 dark:text-primary-400', { 'pi-angle-down ml-2': root, 'pi-angle-right ml-auto': !root }]"></i>
              </a>
          </template>
          <template #end>
              <div class="flex items-center gap-2">
                  <PrimeInputText placeholder="Search" type="text" class="w-[8rem] sm:w-auto" />
                  <PrimeAvatar image="https://avatars.githubusercontent.com/u/137883983?v=4" shape="circle" size="large" />
              </div>
          </template>
      </PrimeMenubar>
  </div>
</template>

<script setup>
import { ref } from "vue";
import Logo from '~/assets/icons/logo.svg?component';

const items = ref([
  {
      label: 'Home',
      icon: 'pi pi-home'
  },
  {
      label: 'Features',
      icon: 'pi pi-star'
  },
  {
      label: 'Projects',
      icon: 'pi pi-search',
      items: [
          {
              label: 'Core',
              icon: 'pi pi-bolt',
              shortcut: '⌘+S'
          },
          {
              label: 'Blocks',
              icon: 'pi pi-server',
              shortcut: '⌘+B'
          },
          {
              label: 'UI Kit',
              icon: 'pi pi-pencil',
              shortcut: '⌘+U'
          },
          {
              separator: true
          },
          {
              label: 'Templates',
              icon: 'pi pi-palette',
              items: [
                  {
                      label: 'Apollo',
                      icon: 'pi pi-palette',
                      badge: 2
                  },
                  {
                      label: 'Ultima',
                      icon: 'pi pi-palette',
                      badge: 3
                  }
              ]
          }
      ]
  },
  {
      label: 'Contact',
      icon: 'pi pi-envelope',
      badge: 3
  }
]);
</script>
