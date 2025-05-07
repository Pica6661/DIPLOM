export const products = [
    // Смесители (10 шт)
    { id: 1, name: 'Смеситель Grohe хром', price: 4500, discount: 10, category: 'faucets', brand: 'grohe', image: 'images/faucet1.jpg', description: 'Немецкое качество с керамическим картриджем' },
    { id: 2, name: 'Смеситель Hansgrohe матовый', price: 6200, category: 'faucets', brand: 'hansgrohe', image: 'images/faucet2.jpg', description: 'Сенсорное управление' },
    { id: 3, name: 'Смеситель IDRO черный', price: 5800, category: 'faucets', brand: 'idro', image: 'images/faucet3.jpg', description: 'Матовое покрытие' },
    { id: 4, name: 'Смеситель Vidima хром', price: 3200, category: 'faucets', brand: 'vidima', image: 'images/faucet4.jpg', description: 'Экономичный вариант' },
    { id: 5, name: 'Смеситель Lemark медиум', price: 4100, category: 'faucets', brand: 'lemark', image: 'images/faucet5.jpg', description: 'Средний ценовой сегмент' },
    { id: 6, name: 'Смеситель Jacob Delafon', price: 7300, category: 'faucets', brand: 'jacob', image: 'images/faucet6.jpg', description: 'Премиум класс' },
    { id: 7, name: 'Смеситель Oras стандарт', price: 2900, category: 'faucets', brand: 'oras', image: 'images/faucet7.jpg', description: 'Базовая модель' },
    { id: 8, name: 'Смеситель Timo ретро', price: 5500, category: 'faucets', brand: 'timo', image: 'images/faucet8.jpg', description: 'Винтажный стиль' },
    { id: 9, name: 'Смеситель WasserKRAFT цифровой', price: 9800, category: 'faucets', brand: 'wasserkraft', image: 'images/faucet9.jpg', description: 'Цифровой дисплей' },
    { id: 10, name: 'Смеситель Cezares термостат', price: 8200, category: 'faucets', brand: 'cezares', image: 'images/faucet10.jpg', description: 'С термостатическим клапаном' },

    // Душевые системы (10 шт)
    { id: 11, name: 'Душевая система Hansgrohe Rain', price: 12000, discount: 15, category: 'showers', brand: 'hansgrohe', image: 'images/shower1.jpg', description: 'Тропический душ с термостатом' },
    { id: 12, name: 'Душевая кабина IDRO Glass', price: 25000, category: 'showers', brand: 'idro', image: 'images/shower2.jpg', description: 'Закаленное стекло 8 мм' },
    { id: 13, name: 'Душевая панель Grohe', price: 18500, category: 'showers', brand: 'grohe', image: 'images/shower3.jpg', description: 'Многофункциональная панель' },
    { id: 14, name: 'Душевой гарнитур Vidima', price: 7500, category: 'showers', brand: 'vidima', image: 'images/shower4.jpg', description: 'Набор с лейкой' },
    { id: 15, name: 'Душевая стойка Lemark', price: 9200, category: 'showers', brand: 'lemark', image: 'images/shower5.jpg', description: 'Регулируемая высота' },
    { id: 16, name: 'Душевой поддон Jacob', price: 11500, category: 'showers', brand: 'jacob', image: 'images/shower6.jpg', description: 'Анти скользящее покрытие' },
    { id: 17, name: 'Душевая шторка Oras', price: 4500, category: 'showers', brand: 'oras', image: 'images/shower7.jpg', description: 'Пластиковые ролики' },
    { id: 18, name: 'Термостатический смеситель Timo', price: 6800, category: 'showers', brand: 'timo', image: 'images/shower8.jpg', description: 'Автоматическая регулировка' },
    { id: 19, name: 'Душевая система Cezares', price: 21000, category: 'showers', brand: 'cezares', image: 'images/shower9.jpg', description: 'С подсветкой' },
    { id: 20, name: 'Гидромассажная панель WasserKRAFT', price: 32000, category: 'showers', brand: 'wasserkraft', image: 'images/shower10.jpg', description: '6 режимов массажа' },

    // Раковины (10 шт)
    { id: 21, name: 'Раковина IDRO Ceramica', price: 8000, category: 'sinks', brand: 'idro', image: 'images/sink1.jpg', description: 'Итальянский дизайн с антибактериальным покрытием' },
    { id: 22, name: 'Раковина-столешница Grohe', price: 10500, discount: 5, category: 'sinks', brand: 'grohe', image: 'images/sink2.jpg', description: 'С интегрированной полкой' },
    { id: 23, name: 'Накладная раковина Hansgrohe', price: 9200, category: 'sinks', brand: 'hansgrohe', image: 'images/sink3.jpg', description: 'Монтаж на столешницу' },
    { id: 24, name: 'Подвесная раковина Vidima', price: 6500, category: 'sinks', brand: 'vidima', image: 'images/sink4.jpg', description: 'Минималистичный дизайн' },
    { id: 25, name: 'Раковина с пьедесталом Lemark', price: 7800, category: 'sinks', brand: 'lemark', image: 'images/sink5.jpg', description: 'Комплект с тумбой' },
    { id: 26, name: 'Угловая раковина Jacob', price: 8800, category: 'sinks', brand: 'jacob', image: 'images/sink6.jpg', description: 'Для маленьких помещений' },
    { id: 27, name: 'Раковина из искусственного камня Oras', price: 12500, category: 'sinks', brand: 'oras', image: 'images/sink7.jpg', description: 'Имитация натурального камня' },
    { id: 28, name: 'Двойная раковина Timo', price: 14500, category: 'sinks', brand: 'timo', image: 'images/sink8.jpg', description: 'Для двух пользователей' },
    { id: 29, name: 'Раковина с гигиеническим душем Cezares', price: 16500, category: 'sinks', brand: 'cezares', image: 'images/sink9.jpg', description: 'Встроенная система подачи воды' },
    { id: 30, name: 'Сенсорная раковина WasserKRAFT', price: 22000, category: 'sinks', brand: 'wasserkraft', image: 'images/sink10.jpg', description: 'Автоматическое включение' },

    // Санфаянс (10 шт)
    { id: 31, name: 'Унитаз подвесной Cersanit', price: 7500, category: 'ceramics', brand: 'cersanit', image: 'images/toilet1.jpg', description: 'Система антибактериальной защиты' },
    { id: 32, name: 'Биде напольное IDRO', price: 6200, category: 'ceramics', brand: 'idro', image: 'images/toilet2.jpg', description: 'С подогревом сиденья' },
    { id: 33, name: 'Писсуар Grohe', price: 4500, category: 'ceramics', brand: 'grohe', image: 'images/toilet3.jpg', description: 'С автоматическим смывом' },
    { id: 34, name: 'Компакт-унитаз Hansgrohe', price: 8800, category: 'ceramics', brand: 'hansgrohe', image: 'images/toilet4.jpg', description: 'С инсталляцией' },
    { id: 35, name: 'Унитаз с крышкой-биде Vidima', price: 12500, category: 'ceramics', brand: 'vidima', image: 'images/toilet5.jpg', description: 'Многофункциональная модель' },
    { id: 36, name: 'Напольный унитаз Lemark', price: 9500, category: 'ceramics', brand: 'lemark', image: 'images/toilet6.jpg', description: 'Классический дизайн' },
    { id: 37, name: 'Унитаз-компакт Jacob', price: 7200, category: 'ceramics', brand: 'jacob', image: 'images/toilet7.jpg', description: 'Экономичный вариант' },
    { id: 38, name: 'Унитаз с микролифтом Oras', price: 10500, category: 'ceramics', brand: 'oras', image: 'images/toilet8.jpg', description: 'Плавное закрывание' },
    { id: 39, name: 'Подвесной унитаз Timo', price: 11500, category: 'ceramics', brand: 'timo', image: 'images/toilet9.jpg', description: 'Скрытый крепеж' },
    { id: 40, name: 'Унитаз приставной Cezares', price: 13500, category: 'ceramics', brand: 'cezares', image: 'images/toilet10.jpg', description: 'Для современных интерьеров' },

    // Ванны (10 шт)
    { id: 41, name: 'Акриловая ванна Ravak 170x70', price: 18000, category: 'bathtubs', brand: 'ravak', image: 'images/bathtub1.jpg', description: 'С системой гидромассажа' },
    { id: 42, name: 'Чугунная ванна Jacob 180x80', price: 22000, category: 'bathtubs', brand: 'jacob', image: 'images/bathtub2.jpg', description: 'Эмалированное покрытие' },
    { id: 43, name: 'Стальная ванна Hansgrohe', price: 15000, category: 'bathtubs', brand: 'hansgrohe', image: 'images/bathtub3.jpg', description: 'Эконом вариант' },
    { id: 44, name: 'Гидромассажная ванна IDRO', price: 35000, category: 'bathtubs', brand: 'idro', image: 'images/bathtub4.jpg', description: 'С подводной подсветкой' },
    { id: 45, name: 'Асимметричная ванна Cezares', price: 28000, category: 'bathtubs', brand: 'cezares', image: 'images/bathtub5.jpg', description: 'Современный дизайн' },
    { id: 46, name: 'Ванна-джакузи WasserKRAFT', price: 45000, category: 'bathtubs', brand: 'wasserkraft', image: 'images/bathtub6.jpg', description: 'С функцией парогенератора' },
    { id: 47, name: 'Квариловая ванна Lemark', price: 32000, category: 'bathtubs', brand: 'lemark', image: 'images/bathtub7.jpg', description: 'Ударопрочный материал' },
    { id: 48, name: 'Отдельностоящая ванна Oras', price: 55000, category: 'bathtubs', brand: 'oras', image: 'images/bathtub8.jpg', description: 'Латунные ножки' },
    { id: 49, name: 'Ванна с ручками Timo', price: 25000, category: 'bathtubs', brand: 'timo', image: 'images/bathtub9.jpg', description: 'Для безопасности' },
    { id: 50, name: 'Детская ванна Vidima', price: 9500, category: 'bathtubs', brand: 'vidima', image: 'images/bathtub10.jpg', description: 'С сиденьем и подставкой' },

    // Аксессуары (10 шт)
    { id: 51, name: 'Держатель для полотенец Grohe', price: 1200, category: 'accessories', brand: 'grohe', image: 'images/accessory1.jpg', description: 'Хромированная сталь' },
    { id: 52, name: 'Мыльница Hansgrohe', price: 850, category: 'accessories', brand: 'hansgrohe', image: 'images/accessory2.jpg', description: 'Пластиковый поддон' },
    { id: 53, name: 'Крючок для халата IDRO', price: 450, category: 'accessories', brand: 'idro', image: 'images/accessory3.jpg', description: 'Настенный монтаж' },
    { id: 54, name: 'Стакан для зубных щеток Jacob', price: 320, category: 'accessories', brand: 'jacob', image: 'images/accessory4.jpg', description: 'Керамический' },
    { id: 55, name: 'Дозатор жидкого мыла Cezares', price: 950, category: 'accessories', brand: 'cezares', image: 'images/accessory5.jpg', description: 'Автоматический' },
    { id: 56, name: 'Зеркало с подсветкой WasserKRAFT', price: 4500, category: 'accessories', brand: 'wasserkraft', image: 'images/accessory6.jpg', description: 'Сенсорное управление' },
    { id: 57, name: 'Шторка для ванны Lemark', price: 1200, category: 'accessories', brand: 'lemark', image: 'images/accessory7.jpg', description: 'Водонепроницаемая' },
    { id: 58, name: 'Коврик для ванной Vidima', price: 750, category: 'accessories', brand: 'vidima', image: 'images/accessory8.jpg', description: 'Противоскользящий' },
    { id: 59, name: 'Сушилка для рук Oras', price: 2500, category: 'accessories', brand: 'oras', image: 'images/accessory9.jpg', description: 'Настенная' },
    { id: 60, name: 'Органайзер для ванной Timo', price: 1800, category: 'accessories', brand: 'timo', image: 'images/accessory10.jpg', description: 'Пластиковый' }
];