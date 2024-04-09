# Vitesse Tailwind Shadcn

## Introduction

Template of `Vitesee - UnoCSS + TailwindCSS + Shadcn/vue`

### Install

```bash
npm -i g pnpm

pnpm i
```

### Development

```bash
pnpm dev

# Build Project
pnpm build

# Preview
pnpm preview

# Check Lint
pnpm lint

# Check Lint and Fix All
pnpm fix
```

### Router

Route-based auto router at `/src/pages`

> https://github.com/posva/unplugin-vue-router

### Component

Auto import components in `/src/components`

> https://github.com/antfu/unplugin-vue-components

- Components of module a in `/src/a`
- Window-related components (Nav, Footer) in `window`
- `shadcn/vue` components auto-installed in `/src/ui`

> https://www.shadcn-vue.com/

Install `shadcn/vue` components

```bash
pnpx shadcn-vue@latest add button

# Install Multiple Components
pnpx shadcn-vue@latest add button avatar input
```

### Composable Codes

All exports in `/src/composables` are auto-imported. Used for decoupling of common logics, such as dark mode, and get recent posts.

> https://github.com/antfu/unplugin-auto-import

### Markdown

- Support writing `.md` directly in `/src/pages/`. Adding `title` in head metadata to replace the title of the page
- Support Vue component in markdown, refer to `/src/pages/index.vue`
- Support importing `.md` in Vue
- Markdown Styles Modification: `/src/styles/markdown.scss`
- Images in `/public`. See `/public` as `/` to fill up image paths

> https://github.com/unplugin/unplugin-vue-markdown

### Other

Ref to `./template.md`  `./template.zh-CN.md` and original `Vitesse` Documentation.

> https://github.com/antfu/vitesse
