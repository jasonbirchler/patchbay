<template>
    <div>
        <h2>Front</h2>
        <Panel :patchPoints="patchPoints" />
        <h2 v-if="showBack">Back</h2>
        <Panel v-if="showBack" :patchPoints="patchPoints" reverseOrder />
    </div>
</template>

<script>
import Panel from './Panel';
import pointData from '../api/points';

export default {
    name: 'PatchBay',
    components: {
        Panel
    },
    props: {
        showBack: { type: Boolean, default: false }
    },
    data() {
        return {
            patchPoints: pointData
        };
    }
};
</script>

<style scoped>
main {
    border: 1px solid black;
    padding: 1rem;
    background-color: #ededed;
}
.points {
    display: grid;
    grid-template-columns: repeat(24, 1fr);
    gap: 2rem;
}
.points--pair {
    background-color: white;
    padding: 0.5rem;
}
.labels {
    display: flex;
    flex-direction: column;
    justify-content: center;
}
.labels p:first-child {
    margin-top: 4rem;
}
h3 {
    text-align: center;
    padding: 0.25rem 0.5rem;
    background-color: cadetblue;
    border-radius: 0.25rem;
    margin: 0 0 1rem 0;
}
</style>
