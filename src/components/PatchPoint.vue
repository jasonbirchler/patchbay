<template>
    <div :class="['point', direction, connector, mode, channel]">
        <i></i>
        <h4>{{ device }}<br />{{ channel }}</h4>
    </div>
</template>

<script>
export default {
    name: 'PatchPoint',
    props: {
        direction: { type: String, default: '' },
        connector: { type: String, default: 'trs' },
        mode: { type: String, default: '' },
        channel: { type: String, default: '0' },
        device: { type: String, default: 'default' }
    }
};
</script>

<style scoped>
h4 {
    text-align: center;
    margin: 0;
    white-space: nowrap;
}
.point {
    display: flex;
    flex-direction: column;
    align-items: center;
}
.point.out {
    flex-direction: column-reverse;
    margin-bottom: 1rem;
}
.point.in h4 {
    margin-top: 1rem;
}
.point.out h4 {
    margin-bottom: 1rem;
}
i {
    display: block;
    border-radius: 50%;
    border: 3px solid black;
    width: 2rem;
    height: 2rem;
    background-repeat: no-repeat;
    background-position-x: center;
    background-position-y: center;
    background-size: contain;
}
.in.normal i,
.in.half i {
    background-image: url('../assets/input.svg');
    background-position-y: -0.5rem;
}
.out.normal i {
    background-image: url('../assets/normal.svg');
    background-position-y: 0.5rem;
}
.out.half i {
    background-image: url('../assets/half-normal.svg');
    background-position-y: 0.5rem;
}
.thru i {
    background-image: url('../assets/thru.svg');
}
</style>
