<template>
    <li class="list-group-item list-group-item-action 
    list-group-item-light text-dark w-50 mx-auto rounded-0">

        <input type="checkbox" v-bind:checked="todo.done ? 'checked' : ''"
        v-on:change="changeState(todo._id)">

        <span class="h3 ml-5 mt-auto mb-0" v-bind:class="todo.done ? 'dashed' : ''">
            {{todo.task}}
        </span>

        <button class="btn btn-danger float-right" @click="$emit('delete-todo', todo._id)">
            Delete
        </button>
    </li>
</template>

<script>
import axios from 'axios';
export default {
    name: 'TodoItem',
    props: ['todo'],
    methods: {
        changeState(id) {
            axios.put('http://localhost:5000/todos/change/'+id, {});
            this.todo.done = !this.todo.done;
        }
    }
}
</script>

<style>
    .dashed {
        text-decoration: line-through;
    }
</style>