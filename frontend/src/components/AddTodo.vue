<template>
    <div>
        <form @submit.prevent="addTodo" class="inline-form w-50 mx-auto">
            <div class="form-group">
                <input type="text" class="form-control text-dark" v-model="title" placeholder="New Todo">
            </div>
        </form>
    </div>
</template>

<script>
export default {
    data() {
        return {
            title: '',
        }
    },
    methods: {
        addTodo() {
            if(this.title.trim() !== '') {
                const newTodo = {
                    task: this.title,
                    done: false
                }
                this.$emit('addTodo', newTodo);
                this.title = '';
            }
        }
    }
}
</script>

<style>

</style>