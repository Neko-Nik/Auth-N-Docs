// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Auth N',
  tagline: 'Empower Your Security Journey with Auth-N: Where Authentication Meets Innovation!',
  favicon: 'img/favicon.svg',

  // Set the production url of your site here
  url: 'https://auth-n.nekonik.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'Neko-Nik', // Usually your GitHub org/user name.
  projectName: 'Auth-N', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/Neko-Nik/Auth-N-Docs/tree/main/',
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: 'Auth N',
        logo: {
          alt: 'Auth N Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'docsSidebar',
            position: 'left',
            label: 'Docs',
          },
          {
            type: 'docSidebar',
            sidebarId: 'apiSidebar',
            position: 'left',
            label: 'API',
          },
          {
            type: 'docSidebar',
            sidebarId: 'contributeSidebar',
            position: 'left',
            label: 'Contribute',
          },
          {
            href: 'https://github.com/Neko-Nik/Auth-N',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Getting Started',
                to: '/docs/Docs/intro',
              },
              {
                label: 'API Reference',
                to: '/docs/API/intro',
              },
              {
                label: 'Source Code Reference',
                to: '/docs/Contribute/intro',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'GitHub - Auth N',
                href: 'https://github.com/Neko-Nik/Auth-N',
              },
              {
                label: 'Shedule a meeting',
                href: 'https://calendly.com/neko-nik/general-meet',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Neko Nik',
                href: 'https://nekonik.com',
              },
              {
                label: 'GitHub - Neko Nik',
                href: 'https://github.com/Neko-Nik',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Neko Nik`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
      algolia: {
        appId: 'SNCTDKWE28',
        apiKey: '2830a7d69a768cde864f5e73df36c11c',
        indexName: 'auth-n-nekonik',

        // Optional: see doc section below
        contextualSearch: true,

        // Optional: Specify domains where the navigation should occur through window.location instead on history.push. Useful when our Algolia config crawls multiple documentation sites and we want to navigate with window.location.href to them.
        externalUrlRegex: 'nekonik\\.com|auth-n\\.nekonik\\.com|github\\.com|calendly\\.com|algolia\\.com',

        // Optional: Replace parts of the item URLs from Algolia. Useful when using the same search index for multiple deployments using a different baseUrl. You can use regexp or string in the `from` param. For example: localhost:3000 vs myCompany.com/docs
        // replaceSearchResultPathname: {
        //   from: '/docs/', // or as RegExp: /\/docs\//
        //   to: '/',
        // },

        // Optional: Algolia search parameters
        searchParameters: {},

        // Optional: path for search page that enabled by default (`false` to disable it)
        searchPagePath: 'search',
      },
    }),
};

export default config;
