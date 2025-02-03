import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'KASM - The Pseudo Assembly Compiler',
  tagline: 'Un langage simplifié pour apprendre la programmation bas niveau',
  favicon: 'img/favicon.ico',

  // URL de production
  url: 'https://kasm.vercel.app',
  baseUrl: '/',

  // Configuration pour GitHub Pages (si utilisé)
  organizationName: 'votre-org',
  projectName: 'pseudo-assembly-docs',

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Internationalisation (optionnel)
  i18n: {
    defaultLocale: 'fr',
    locales: ['fr', 'en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          editUrl:
              'https://github.com/PacomeKFP/kasm/tree/main/', // Lien pour éditer les pages
        },
        blog: {
          showReadingTime: true,
          editUrl:
              'https://github.com/PacomeKFP/kasm/tree/main/', // Lien pour éditer les articles
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Image pour les réseaux sociaux
    image: 'img/pseudo-assembly-social-card.jpg',

    // Barre de navigation
    navbar: {
      title: 'Kasm',
      logo: {
        alt: 'Logo Pseudo-Assembly',
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'docsSidebar',
          position: 'left',
          label: 'Documentation',
        },
        {
          to: '/blog',
          label: 'Blog',
          position: 'left',
        },
        {
          href: 'https://github.com/PacomeKFP/kasm',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },

    // Pied de page
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Documentation',
          items: [
            {
              label: 'Introduction',
              to: '/docs/intro',
            },
            {
              label: 'Instructions',
              to: '/docs/instructions',
            },
          ],
        },
        {
          title: 'Communauté',
          items: [
            {
              label: 'Stack Overflow',
              href: 'https://stackoverflow.com/questions/tagged/pseudo-assembly',
            },
            {
              label: 'Discord',
              href: 'https://discord.gg/votre-lien-discord',
            },
            {
              label: 'WhatsApp',
              href: 'https://wa.me/237692397042',
            },
            {
              label: 'X (Twitter)',
              href: 'https://x.com/votre-compte',
            },
          ],
        },
        {
          title: 'Plus',
          items: [
            {
              label: 'Blog',
              to: '/blog',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/PacomeKFP/kasm',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Pseudo-Assembly. Construit avec Docusaurus.`,
    },

    // Configuration de Prism pour la coloration syntaxique
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
      // additionalLanguages: ['bash', 'json', 'assembly'], // Ajoutez des langages supplémentaires si nécessaire
    },
  } satisfies Preset.ThemeConfig,
};

export default config;