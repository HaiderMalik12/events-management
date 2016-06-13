Events = [{
    name: 'Node js Conferences',
    category: 'Programming',
    startDate: new Date(),
    endDate: new Date(),
    desc: " simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the " +
    "industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled" +
    " it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting," +
    " remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem " +
    "Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem ",
    img: '/img/portfolio/port01.jpg',
    id: 1
},
    {
        name: 'Dancing Competition',
        category: 'Dancing',
        startDate: new Date(),
        endDate: new Date(),
        desc: " simply dummy text of the printing and typesetting industry. " +
        "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an " +
        "unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem "
        , img: "/img/portfolio/port02.jpg",
        id: 2
    },
    {
        name: 'Singing Competiton ',
        category: 'Singing',
        startDate: new Date(),
        endDate: new Date(),
        desc: " simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem "
        , img: "/img/portfolio/port03.jpg",
        id: 3
    },
    {
        name: 'Sports Competition',
        category: 'Sports',
        startDate: new Date(),
        endDate: new Date(),
        desc: " simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem "
        , img: "/img/portfolio/port04.jpg",
        id: 4
    },
    {
        name: 'Music Night',
        category: 'Music',
        startDate: new Date(),
        endDate: new Date(),
        desc: " simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem "
        , img: "/img/portfolio/port05.jpg",
        id: 5
    }, {
        name: 'Dancing stars',
        category: 'Dancing',
        startDate: new Date(),
        endDate: new Date(),
        desc: " simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem "
        , img: "/img/portfolio/port06.jpg",
        id: 6
    }
];
Events.findAll = function () {
    return Events;
}
Events.findOne = function (args) {
    return Events[args.id-1];
}
