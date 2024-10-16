<script lang="ts">
import {defineComponent} from 'vue'

export default defineComponent({
  name: "NewComponent",
  data() {
      return {
        somTu: true,
        sprava: "Uz to tu je",
        zoznamMien: [
          {
            id:1,
            meno:"Dominik",
            priezvisko:"Halvonik",
            vek:42
          },
          {
            id:2,
            meno:"Martin",
            priezvisko:"Pesko",
            vek:18
          },
        ]
      }
  },
  methods: {
    vlozDoZoznamu() {
      this.zoznamMien.push({id: 14, meno: "Peter", priezvisko: "Plavcan", vek: 48})
    },
    toggle() {
      this.somTu = !this.somTu
    }
  }
})
</script>

<template>
  <p v-if="somTu">{{ sprava }}</p>
  <p v-else>Nic tu nie je a ani nebude</p>

  <p v-show="somTu">Toto je zobrazenie</p>

  <button @click="toggle">Schovaj/Zobraz</button>
  <button @click="vlozDoZoznamu">Vloz Petra</button>
  <ul>
    <li v-for="item in zoznamMien" :key="item.id">{{ item.meno }} {{ item.priezvisko }}</li>
  </ul>
</template>

<style scoped>

</style>