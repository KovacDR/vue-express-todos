<template>
    <div>
        <ul v-bind:key="todo.id" v-for="todo in todos" class="list-group">
            <TodoItem v-bind:todo="todo" v-on:delete-todo="$emit('delete-todo', todo._id)" />
        </ul>
    </div>
</template>

<script>
import TodoItem from "./TodoItem";

export default {
    name: "TodoLis",
    props: ["todos"],
    components: {
        TodoItem,
    },
};
</script>

<style></style>
