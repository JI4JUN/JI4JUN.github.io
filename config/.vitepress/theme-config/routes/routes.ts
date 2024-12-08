import type { DefaultTheme } from 'vitepress';
import {
    leetcodeNav,
    leetcodeSidebar,
} from './leetcode-every-day/leetcode-every-day';
import { thinkToNav, thinkToSidebar } from './thinkTo/thinkTo';

export const nav: DefaultTheme.Config['nav'] = [
    {
        text: '项目',
        items: [leetcodeNav, thinkToNav],
    },
    {
        text: '标签',
        link: '/tags',
        activeMatch: '/tags',
    },
    {
        text: '归档',
        link: '/archives',
        activeMatch: '/archives',
    },
];

export const sidebar: DefaultTheme.Config['sidebar'] = {
    ...leetcodeSidebar,
    ...thinkToSidebar,
};
