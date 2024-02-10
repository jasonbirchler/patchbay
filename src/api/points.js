const _points = [
    { //1
        mode: 'normal',
        from: {
            device: 'Norns',
            channel: 'L'
        },
        to: {
            device: 'MOTU',
            channel: 'A1'
        }
    },
    { //2
        mode: 'normal',
        from: {
            device: 'Norns',
            channel: 'R'
        },
        to: {
            device: 'MOTU',
            channel: 'A2'
        }
    },
    { //3
        mode: 'normal',
        from: {
            device: 'Turntable',
            channel: 'L'
        },
        to: {
            device: 'MOTU',
            channel: 'A3'
        }
    },
    { //4
        mode: 'normal',
        from: {
            device: 'Turntable',
            channel: 'R'
        },
        to: {
            device: 'MOTU',
            channel: 'A4'
        }
    },
    { //5
        mode: 'normal',
        from: {
            device: 'MoFX',
            channel: 'L'
        },
        to: {
            device: 'MOTU',
            channel: 'A5'
        }
    },
    { //6
        mode: 'normal',
        from: {
            device: 'MoFX',
            channel: 'R'
        },
        to: {
            device: 'MOTU',
            channel: 'A6'
        }
    },
    { //7
        mode: 'half',
        from: {
            device: 'MOTU',
            channel: 'A3'
        },
        to: {
            device: 'MoFX',
            channel: 'L'
        }
    },
    { //8
        mode: 'half',
        from: {
            device: 'MOTU',
            channel: 'A4'
        },
        to: {
            device: 'MoFX',
            channel: 'R'
        }
    },
    { //9
        mode: 'half',
        from: {
            device: 'MOTU',
            channel: 'A5'
        },
        to: {
            device: 'Patchulator',
            channel: '1'
        }
    },
    { //10
        mode: 'half',
        from: {
            device: 'MOTU',
            channel: 'A6'
        },
        to: {
            device: 'Patchulator',
            channel: '2'
        }
    },
    { //11
        mode: 'normal',
        from: {
            device: 'MOTU',
            channel: 'A7'
        },
        to: {
            device: 'Norns',
            channel: 'In L'
        }
    },
    { //12
        mode: 'normal',
        from: {
            device: 'MOTU',
            channel: 'A8'
        },
        to: {
            device: 'Norns',
            channel: 'In L'
        }
    },
    { //13
        mode: 'thru',
        from: {
            device: '_',
            channel: '_'
        },
        to: {
            device: '[ADAT]',
            channel: '1'
        }
    },
    { //14
        mode: 'thru',
        from: {
            device: '_',
            channel: '_'
        },
        to: {
            device: '[ADAT]',
            channel: '2'
        }
    },
    { //15
        mode: 'thru',
        from: {
            device: '_',
            channel: '_'
        },
        to: {
            device: '[ADAT]',
            channel: '3'
        }
    },
    { //16
        mode: 'thru',
        from: {
            device: '_',
            channel: '_'
        },
        to: {
            device: '[ADAT]',
            channel: '4'
        }
    },
    { //17
        mode: 'thru',
        from: {
            device: '_',
            channel: '_'
        },
        to: {
            device: '[ADAT]',
            channel: '5'
        }
    },
    { //18
        mode: 'thru',
        from: {
            device: '_',
            channel: '_'
        },
        to: {
            device: '[ADAT]',
            channel: '6'
        }
    },
    { //19
        mode: 'normal',
        from: {
            device: 'MSG',
            channel: 'Out'
        },
        to: {
            device: '[ADAT]',
            channel: '7'
        }
    },
    { //20
        mode: 'normal',
        from: {
            device: 'Elmyra',
            channel: 'Out'
        },
        to: {
            device: '[ADAT]',
            channel: '8'
        }
    },
    { //21
        mode: 'thru',
        from: {
            device: '[ADAT]',
            channel: '1'
        },
        to: {
            device: 'Patchulator',
            channel: '_'
        }
    },
    { //22
        mode: 'thru',
        from: {
            device: '[ADAT]',
            channel: '2'
        },
        to: {
            device: 'Patchulator',
            channel: '_'
        }
    },
    { //23
        mode: 'thru',
        from: {
            device: '[ADAT]',
            channel: '3'
        },
        to: {
            device: 'Patchulator',
            channel: '_'
        }
    },
    { //24
        mode: 'thru',
        from: {
            device: '[ADAT]',
            channel: '4'
        },
        to: {
            device: 'Patchulator',
            channel: '_'
        }
    }
];

export default _points;
