// @ts-nocheck
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Subspace Labs Documentation',
  tagline: 'Subspace is an open, scalable platform for both storage and compute that is fully interoperable with any layer one.',
  url: 'http://ryyeung.github.io/subspace-contribution-Ryan/.', 
  baseUrl: '/',
  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'subspace', // Usually your GitHub org/user name.
  projectName: 'subspace-docs', // Usually your repo name.

 /* i18n: {
    defaultLocale: 'en',
    locales: ['en', 'ru', 'uk', 'ko', 'es', 'vi'],
    localeConfigs: {
      en: {
        htmlLang: 'en-GB',
      },
      // You can omit a locale (e.g. fr) if you don't need to override the defaults
      fa: {
        direction: 'rtl',
      },
    },
  },
  */
  plugins: [
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'community',
        path: 'community',
        routeBasePath: 'community',
        sidebarPath: require.resolve('./sidebars.js'),
      }
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'subspace-desktop',
        path: 'subspace-desktop',
        routeBasePath: 'subspace-desktop',
        sidebarPath: require.resolve('./sidebars.js'),
      }
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'subspacejs',
        path: 'subspacejs',
        routeBasePath: 'subspacejs',
        sidebarPath: require.resolve('./sidebars.js'),
      }
    ],
    [
      '@docusaurus/plugin-google-gtag',
      {
        trackingID: 'G-25NWNJB9MR',
        anonymizeIP: false, 
      }
    ]
  ],


  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          id: 'protocol',
          path: 'protocol',
          routeBasePath: 'protocol',
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl: 'https://github.com/subspace/subspace-docs/blob/main/',
        }, 
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
        sitemap: {
          changefreq: 'weekly',
          priority: 0.5,
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: '',
        logo: {
          alt: 'Subspace Labs Logo',
          src: 'img/logo-black.svg',
          srcDark: 'img/logo-white.svg',
        },
        items: [
          {
            type: 'dropdown',
            label: 'Subspace Farmer',
            position: 'left',
            items: [
              {
                type: 'doc',
                docId: 'farm/farming',
                label: 'CLI Farmer',
                docsPluginId: 'protocol',
              },
              {
                type: 'doc',
                docId: 'subspace-desktop',
                label: 'GUI Farmer',
                docsPluginId: 'subspace-desktop',
              }
            ],
          },
          {
            type: 'dropdown',
            label: 'Subspace SDK',
            position: 'left',
            items: [
              {
                to: 'subspacejs/',
                label: 'Subspace.js',
              },
            ],
          },
          {
            type: 'dropdown',
            label: 'Network Resources',
            position: 'left',
            items: [
              {
                label: 'Subspace Telemetry',
                href: 'https://telemetry.subspace.network',
              },
              {
                label: 'Subspace Explorer',
                href: 'https://polkadot.js.org/apps/?rpc=wss%3A%2F%2Fna.gemini-1b.subspace.network%2Fws#/explorer',
              },
            ],
          },
          {
            to: 'community/',
            position: 'left',
            label: 'Community',
          },
          {
            type: 'docsVersionDropdown',
            label: 'Core Versions',
            position: 'right',
            dropdownActiveClassDisabled: true,
            docsPluginId: 'protocol',
          },
          {
            type: 'docsVersionDropdown',
            label: 'Subspace-Desktop Versions',
            position: 'right',
            dropdownActiveClassDisabled: true,
            docsPluginId: 'subspace-desktop',
          },
          {
            type: 'docsVersionDropdown',
            label: 'subspacejs Versions',
            position: 'right',
            dropdownActiveClassDisabled: true,
            docsPluginId: 'subspacejs',
          },
          {
            type: 'localeDropdown',
            position: 'right',
          },
        ],
      },
      footer: {
        links: [
          {
            title: 'Subspace Network',
            items: [
              {
                label: 'Official Website',
                href: 'https://subspace.network'
              },
              {
                label: 'Subspace Desktop',
                href: 'https://github.com/subspace/subspace-desktop'
              },
              {
                label: 'Subspace Explorer',
                href: 'https://polkadot.js.org/apps/?rpc=wss%3A%2F%2Ftest-rpc.subspace.network#/explorer'
              },
              {
                label: 'Subspace Relayer',
                href: 'https://testnet-relayer.subspace.network/'
              }
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'GitHub',
                href: 'https://github.com/subspace',
              },
              {
                label: 'Discord',
                href: 'https://discord.gg/subspace-network',
              },
              {
                label: 'Telegram',
                href: 'https://t.me/subspace_network',
              },
              {
                label: 'Reddit',
                href: 'https://reddit.com/r/sub',
              },
            ],
          },
          {
            title: 'Social',
            items: [
              {
                label: 'YouTube',
                href: 'https://www.youtube.com/channel/UCojYRCZOtVTJHJXivOYJzeQ',
              },
              {
                label: 'LinkedIn',
                href: 'https://www.linkedin.com/company/subspace-blockchain',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/network_subspace',
              },
              {
                label: 'Medium',
                href: 'https://medium.com/subspace-network',
              },
              {
                label: 'Subsocial',
                href: 'https://app.subsocial.network/@NetworkSubspace'
              }
            ],
          },
        ],
        logo: {
          alt: 'Subspace Labs Banner Logo',
          src: 'img/banner-black.svg',
          srcDark: 'img/banner-white.svg',
          href: 'https://subspace.network',
        },
        copyright: `Copyright © ${new Date().getFullYear()} Subspace Labs, Inc.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
