import { defineStore } from 'pinia';
import axios from 'axios';
export const useTodoStore = defineStore({
    id: 'todo',
    state: () => ({
        todos: [] as Array<any>, // Zoznam TODO úloh
        loading: false,
        error: null as string | null,
    }),
    actions: {
        async fetchTodos(count: number) {
            this.loading = true;
            this.error = null;
            this.todos = []; // Vymaž predchádzajúci zoznam
            try {
                // Načítaj TODO položky podľa počtu
                const promises = [];
                for (let id = 1; id <= count; id++) {
                    promises.push(axios.get(`https://jsonplaceholder.typicode.com/todos/${id}`));
                    //const response = await axios.get(`https://jsonplaceholder.typicode.com/todos/${id}`);
                    //this.todos.push(response.data);
                }
                const responses = await Promise.all(promises);
                this.todos = responses.map((res) => res.data); // Ulož všetky TODO
            } catch (err) {
                this.error = 'Nepodarilo sa načítať TODO položky.';
            } finally {
                this.loading = false;
            }
        },
    },
});