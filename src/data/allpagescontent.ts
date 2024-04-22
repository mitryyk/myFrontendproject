import constrpic from './pictures/01_constr.jpg';
import valvepic from './pictures/02_valve.jpg';
import statspic from './pictures/03_stats.jpg';
import libpic from './pictures/04_lib.jpg';

export const cardlinks = [
    {id: 0, img: constrpic, text: "Журнал стройлаб", link: "pages/journal_cl"},
    {id: 1, img: valvepic, text: "Журнал испытаний", link: "pages/journal_ht"},
    {id: 2, img: statspic, text: "Отчеты", link: "pages/reportpage"},
    {id: 3, img: libpic, text: "Справочник", link: "pages/wikipage"}
]

export type HeaderItem = {
    posNumber: number;
    isdropdown: boolean;
    title: string;
    link: string;
    subitem: subItem[];
}

type subItem = {
    posNumber: number;
    title: string;
    link: string;
}

export const headerContent = [
    {posNumber: 0, isdropdown: false, title: "Главная", link: "", subitem:[]},
    {posNumber: 1, isdropdown: true, title: "Журналы", link:"", subitem: [{posNumber: 0, title: "Журнал стройлаб", link: "journal_cl"}, {posNumber: 1, title: "Журнал испытаний", link: "journal_ht"}]},
    {posNumber: 2, isdropdown: false, title: "Отчеты", link: "reportpage", subitem:[]},
    {posNumber: 3, isdropdown: false, title: "Справочник", link: "wikipage", subitem:[]}
]


