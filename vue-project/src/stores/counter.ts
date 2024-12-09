import {defineStore} from 'pinia'

export const useCounterStore = defineStore({
    id: 'counter',
    state: () => {
        return {
            count: Number(localStorage.getItem('counter')) || 0 // Načítaj z localStorage alebo nastav 0
        }
    },
    getters: {
        doubleCount: (state) => state.count * 2,
        idOdd: (state) => ((state.count % 2) === 0) ? 'Parne' : 'Neparne'
    },
    actions: {
        increment() {
            this.count++
            this.saveToLocalStorage() // Ulož hodnotu do localStorage
        },
        decrement() {
            this.count--
            this.saveToLocalStorage() // Ulož hodnotu do localStorage
        },
        reset() {
            this.count = 0
            this.saveToLocalStorage() // Ulož hodnotu do localStorage
        },
        doubleIncement() {
            this.count = this.count * 2
            localStorage.setItem('counter', String(this.count)) // Ulož hodnotu `count` do localStorage
        },
        saveToLocalStorage() {
            localStorage.setItem('counter', String(this.count)) // Ulož hodnotu `count` do localStorage
        },
    }
})
