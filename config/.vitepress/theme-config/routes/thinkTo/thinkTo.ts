import { DefaultTheme } from 'vitepress';

export const thinkTo = (subPath: string) => '/projects/thinkTo' + subPath;
export const introduction = (subPath: string) =>
    thinkTo('/introduction/' + subPath);
export const recolor = (subPath: string) => thinkTo('/recolor/' + subPath);
export const eyeDropper = (subPath: string) => recolor('EyeDropper/' + subPath);

export const thinkToNav = {
    text: 'thinkTo',
    link: introduction('Intro'),
};

export const thinkToSidebar: DefaultTheme.Config['sidebar'] = {
    [thinkTo('/')]: [
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
                    text: 'Eye Dropper',
                    link: eyeDropper('EyeDropper'),
                },
            ],
            collapsed: true,
        },
    ],
};
