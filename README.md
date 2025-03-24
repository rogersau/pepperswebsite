# Sgt. Peppers DayZ Invasion Website

A VitePress-powered website for Sgt. Peppers DayZ gaming servers. This website provides information about different DayZ servers, their configurations, and a FAQ section.

## Project Overview

This website serves as the central hub for Sgt. Peppers DayZ Invasion community, showcasing:
- Multiple DayZ server configurations (Chernarus, Livonia, Namalsk, Sakhal, Deadfall)
- Server info including IP addresses, mods, and restart times
- Frequently asked questions
- Custom components like time zone conversion

## Technology Stack

- [VitePress](https://vitepress.dev/) - Static Site Generator
- Vue.js - Frontend framework
- Custom components for displaying local time
- Markdown for content

## Project Structure

```
pepperswebsite/
├── .vitepress/           # VitePress configuration
│   └── theme/            # Custom theme configuration
│       ├── index.ts      # Theme setup
│       ├── style.css     # Global styles
│       └── font.css      # Custom font configuration
├── components/           # Vue components
│   └── LocalTime.vue     # Time conversion component
├── servers/              # Server information pages
│   ├── chernarus.md
│   ├── deadfall.md
│   ├── livonia.md
│   ├── namalsk.md
│   └── sakhal.md
├── index.md              # Home page
├── faq.md                # FAQ page
└── public/               # Static assets
    └── sgtpepper.png     # Logo image
```

## Setup and Development

### Prerequisites

- Node.js 16+
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/yourusername/pepperswebsite.git
cd pepperswebsite

# Install dependencies
npm install
# or
yarn install
```

### Development

```bash
# Start development server
npm run dev
# or
yarn dev
```

The development server will be available at http://localhost:5173 by default.

### Building for Production

```bash
# Build the site
npm run build
# or
yarn build
```

The built files will be in the `.vitepress/dist` directory.

## Custom Components

### LocalTime

The `LocalTime` component converts UTC times to the visitor's local timezone. This is used in server restart schedules.

Usage in Markdown:
```markdown
<LocalTime utcTime="2025-03-24T13:05:00Z" format="HH:mm" />
```

## Deployment

### Static Hosting

The built site can be deployed to any static hosting service like Netlify, Vercel, GitHub Pages, etc.

### Environment Variables

No environment variables are currently required.

## Content Updates

### Adding a New Server

1. Create a new Markdown file in the `servers/` directory
2. Use the existing server pages as a template
3. Include server information, restart times, and mod details

### Updating FAQ

Edit the `faq.md` file to add or modify questions and answers.

## Contributing

1. Fork the repository
2. Create a feature branch
3. Submit a pull request

## License

MIT

## Contact

For questions or support, join our [Discord](https://discord.gg/fYFZeEH9Gr).
