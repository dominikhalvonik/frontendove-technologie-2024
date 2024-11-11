<script lang="ts">
import {defineComponent} from 'vue'
import NewComponent from "./NewComponent.vue";

export default defineComponent({
  name: "TestComponent",
  components: {
    NewComponent
  },
  data() {
    return {
      cislo: 1,
      meno: "Martin",
      priezvisko: "Drlik",
      parentMessage: "Nic",
      childMessage: "Tiez nic",
    }
  },
  methods: {
    increment() {
      this.cislo++
    },
    decrement() {
      this.cislo--
    },
    handleChildEvent(message: any) {
      this.childMessage = message
    }
  },
  watch: {
    childMessage(newValue, oldValue) {
      console.log('Povodna hodnota bola ' + oldValue + ' a nova hodnota je ' + newValue)
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
    fullName() {
      return this.meno + " " + this.priezvisko
    }
  }
})
</script>

<template>
<div>
  <p>Ahoj toto je moj prvy komponent</p>
  <p>{{ childMessage }}</p>
  <p>{{ meno }} {{ priezvisko }}</p>
  <p>{{ cislo }}</p>
  <p>{{ fullName }}</p>
  <p :class="getColor">{{ fullName }}</p>
  <button @click="increment">Pridaj</button>
  <button @click="decrement">Uber</button>
</div>
  <p v-if="cislo < 5">
    <NewComponent :parentMessage="parentMessage" @childEvent="handleChildEvent"/>
  </p>
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