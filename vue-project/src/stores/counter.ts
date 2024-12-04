import {defineStore} from 'pinia'

export const useCounterStore = defineStore({
    id: 'counter',
    state: () => {
        return {
            count: 0
        }
    },
    getters: {
        doubleCount: (state) => state.count * 2,
        isOdd: (state) => ((state.count % 2) === 0) ? 'Parne' : 'Neparne'
    },
    actions: {
        increment() {
            this.count++
        },
        doubleIncement() {
            this.count = this.count * 2
        }
    }
})


