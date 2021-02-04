const _points = [
    {
        mode: 'normal',
        from: {
            device: 'Norns',
            channel: 'Out'
        },
        to: {
            device: 'Mixer',
            channel: '5/6'
        }
    },
    {
        mode: 'normal',
        from: {
            device: 'NTS-1',
            channel: 'Out'
        },
        to: {
            device: 'Mixer',
            channel: '7/8'
        }
    },
    {
        mode: 'normal',
        from: {
            device: 'Blackbox',
            channel: 'Phones'
        },
        to: {
            device: 'Mixer',
            channel: '9/10'
        }
    },
    {
        mode: 'normal',
        from: {
            device: 'MicroBrute',
            channel: 'Out'
        },
        to: {
            device: 'Mixer',
            channel: '11/12'
        }
    },
    {
        mode: 'normal',
        from: {
            device: 'Pisound',
            channel: 'Out'
        },
        to: {
            device: 'Mixer',
            channel: '1/2'
        }
    },
    {
        mode: 'normal',
        from: {
            device: 'iPad',
            channel: 'Out'
        },
        to: {
            device: 'Mixer',
            channel: '3/4'
        }
    },
    {
        mode: 'half',
        from: {
            device: 'Mixer',
            channel: 'Aux 2'
        },
        to: {
            device: 'MoFx',
            channel: 'In'
        }
    },
    {
        mode: 'normal',
        from: {
            device: 'MoFx',
            channel: 'Out'
        },
        to: {
            device: 'Mixer',
            channel: 'Aux Ret'
        }
    },
    {
        mode: 'normal',
        from: {
            device: 'Mixer',
            channel: 'Alt 3/4'
        },
        to: {
            device: 'Blackbox',
            channel: 'In'
        }
    },
    {
        mode: 'normal',
        from: {
            device: 'Mixer',
            channel: 'Main'
        },
        to: {
            device: 'Speakers',
            channel: 'In'
        }
    },
    {
        mode: '',
        from: {
            device: '_',
            channel: '_'
        },
        to: {
            device: '_',
            channel: '_'
        }
    },
    {
        mode: '',
        from: {
            device: '_',
            channel: '_'
        },
        to: {
            device: '_',
            channel: '_'
        }
    },
    {
        mode: '',
        from: {
            device: '_',
            channel: '_'
        },
        to: {
            device: '_',
            channel: '_'
        }
    },
    {
        mode: '',
        from: {
            device: '_',
            channel: '_'
        },
        to: {
            device: '_',
            channel: '_'
        }
    },
    {
        mode: '',
        from: {
            device: '_',
            channel: '_'
        },
        to: {
            device: '_',
            channel: '_'
        }
    },
    {
        mode: '',
        from: {
            device: '_',
            channel: '_'
        },
        to: {
            device: '_',
            channel: '_'
        }
    },
    {
        mode: '',
        from: {
            device: '_',
            channel: '_'
        },
        to: {
            device: '_',
            channel: '_'
        }
    },
    {
        mode: '',
        from: {
            device: '_',
            channel: '_'
        },
        to: {
            device: '_',
            channel: '_'
        }
    },
    {
        mode: 'thru',
        from: {
            device: 'Patchulator',
            channel: '8 Out'
        },
        to: {
            device: 'Patchulator',
            channel: '8 In'
        }
    },
    {
        mode: 'thru',
        from: {
            device: '_',
            channel: '_'
        },
        to: {
            device: 'Norns',
            channel: 'In'
        }
    },
    {
        mode: 'thru',
        from: {
            device: '_',
            channel: '_'
        },
        to: {
            device: 'NTS-1',
            channel: 'In'
        }
    },
    {
        mode: 'thru',
        from: {
            device: 'Mixer',
            channel: 'CD Out'
        },
        to: {
            device: 'Mixer',
            channel: 'CD In'
        }
    },
    {
        mode: 'thru',
        from: {
            device: 'Mixer',
            channel: 'HP1'
        },
        to: {
            device: '_',
            channel: '_'
        }
    },
    {
        mode: 'thru',
        from: {
            device: 'Mixer',
            channel: 'HP2'
        },
        to: {
            device: '_',
            channel: '_'
        }
    }
];

export default _points;
