import { DefaultTheme } from 'vitepress';

export const gepick = (subPath: string) => '/projects/gepick' + subPath;

export const manage = (subPath: string) => gepick('/manage/' + subPath);
export const editor = (subPath: string) => gepick('/editor/' + subPath);
export const server = (subPath: string) => gepick('/server/' + subPath);
export const explore = (subPath: string) => gepick('/explore/' + subPath);

export const gepickNav = { text: 'gepick', link: manage('聊聊插件化系统设计') };

export const gepickSidebar: DefaultTheme.Config['sidebar'] = {
    [gepick('/')]: [
        {
            text: '项目组织',
            items: [
                {
                    text: '聊聊插件化系统设计',
                    link: manage('聊聊插件化系统设计'),
                },
            ],
            collapsed: true,
        },
        {
            text: '编辑器',
            items: [
                {
                    text: '选择服务实现',
                    link: editor('ed1'),
                },
            ],
            collapsed: true,
        },
        {
            text: '服务端',
            items: [
                {
                    text: 'nestjs',
                    link: server('ed1'),
                },
            ],
            collapsed: true,
        },
        {
            text: '工程探索',
            items: [
                {
                    text: 'Gepick：探索VSCode工程',
                    link: explore('ed1'),
                },
            ],
            collapsed: true,
        },
    ],
};
