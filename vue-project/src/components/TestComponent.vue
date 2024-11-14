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
      priezvisko: "Ponist",
      menoPouzivatela: "Maria",
      childMessage: 'Nic'
    }
  },
  watch: {
    childMessage(newValue, oldValue) {
      console.log('Nova hodnota spravy je: ' + newValue + ' a stara hodnota spravy bola ' + oldValue)
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
  mounted() {
      //UROB API CALL NA BE a NAPL parentSprava ODPOVEDOU menoPouzivatela = fetch('http://moj-backend.com/api/user/get-name')
  }
})
</script>

<template>
<div>
  <p>Vitaj {{ menoPouzivatela }}</p>
  <p>Toto je sprava od podradeneho komponentu: {{ childMessage }}</p>
  <p>Ahoj toto je moj prvy komponent</p>
  <p>{{ meno }} {{ priezvisko }}</p>
  <p>{{ cislo }}</p>
  <p :class="changeColor">{{ whatIsMyName }}</p>
  <button @click="increment">Pridaj</button>
  <button @click="decrement">Uber</button>
</div>

  <NewComponent v-if="cislo < 5" :username="menoPouzivatela" @childEvent="handleChildEvent"/>
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

