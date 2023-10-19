const _points = [
    {
        mode: 'thru',
        from: {
            device: '_',
            channel: '_'
        },
        to: {
            device: 'Mixer',
            channel: '1'
        }
    },
    {
        mode: 'thru',
        from: {
            device: '_',
            channel: '_'
        },
        to: {
            device: 'Mixer',
            channel: '2'
        }
    },
    {
        mode: 'normal',
        from: {
            device: 'Norns',
            channel: 'L'
        },
        to: {
            device: 'Mixer',
            channel: '3'
        }
    },
    {
        mode: 'normal',
        from: {
            device: 'Norns',
            channel: 'R'
        },
        to: {
            device: 'Mixer',
            channel: '4'
        }
    },
    {
        mode: 'normal',
        from: {
            device: 'Blackbox',
            channel: 'L'
        },
        to: {
            device: 'Mixer',
            channel: '5'
        }
    },
    {
        mode: 'normal',
        from: {
            device: 'Blackbox',
            channel: 'R'
        },
        to: {
            device: 'Mixer',
            channel: '6'
        }
    },
    {
        mode: 'normal',
        from: {
            device: 'Bluebox',
            channel: 'L'
        },
        to: {
            device: 'Mixer',
            channel: '7'
        }
    },
    {
        mode: 'normal',
        from: {
            device: 'Bluebox',
            channel: 'R'
        },
        to: {
            device: 'Mixer',
            channel: '8'
        }
    },
    {
        mode: 'normal',
        from: {
            device: 'Computer',
            channel: 'L'
        },
        to: {
            device: 'Mixer',
            channel: '9'
        }
    },
    {
        mode: 'normal',
        from: {
            device: 'Computer',
            channel: 'R'
        },
        to: {
            device: 'Mixer',
            channel: '10'
        }
    },
    {
        mode: 'normal',
        from: {
            device: 'Turntable',
            channel: 'L'
        },
        to: {
            device: 'Mixer',
            channel: '11'
        }
    },
    {
        mode: 'normal',
        from: {
            device: 'Turntable',
            channel: 'R'
        },
        to: {
            device: 'Mixer',
            channel: '12'
        }
    },
    {
        mode: 'normal',
        from: {
            device: 'MoFX',
            channel: 'L'
        },
        to: {
            device: 'Mixer',
            channel: 'Aux Ret 1L'
        }
    },
    {
        mode: 'normal',
        from: {
            device: 'MoFX',
            channel: 'R'
        },
        to: {
            device: 'Mixer',
            channel: 'Aux Ret 1R'
        }
    },
    {
        mode: 'thru',
        from: {
            device: '_',
            channel: '_'
        },
        to: {
            device: 'Mixer',
            channel: 'Aux Ret 2L'
        }
    },
    {
        mode: 'thru',
        from: {
            device: '_',
            channel: '_'
        },
        to: {
            device: 'Mixer',
            channel: 'Aux Ret 2R'
        }
    },
    {
        mode: 'normal',
        from: {
            device: 'Mixer',
            channel: 'Aux Send 1'
        },
        to: {
            device: 'MoFX',
            channel: 'L(mono)'
        }
    },
    {
        mode: 'thru',
        from: {
            device: 'Mixer',
            channel: 'Aux Send 2'
        },
        to: {
            device: '_',
            channel: '_'
        }
    },
    {
        mode: 'normal',
        from: {
            device: 'Bluebox',
            channel: 'Cue L'
        },
        to: {
            device: 'Blackbox',
            channel: 'In L'
        }
    },
    {
        mode: 'normal',
        from: {
            device: 'Bluebox',
            channel: 'Cue R'
        },
        to: {
            device: 'Blackbox',
            channel: 'In R'
        }
    },
    {
        mode: 'thru',
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
            device: '_',
            channel: '_'
        },
        to: {
            device: '_',
            channel: '_'
        }
    }
];

export default _points;
