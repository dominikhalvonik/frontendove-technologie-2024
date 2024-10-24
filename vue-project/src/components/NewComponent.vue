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
  methods: {
    toggle() {
      this.somTum = !this.somTum
    },
    addToList() {
      this.zoznamLudi.push({id: 15, meno: "Martin Madej", vek: 15})
    }
  },
  beforeCreate() {
    console.log("Toto sa vykoná pred vytvorením komponentu")
  },
  created() {
    console.log("Toto sa vykoná po vytvorením komponentu")
    for(let i = 0; i < 50000; i++) {
      console.log(i)
    }
  },
  beforeMount() {
    console.log("Toto sa vykoná pred zaradením komponentu do HTML")
  },
  mounted() {
    console.log("Toto sa vykoná po zaradením komponentu do HTML")
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
})
</script>

<template>
<div>
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