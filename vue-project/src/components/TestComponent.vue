<script lang="ts">
import {defineComponent} from 'vue'
import NewComponent from './NewComponent.vue'

export default defineComponent({
  name: "TestComponent",
  components: {
    NewComponent
  },
  data() {
    return {
      cislo: 1,
      meno: "Dominik",
      priezvisko: "Ponist"
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
    changeColor() {
      if(this.cislo < 5) {
         return "green"
      } else if(this.cislo === 15) {
        return "black"
      }
      else {
        return "blue"
      }
    },
    whatIsMyName()
    {
      return this.meno + " " + this.priezvisko
    }
  }
})
</script>

<template>
<div>
  <p>Ahoj toto je moj prvy komponent</p>
  <p>{{ meno }} {{ priezvisko }}</p>
  <p>{{ cislo }}</p>
  <p :class="changeColor">{{ whatIsMyName }}</p>
  <button @click="increment">Pridaj</button>
  <button @click="decrement">Uber</button>
</div>

  <NewComponent v-if="cislo < 5"/>
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

.black {
  color: black;
  font-size: 130px;
}
</style>

