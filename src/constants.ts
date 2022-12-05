import github from './Assets/icons/github.png'
import gitlab from './Assets/icons/gitlab.png'
import linkedin from './Assets/icons/linkedin.png'
import telegram from './Assets/icons/telegram.png'
import instagram from './Assets/icons/instagram.png'

export const PROJECTS: ProjectType[] = [
    {
        id: 2,
        title: 'Animation Chart SVG',
        description: 'df',
        technologies:
            'Animation,SVG,Perfect Pixel, Все элементы диаграммы реализованны на SVG и анимированы.  ',
        toCode: 'https://github.com/EvgenChip/AnimatedChartSVG',
        toViewing: 'https://evgenchip.github.io/animation-chart/',
        backgroundColor: '',
    },

    {
        id: 4,
        title: 'Card Product',
        description: '',
        technologies:
            'React, hooks, react-router, axios,AJAX, metics, NodeMail.',
        toCode: 'https://github.com/EvgenChip/cardProduct',
        toViewing: 'https://evgenchip.github.io/cardProduct/',
        backgroundColor: '',
    },
    {
        id: 5,
        title: 'Sale Oil',
        description: '',
        technologies: 'React, CSS, adaptive ',
        toCode: 'https://github.com/EvgenChip/saleOil',
        toViewing: 'https://evgenchip.github.io/saleOil/',
        backgroundColor: '',
    },

    {
        id: 6,
        title: 'Gantt Chart',
        description: '',
        technologies: `React, typescript, redux, react-router, redux-thunk,
        axios,  react-final-form,`,
        toCode: 'https://github.com/EvgenChip/GanttChart',
        toViewing: '',
        backgroundColor: '',
    },

    {
        id: 7,
        title: 'FinKit',
        description: '',
        technologies: 'HTML, CSS,adaptive',
        toCode: 'https://github.com/EvgenChip/FinKit',
        toViewing: 'https://evgenchip.github.io/finKit/',
        backgroundColor: '',
    },

    {
        id: 8,
        title: 'Social networking site',
        description: '',
        technologies:
            'React, redux, react-router, redux-thunk, axios, material-ui, redux-form',
        toCode: 'https://github.com/EvgenChip/social-network',
        toViewing: '',
        backgroundColor: '',
    },
    {
        id: 9,
        title: 'Form',
        description: '',
        technologies: 'HTML, CSS, Bulma ',
        toCode: 'https://github.com/EvgenChip/EvgenChip.github.io/tree/master/formTest',
        toViewing: 'https://evgenchip.github.io/formTest/',
        backgroundColor: '',
    },
]

export const TECHNOLOGIES: string[] = [
    'React: hooks, redux, mobX, material-ui, styled-components',
    'JavaScript',
    'TypeScript',
    'CSS, SCSS',
    'React Native',
    'Next.js',
    'GIT',
    'PWA',
    'Bootstrap',
    'Gulp, Webpack',
    'AWS',
    'Адаптивная верстка',
    'Методология БЭМ',
    'Умею верстать по макету (Pixel Perfect)',
    'Adobe Photoshop, Figma',
    'ОС Linux, Windows',
]

export const ACCOUNTS: LinkType[] = [
    {
        id: 1,
        title: 'Github',
        icon: github,
        to: 'https://github.com/EvgenChip',
    },

    {
        id: 3,
        title: 'Linkedin',
        icon: linkedin,
        to: 'https://www.linkedin.com/in/%D0%B5%D0%B2%D0%B3%D0%B5%D0%BD%D0%B8%D0%B9-%D0%BD%D0%B5%D1%87%D0%B8%D0%BF%D0%BE%D1%80%D0%B5%D0%BA%D0%BD%D0%BE-55632b255/',
    },
    {
        id: 4,
        title: 'Telegram',
        icon: telegram,
        to: 'https://t.me/CH_Evgeniy_CH',
    },
]

export const ABOUT_ME = `Ищу удаленную работу на позицию Frontend React Developer
(есть опыт коммерческой разработки). Стремлюсь попасть в команду профессионалов,
учиться у мастеров и стать сильным React разработчиком!`

export const COLORS = {
    GREY: '#E5E5E5',
}
