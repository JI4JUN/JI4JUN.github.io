import { DefaultTheme } from 'vitepress';

export const openwizard = (subPath: string) => '/projects/openwizard' + subPath;
export const introduction = (subPath: string) =>
    openwizard('/introduction/' + subPath);
export const login = (subPath: string) => openwizard('/login/' + subPath);
export const qrcode = (subPath: string) => login('qrcode/' + subPath);

export const openwizardNav = {
    text: 'openwizard',
    link: introduction('Intro'),
};

export const openwizardSidebar: DefaultTheme.Config['sidebar'] = {
    [openwizard('/')]: [
        {
            text: 'Introduction',
            items: [
                {
                    text: 'Introduction',
                    link: introduction('Intro'),
                },
            ],
            collapsed: true,
        },
        {
            text: 'Recolor',
            items: [
                {
                    text: '在electron中实现微信二维码扫码登录',
                    link: qrcode('qrcode'),
                },
            ],
            collapsed: true,
        },
    ],
};
