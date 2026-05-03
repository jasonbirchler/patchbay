<template>
    <div>
        <div class="toggle-buttons">
            <button @click="showBack = false" :class="{active: !showBack}">Front</button>
            <button @click="showBack = true" :class="{active: showBack}">Rear</button>
        </div>
        <Panel :patchPoints="patchPoints" :reverseOrder="showBack" @point-update="handlePointUpdate"/>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import Panel from './Panel.vue';
import { loadPoints, savePoints } from '../api/points';
import _points from '../api/points';

const points = loadPoints();
const patchPoints = ref([...points]);
const showBack = ref(false);

function savePoint(index, field, value, subfield = null) {
    const point = { ...patchPoints.value[index] };
    if (subfield) {
        point[field] = { ...point[field], [subfield]: value };
    } else {
        point[field] = value;
    }
    patchPoints.value[index] = point;
    savePoints(patchPoints.value);
}

function handlePointUpdate(payload) {
    const { index, field, value, subfield } = payload;
    savePoint(index, field, value, subfield);
}
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
