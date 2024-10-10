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
    whatIsMyName() {
      return this.meno + " " + this.priezvisko
    }
  }
})
</script>

<template>
<div>
  <p>{{ meno }} {{ priezvisko }}</p>
  <p>{{ whatIsMyName }}</p>
  <p :class="getColor">{{ whatIsMyName }}</p>
  <p>{{ cislo }}</p>
  <button @click="increment">Pridaj</button>
  <button @click="decrement">Uber</button>

</div>
</template>

<style scoped>
.green {
  color: green;
  font-size: 50px;
}

.blue {
  color: blue;
  font-size: 30px;
}
</style>