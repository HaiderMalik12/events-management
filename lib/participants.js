Participants = [{
    name: 'Haider Malik',
    category: 'Co-Founder/Operation',
    desc: 'Professional Expert',
    imgUrl: "http://placemi.com/petnp/600x700",
    videoUrl: '',
    id: 1
}, {
    name: 'Sharkukh Khan',
    category: 'Actor',
    desc: 'Professionl Actor',
    imgUrl: "http://placemi.com/xruzn/600x700",
    videoUrl: '',
    id: 2
},
    {
        name: 'Sharkukh Khan',
        category: 'Dancer',
        desc: 'Professionl Dancer',
        imgUrl: "http://placemi.com/wctme/600x700",
        videoUrl: '',
        id: 3
    }
    , {
        name: 'kevin Dancer',
        category: 'Singing',
        desc: 'Singing Expert',
        imgUrl: "http://placemi.com/qwspg/600x700",
        videoUrl: '',
        id: 4

    }, {
        name: 'Shalaila',
        category: 'Programmer',
        desc: 'Professionl Programmer',
        imgUrl: "http://placemi.com/qplvn/600x700",
        videoUrl: '',
        id: 5
    },
    {
        name: 'Preety zinta',
        category: 'Actor',
        desc: 'Professionl Actor',
        imgUrl: "http://placemi.com/rxco7/600x700",
        videoUrl: '',
        id: 6
    },
    {
        name: 'Kapil Sharma',
        category: 'Actor',
        desc: 'Professionl Comedy Actor',
        imgUrl: "http://placemi.com/kzsjt/600x700",
        videoUrl: '',
        id: 7
    },
    {
        name: 'Umeri Khan',
        category: 'Actor',
        desc: 'Professionl Actor',
        imgUrl: "http://placemi.com/m2qx7/600x700",
        videoUrl: '',
        id: 8
    }


];

Participants.findAll = function () {
    return Participants;
}

Participants.findOne= function (args) {
    return Participants[args.id-1];
}