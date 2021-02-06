<template>
    <div id="app">
        <h1>Patchbay</h1>
        <Patchbay showBack />
    </div>
</template>

<script>
import Patchbay from './components/PatchBay';

export default {
    name: 'App',
    components: {
        Patchbay
    }
};
</script>

<style>
#app {
    font-family: Helvetica, Arial, sans-serif;
    font-size: 16px;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
}
h1 {
    font-size: 8rem;
    margin: 0 0 1rem 0;
}
@media print {
    h1 {
        display: none;
    }
}
</style>
