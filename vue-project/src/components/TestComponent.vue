<script lang="ts">
import { defineComponent } from 'vue'
import NewComponent from './NewComponent.vue'

export default defineComponent({
  name: 'TestComponent',
  components: {
    NewComponent
  },
  data() {
    return {
      cislo: 1,
      meno: 'Dominik',
      priezvisko: 'Martak',
      parentMessage: "Luke ja som tvoj otec",
      childMessage: 'Nic'
    }
  },
  watch: {
    childMessage(newValue, oldValue) {
      console.log('Povodna hodnota bola '
          + oldValue + ' a nova hodnota je '
          + newValue)
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
  computed: {
    getColor() {
      if (this.cislo < 5) {
        return 'green'
      } else {
        return 'blue'
      }
    },
    getFullName() {
      return this.meno + ' ' + this.priezvisko
    }
  }
})
</script>

<template>
  <div>
    <p>{{ childMessage }}</p>
    <p>Ahoj toto je moj prvy komponent</p>
    <p>{{ meno }} {{ priezvisko }}</p>
    <p>{{ getFullName }}</p>
    <p :class="getColor">{{ getFullName }}</p>
    <button @click="increment">Pridaj</button>
    <button @click="decrement">Uber</button>
  </div>
  <NewComponent v-if="cislo < 5" :parentMessage="parentMessage" @childEvent="handleChildEvent" />
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
