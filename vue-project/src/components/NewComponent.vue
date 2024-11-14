<script lang="ts">
import {defineComponent} from 'vue'

export default defineComponent({
  name: "NewComponent",
  data() {
    return {
      somTum: true,
      zoznamLudi: [
        {
          id: 1,
          meno: "Martin Pesko",
          vek: 112,
        },
        {
          id: 2,
          meno: "Peter Marcin",
          vek: 42,
        },
      ]
    }
  },
  props: {
    username: {
      type: String,
      required: true
    }
  },
  beforeCreate() {
    console.log("Toto sa vykoná pred vytvorením komponentu")
  },
  created() {
    console.log("Toto sa vykoná po vytvorením komponentu")
  },
  beforeMount() {
    console.log("Toto sa vykoná pred zaradením komponentu do HTML")
  },
  mounted() {
    console.log("Toto sa vykoná po zaradením komponentu do HTML")
    //API CALL NA BE
  },
  beforeUpdate() {
    console.log("Toto sa vykoná pred aktualizaciou")
  },
  updated() {
    console.log("Toto sa vykoná po aktualizacii")
  },
  beforeUnmount() {
    console.log("Toto sa vykoná pred vyradením komponentu")
  },
  unmounted() {
    console.log("Toto sa vykoná po vyradením komponentu")
  },
  methods: {
    toggle() {
      this.somTum = !this.somTum
    },
    addToList() {
      this.zoznamLudi.push({id: 15, meno: "Martin Madej", vek: 15})
    },
    sendDataToParent() {
      this.$emit('childEvent', 'Toto je nahodne cislo: ' + Math.random())
    },
  },
})
</script>

<template>
<div>
  <button @click="sendDataToParent">Odosli spravu do nadradeneho komponentu</button>
  <p>Teraz si prihlaseny ako: {{ username }}</p>
  <p v-if="somTum">Som tu</p>
  <p v-else>Nie som tu</p>
  <p v-show="somTum">Aj tak som tu</p>
  <button @click="toggle">Toogle</button>
  <button @click="addToList">Pridaj Martina Madeja</button>
  <ul>
    <li v-for="item in zoznamLudi" :key="item.id">Meno: {{ item.meno }}, Vek: {{ item.vek }}</li>
  </ul>
</div>
</template>

<style scoped>

</style>