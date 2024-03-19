# Prime Vue Nuxt with Tailwind setup

## Setup

Make sure to install the dependencies:

```bash
pnpm install
```

## Development Server

Start the development server on `http://localhost:3000`:

```bash
pnpm run dev
```

## Production

Build the application for production:

```bash
pnpm run build
```

Locally preview production build:

```bash
pnpm run preview
```

## Tailwind with Prime Vue

First install the @nuxtjs/tailwindcss and nuxt-primevue packages and add it to your modules:

```bash
pnpm i @nuxtjs/tailwindcss -D
pnpm i nuxt-primevue -D
pnpm i primevue
```

```ts
modules: [
  'nuxt-primevue',
  '@nuxtjs/tailwindcss',
],
```

**Nuxt Config**
*The following needs to be added in the primevue option in the nuxt.config.ts file, unless stated otherwise.*

```ts
primevue: {
  ...
}
```

A good practice with PrimeVue would be to add a prefix to the components, such as the following:

```ts
components: {
  prefix: 'Prime',
},
```

When using tailwind with prime vue, the option unstyled needs to be true:

```ts
options: {
  unstyled: true,
}
```

Importing the presets will be done with the following line of code:
*(Make sure the presets folder is in the root of the application)*

```ts
importPT: { from: path.resolve(__dirname, './presets/')}
```

Just make sure to import path at the top of the config file:

```ts
import path from 'path';
```

You can download presets here:
https://tailwind.primevue.org/builder/

Or copy a specific preset under the presets tab, for example here:
https://tailwind.primevue.org/autocomplete/

When adding a preset, just update the `index.js` file in presets folder.
By adding for example the following:

```ts
import avatar from './avatar/index.js';

return {
  avatar,
}
```
**Tailwind Config**
Create a `tailwind.config.ts` file and add it to the root of the application and add the following:

```ts
import type { Config } from 'tailwindcss'

export default <Partial<Config>>{
  content: [
    "presets/**/*.{js,vue,ts}"
  ],
  theme: {
      extend: {
          colors: {
              'primary-50': 'rgb(var(--primary-50))',
              'primary-100': 'rgb(var(--primary-100))',
              'primary-200': 'rgb(var(--primary-200))',
              'primary-300': 'rgb(var(--primary-300))',
              'primary-400': 'rgb(var(--primary-400))',
              'primary-500': 'rgb(var(--primary-500))',
              'primary-600': 'rgb(var(--primary-600))',
              'primary-700': 'rgb(var(--primary-700))',
              'primary-800': 'rgb(var(--primary-800))',
              'primary-900': 'rgb(var(--primary-900))',
              'primary-950': 'rgb(var(--primary-950))',
              'surface-0': 'rgb(var(--surface-0))',
              'surface-50': 'rgb(var(--surface-50))',
              'surface-100': 'rgb(var(--surface-100))',
              'surface-200': 'rgb(var(--surface-200))',
              'surface-300': 'rgb(var(--surface-300))',
              'surface-400': 'rgb(var(--surface-400))',
              'surface-500': 'rgb(var(--surface-500))',
              'surface-600': 'rgb(var(--surface-600))',
              'surface-700': 'rgb(var(--surface-700))',
              'surface-800': 'rgb(var(--surface-800))',
              'surface-900': 'rgb(var(--surface-900))',
              'surface-950': 'rgb(var(--surface-950))'
          }
      }
  }
}
```

Then make sure you create a `base.css` file in the `assets/css` folder with the following code:

```css
:root {
  --primary-50: 249 246 254;
  --primary-100: 242 234 253;
  --primary-200: 230 216 252;
  --primary-300: 211 185 249;
  --primary-400: 184 140 244;
  --primary-500: 157 96 236;
  --primary-600: 134 63 222;
  --primary-700: 114 46 194;
  --primary-800: 97 42 159;
  --primary-900: 77 34 123;
  --primary-950: 52 13 94;
  --surface-0: 255 255 255;
  --surface-50: 248 250 252;
  --surface-100: 241 245 249;
  --surface-200: 226 232 240;
  --surface-300: 203 213 225;
  --surface-400: 148 163 184;
  --surface-500: 100 116 139;
  --surface-600: 71 85 105;
  --surface-700: 45 55 72;
  --surface-800: 30 41 59;
  --surface-900: 15 23 42;
  --surface-950: 3 6 23;
}
```
This will be the file where you change the colors.
You can a generate a color palette here in the right format:
https://uicolors.app/create

---

By adding a `tailwind.css` file in the `assets/css` folder, you can add some extra styling, or create new classes:

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  body {
    @apply bg-surface-50 dark:bg-surface-800
  }
}
```

**Dark Mode**

Adding dark mode styling is really simple when using tailwind.
Just add `dark:` in front of each class which should only be added during dark mode.

To work with darkmode when using Nuxt with tailwind you need to add and install the following:

```bash
pnpm i @nuxtjs/color-mode -D
```

`nuxt.config.ts`
```ts
modules: [
  '@nuxtjs/color-mode',
]
```

`tailwind.config.ts`
```ts
darkMode: 'class',
```

`nuxt.config.ts`
```ts
colorMode: {
  classSuffix: ''
},
```
