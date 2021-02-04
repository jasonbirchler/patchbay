<template>
    <main :class="[format]">
        <div class="points">
            <div class="labels">
                <p>Out</p>
                <p>In</p>
            </div>
            <div
                :class="['points--pair']"
                v-for="(item, index) in orderedPatchPoints"
                :key="index"
            >
                <h3>
                    {{
                        reverseOrder
                            ? orderedPatchPoints.length - index
                            : index + 1
                    }}
                </h3>
                <PatchPoint
                    :device="item.from.device"
                    :channel="item.from.channel"
                    :mode="item.mode"
                    direction="out"
                />
                <PatchPoint
                    :device="item.to.device"
                    :channel="item.to.channel"
                    :mode="item.mode"
                    direction="in"
                />
            </div>
            <div class="labels">
                <p>Out</p>
                <p>In</p>
            </div>
        </div>
    </main>
</template>

<script>
import PatchPoint from './PatchPoint';

export default {
    name: 'Panel',
    components: {
        PatchPoint
    },
    props: {
        format: { type: String, default: 'rack' },
        patchPoints: { type: Array, required: true },
        reverseOrder: { type: Boolean, default: false }
    },
    computed: {
        orderedPatchPoints() {
            if (this.reverseOrder) {
                return this.patchPoints.slice().reverse();
            }

            return this.patchPoints;
        }
    }
};
</script>

<style scoped>
main {
    border: 2px solid #828181;
    border-radius: 4px;
    padding: 1rem;
    background-color: #ededed;
    overflow-y: auto;
}
.points {
    display: flex;
    gap: 2rem;
}
.points--pair {
    background-color: white;
    padding: 0.5rem;
}
.labels {
    font-weight: 500;
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
}
.labels:first-child {
    padding-left: 1rem;
}
.labels:last-child {
    padding-right: 2rem;
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
