<template>
    <nav class="navbar navbar-dark bg-dark justify-content-center p-3">
        <input type="text" v-model="todo" @input="searchTodos" class="w-50">
    </nav>
</template>

<script>
export default {
    name: 'Search',
    data() {
        return {
            todo: '',
        }
    },
    methods: {
        searchTodos() {
            this.$emit('search', this.todo);
        }
    }
}
</script>

<style>

</style>