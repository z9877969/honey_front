import { pollen } from "../images";
import { cashewHoney } from "../images";
import { honeyWithAlmonds } from "../images";
import { honeyWithHazelnuts } from "../images";
import { honeyWithNutsMix } from "../images";
import { honeyWithWalnuts } from "../images";
import { honeycombs } from "../images";
import { naturalAcaciaHoney } from "../images";
import { naturalFloralHoney } from "../images";
import { naturalRapeseedHoney } from "../images";
import { naturalSunflowerHoney } from "../images";

const dbProducts = [
    {
        img: naturalAcaciaHoney,
        name: 'Мед акацієвий натуральний',
        weight: '0.25-3.0 л',
        price: '100 грн - 1000 грн',
        category: 'honey'
    },
    {
        img: naturalFloralHoney,
        name: 'Мед квітковий натуральний',
        weight: '0.25-3.0 л',
        price: '75 грн - 800 грн',
        category: 'honey'
    },
    {
        img: naturalRapeseedHoney,
        name: 'Мед ріпаковий натуральний',
        weight: '0.25-3.0 л',
        price: '50 грн - 550 грн',
        category: 'honey'
    },
    {
        img: naturalSunflowerHoney,
        name: 'Мед соняшниковий натуральний',
        weight: '0.25-3.0 л',
        price: '50 грн - 550 грн',
        category: 'honey'
    },

    {
        img: honeyWithWalnuts,
        name: 'Мед з волоськимим горіхами',
        weight: '250 мл',
        price: '200 грн',
        category: 'honey with nuts'
    },
    {
        img: honeyWithAlmonds,
        name: 'Мед з мигдалем',
        weight: '250 мл',
        price: '200 грн',
        category: 'honey with nuts'
    },
    {
        img: cashewHoney,
        name: "Мед з кеш'ю",
        weight: '250 мл',
        price: '200 грн',
        category: 'honey with nuts'
    },
    {
        img: honeyWithHazelnuts,
        name: 'Мед з ліщиною',
        weight: '250 мл',
        price: '200 грн',
        category: 'honey with nuts'
    },
    {
        img: honeyWithNutsMix,
        name: 'Мед з горіхами мікс',
        weight: '250 мл',
        price: '200 грн',
        category: 'honey with nuts'
    },

    {
        img: honeycombs,
        name: 'Стільники з акацієвим медом',
        weight: '100 мл',
        price: '75 грн',
        category: 'honeycombs'
    },
    {
        img: pollen,
        name: 'Пилок',
        weight: '100 мл',
        price: '50 грн',
        category: 'pollen'
    }
];

export default dbProducts;