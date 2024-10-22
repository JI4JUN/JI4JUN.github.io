import DefaultTheme from 'vitepress/theme';
import Layout from './layout/components/Layout.vue';
import ArticleMetadata from './global/components/ArticleMetadata.vue';

import theme from 'vitepress/theme';

import 'ant-design-vue/dist/reset.css';
import './layout/styles/vars.css';
import './layout/styles/custom.css';

import type { EnhanceAppContext } from 'vitepress';
import type { DefineComponent } from 'vue';

export default {
    ...DefaultTheme,
    Layout: Layout as DefineComponent,
    enhanceApp({ app }: EnhanceAppContext) {
        app.component('ArticleMetadata', ArticleMetadata);
    },
} satisfies typeof theme;
