<template>
  <div>
    <header>
      <Search v-on:search="searchTodos" />
    </header>

    <div class="container p-4 separate1">
      <div class="separate">
        <AddTodo v-on:addTodo="addTodo" />
        <TodoList v-bind:todos="copyTodos" v-on:delete-todo="deleteTodo" />
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import TodoList from './components/TodoList';
import AddTodo from './components/AddTodo';
import Search from './components/Search';

export default {
  name: 'App',
  data() {
    return {
      todos: [],
      copyTodos: [],
      URI: 'http://localhost:5000/todos'
    }
  },
  components: {
    TodoList, AddTodo, Search
  },
  async created() {
    await this.getAllTodos();
    this.copyTodos = [...this.todos];
  },
  methods: {
    async getAllTodos() {
      const response = await axios.get(this.URI);
      this.todos = response.data;
      console.log(this.todos);
    },
    async deleteTodo(id) {
      await axios.delete(`${this.URI}/delete/${id}`);
      await this.getAllTodos();
      this.copyTodos = [...this.todos];
    },
    async addTodo(todo) {
      await axios.post(this.URI, todo);
      await this.getAllTodos();
      this.copyTodos = [...this.todos];
    },
    searchTodos(title) {
      this.copyTodos = this.todos.filter(todo => todo.title.includes(title));
    }
  },
}
</script>

<style>

  body {
    background: #2980b9;  /* fallback for old browsers */
background: -webkit-linear-gradient(to right, #2c3e50, #2980b9);  /* Chrome 10-25, Safari 5.1-6 */
background: linear-gradient(to right, #2c3e50, #2980b9); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

  }

  .separate1 {
    position: relative;
  }

  .separate {
    position: absolute;
    top: 50%;
    width: 100%;
  }

</style>
