import constrpic from './pictures/01_constr.jpg';
import valvepic from './pictures/02_valve.jpg';
import statspic from './pictures/03_stats.jpg';
import libpic from './pictures/04_lib.jpg';

export const cardlinks = [
    {id: 0, img: constrpic, text: "Журнал стройлаб"},
    {id: 1, img: valvepic, text: "Журнал испытаний"},
    {id: 2, img: statspic, text: "Отчеты"},
    {id: 3, img: libpic, text: "Справочник"}
]

export const headercontent: Headercontent = {
    navbarItems: [
        {posNumber: 0, isdropdownel: false, navbarItem: "Главная"},
        {posNumber: 2, isdropdownel: false, navbarItem: "Отчеты"},
        {posNumber: 3, isdropdownel: false, navbarItem: "Справочник"}
    ],
    navbarDropdowns: [
        {posNumber: 1, isdropdownel: true, dropdownName: "Журналы", dropdownItems: [{pos: 0, text: "Журнал стройлаб"}, {pos: 1, text: "Журнал испытаний"}]}
    ]
}

export type NavbarItems = {posNumber: number, isdropdownel: boolean, navbarItem: string}

export type NavbarDropdowns = {posNumber: number, isdropdownel: boolean, dropdownName: string, dropdownItems: {pos: number, text: string}[]}

export type Headercontent = {
    [key: string]: NavbarItems[] | NavbarDropdowns[]
}


