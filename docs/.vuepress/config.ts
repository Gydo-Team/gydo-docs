import { defineUserConfig } from 'vuepress';
import type { DefaultThemeOptions } from 'vuepress';
import sidebar from './sidebar';
import navbar from './navbar';

export default defineUserConfig<DefaultThemeOptions>({
  base: '/gydo-docs/',
  lang: 'en-US',
  title: 'Gydo Docs',
  description: 'The Documentation for Gydo JS',
  themeConfig: {
    navbar,
    sidebar,
  }
});