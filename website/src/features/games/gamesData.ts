import { Game } from "./gamesSlice"


export const games: Game[] = [
    {
        id: 'cyberpunk-2077',
        title: 'Cyberpunk 2077',
        releaseDate: '9 дек. 2020 г.',
        ageLimit: '17+',
        description: 'Cyberpunk 2077 — приключенческая ролевая игра, действие которой происходит в мегаполисе Найт-Сити, где власть, роскошь и модификации тела ценятся выше всего. Вы играете за V, наёмника в поисках устройства, позволяющего обрести бессмертие. Вы сможете менять киберимпланты, навыки и стиль игры своего персонажа, исследуя открытый мир, где ваши поступки влияют на ход сюжета и всё, что вас окружает.',
        genres: ['Экшены', 'Приключения', 'Ролевые'],
        developers: ['CD PROJEKT RED', 'CD PROJEKT'],
        publishers: ['CD PROJEKT RED'],
        metacriticScore: 73,
        media: {
            poster: '/images/games/cyberpunk-2077/poster.jpg',
            cover: '/images/games/cyberpunk-2077/cover.jpg',
            screenshots: [
                '/images/games/cyberpunk-2077/screenshot1.jpg',
                '/images/games/cyberpunk-2077/screenshot2.jpg',
                '/images/games/cyberpunk-2077/screenshot3.jpg',
                '/images/games/cyberpunk-2077/screenshot4.jpg',
                '/images/games/cyberpunk-2077/screenshot5.jpg',
                '/images/games/cyberpunk-2077/screenshot6.jpg',
            ],
        },
    },
];