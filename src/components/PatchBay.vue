<template>
    <div>
        <div class="toggle-buttons">
            <button @click="showBack = false" :class="{active: !showBack}">Front</button>
            <button @click="showBack = true" :class="{active: showBack}">Rear</button>
        </div>
        <Panel :patchPoints="patchPoints" :reverseOrder="showBack"/>
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
    data() {
        return {
            patchPoints: pointData,
            showBack: false
        };
    }
};
</script>

<style scoped>
h2 {
    margin-left: 1.5rem;
    margin-bottom: 0.5rem;
}
h3 {
    text-align: center;
    padding: 0.25rem 0.5rem;
    background-color: cadetblue;
    border-radius: 0.25rem;
    margin: 0 0 1rem 0;
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
.toggle-buttons {
    display: flex;
    margin: 0.5rem 0 0.5rem 2rem;
}
button {
    background-color: #fff;
    border: 1px solid #999;
}
button:hover {
    background-color: #dddddd;
}
button:active {
    background-color: #cbcaca;
}
button.active {
    background-color: #d8d6d6;
}
button:first-child {
    border-right: none;
    border-radius: 2px 0 0 2px;
}
button:last-child {
    border-radius: 0 2px 2px 0;
}
</style>
