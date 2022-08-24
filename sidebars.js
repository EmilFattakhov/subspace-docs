/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  masterSidebar: [
    {
      type: 'category',
      label: 'Learn',
      items: [
        {
          type: 'link',
          label: 'Basics',
          href: 'https://subspace.network/technology',
        },
        {
          type: 'link',
          label: 'Whitepaper',
          href: 'https://subspace.network/news/subspace-network-whitepaper',
        },
        {
          type: 'link',
          label: 'Additional Content',
          href: 'https://subspace.network/learn',
        },
      ],
    },
    {
      type: 'category',
      label: 'Getting Started Farming',
      items: [
        {
          type: 'link',
          label: 'Farm with CLI/Docker',
          href: '../../protocol/farm/farming',
        },
        {
          type: 'link',
          label: 'Farm with Subspace Desktop',
          href: '../../subspace-desktop/subspace-desktop',
        },
        {
          type: 'link',
          label: 'How to Forward Ports',
          href: '../../protocol/port-forwarding',
        },
        {
          type: 'link',
          label: 'Having Trouble?',
          href: 'https://forum.subspace.network/',
        },
      ],
    },
    {
      type: 'category',
      label: 'Network Resources',
      items: [
        {
          type: 'link',
          label: 'Subspace Block Explorer',
          href: 'https://polkadot.js.org/apps/?rpc=wss%3A%2F%2Fna.gemini-1b.subspace.network%2Fws#/explorer',
        },
        {
          type: 'link',
          label: 'Subspace Telemetry',
          href: 'https://telemetry.subspace.network/',
        },
      ],
    },
    {
      type: 'category',
      label: 'Subspace SDK',
      items: [
        {
          type: 'link',
          label: 'Subspace.js',
          href: '../../subspace-js/subspace-js',
        },
      ],
    },
    { 
    type: 'category',
    label: 'Community',
    items: [
      { //Implementation of Contribution Guide 
       type: 'link',
       label: 'Contribution Guide',
       href: '../../community/contribute',
      },
      {
       type: 'link',
       label: 'Community Resources',
       href: '../../community/',
      },
     ],
    }, 
  ],
};


module.exports = sidebars;
