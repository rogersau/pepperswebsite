import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Sgt. Peppers DayZ Invasion",
  description: "DayZ Invasion",
  transformHead({ assets }) {
    const fontFile = assets.find(file => /28dayslater\.\w+\.woff2/.test(file))
    if (fontFile) {
      return [
        [
          'link',
          {
            rel: 'preload',
            href: fontFile,
            as: 'font',
            type: 'font/woff2',
            crossorigin: ''
          }
        ]
      ]
    }
  },
  themeConfig: {
    logo: '/sgtpepper.png',
    footer: {
      copyright: '© 2024 Sgt. Pepper\'s DayZ Invasion',
    },
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Servers', link: '/servers/sakhal' }, // Assuming the link is to a page listing servers, changed for clarity
      { text: 'FAQ', link: '/faq/lifetimes' },
    ],

    sidebar: [
      {
        text: 'Servers',
        items: [
          { text: 'Sakhal', link: '/servers/sakhal' },
          { text: 'Chernarus', link: '/servers/chernarus' },
        ]
      },
      {
        text: 'FAQ',
        items: [
          { text: 'Lifetimes', link: '/faq/lifetimes' },
        ]
      }
    ],

    socialLinks: [
      { icon: 'discord', link: 'https://discord.gg/qU2V7Dbt97' }
    ]
  }
})
