<script lang="ts">
import {defineComponent} from 'vue'

export default defineComponent({
name: "TestComponent",
  data() {
    return {
      cislo: 1,
      meno: "Dominik",
      priezvisko: "Martak"
    }
  },
  methods: {
    increment() {
      this.cislo++
    },
    decrement() {
      this.cislo--
    }
  },
  computed: {
    getColor() {
      if(this.cislo < 5) {
        return "green"
      } else {
        return "blue"
      }
    },
    getFullName() {
      return this.meno + " " + this.priezvisko
    }
  }
})
</script>

<template>
  <div>
    <p>Ahoj toto je moj prvy komponent</p>
    <p>{{ meno }} {{ priezvisko }}</p>
    <p>{{ getFullName }}</p>
    <p :class="getColor">{{ getFullName }}</p>
    <button @click="increment">Pridaj</button>
    <button @click="decrement">Uber</button>
  </div>
</template>

<style scoped>
.green {
  color: green;
  font-size: 30px;
}

.blue {
  color: blue;
  font-size: 50px;
}
</style>

