import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Sgt. Peppers DayZ Invasion",
  description: "DayZ Invasion",
  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }],
  ],
  srcExclude: ['**/README.md'],
  themeConfig: {
    logo: '/sgtpepper.png',
    footer: {
      copyright: '© 2025 Sgt. Pepper\'s DayZ Invasion',
    },
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Servers', link: '/servers/chernarus' }, // Assuming the link is to a page listing servers, changed for clarity
      { text: 'FAQ', link: '/faq' },
    ],

    sidebar: [
      {
        text: 'Servers',
        items: [
          { text: 'Chernarus', link: '/servers/chernarus' },
          { text: 'Deadfall', link: '/servers/deadfall' },
          { text: 'Livonia', link: '/servers/livonia' },
          { text: 'Namalsk', link: '/servers/namalsk' },
          { text: 'Sakhal', link: '/servers/sakhal' },
        ]
      },
      {
        text: 'FAQ',
        items: [
          { text: 'General', link: '/faq#general' },
          { text: 'Server Rules', link: '/faq#server-rules' },
          { text: 'Common Mods', link: '/faq#common-mods' },
          { text: 'Lifetimes', link: '/faq#lifetimes' },
          { text: 'Support', link: '/faq#support' },
        ]
      }
    ],

    socialLinks: [
      { icon: 'discord', link: 'https://discord.gg/qU2V7Dbt97' }
    ]
  }
})
