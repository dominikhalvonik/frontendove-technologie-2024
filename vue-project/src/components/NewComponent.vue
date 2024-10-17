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
  }
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