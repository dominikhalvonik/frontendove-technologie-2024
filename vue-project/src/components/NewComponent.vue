<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'NewComponent',
  data() {
    return {
      somTu: true,
      sprava: 'Uz to tu je',
      zoznamMien: [
        {
          id: 1,
          meno: 'Dominik',
          priezvisko: 'Halvonik',
          vek: 42
        },
        {
          id: 2,
          meno: 'Martin',
          priezvisko: 'Pesko',
          vek: 18
        }
      ]
    }
  },
  methods: {
    vlozDoZoznamu() {
      this.zoznamMien.push({ id: 14, meno: 'Peter', priezvisko: 'Plavcan', vek: 48 })
    },
    toggle() {
      this.somTu = !this.somTu
    }
  },
  beforeCreate() {
    console.log('Toto sa stane pred vytvorenim komponentu')
  },
  created() {
    console.log('Toto sa stane po vytvorenim komponentu')
    for (let i = 0; i < 50000; i++) {
      console.log(i)
    }
  },
  beforeMount() {
    console.log('Toto sa stane pred vlozenim komponentu do HTML')
  },
  mounted() {
    console.log('Toto sa stane po vlozenim komponentu do HTML')
  },
  beforeUpdate() {
    console.log('Toto sa stane pred aktualizaciou komponentu')
  },
  updated() {
    console.log('Toto sa stane po aktualizaciou komponentu')
  },
  beforeUnmount() {
    console.log('Toto sa stane pred vynatim komponentu s HTML')
  },
  unmounted() {
    console.log('Toto sa stane po vynatim komponentu s HTML')
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

<style scoped></style>
