<script lang="ts">
import {defineComponent} from 'vue'

export default defineComponent({
  name: "NewComponent",
  data() {
    return {
      somTu: false,
      zoznamMien: [
        {
          id: 1,
          meno: "Martin",
          vek: 22
        },
        {
          id: 2,
          meno: "Peter",
          vek: 25
        },
        {
          id: 3,
          meno: "Igor",
          vek: 24
        }
      ]
    }
  },
  methods: {
    toggle() {
      this.somTu = !this.somTu
    },
    addFakeUser() {
      this.zoznamMien.push({id: 14, meno: "Dominik", vek: 55})
    },
    removeUser() {
      this.zoznamMien.pop()
    }
  },
  beforeCreate() {
      console.log("Toto sa vykona pred vytvorenim komponentu")
  },
  created() {
    console.log("Toto sa vykona po vytvorenim komponentu")
  },
  beforeMount() {
    console.log("Toto sa vykona pred vlozenim komponentu do HTML")
  },
  mounted() {
    console.log("Toto sa vykona po vlozenim komponentu do HTML")
  },
  beforeUpdate() {
    console.log("Toto sa vykona pred aktualizaciou komponentu")
  },
  updated() {
    console.log("Toto sa vykona po aktualizacii komponentu")
  },
  beforeUnmount() {
    console.log("Toto sa vykona pred odobranim komponentu s HTML")
  },
   unmounted() {
     console.log("Toto sa vykona po odobranim komponentu s HTML")
   },
})
</script>

<template>
<div>
  <button @click="toggle">Toogle</button>
  <p v-if="somTu">Ahoj vidis ma lebo somTu je true</p>
  <p v-else>Ahoj nevidis ma lebo somTu je false</p>
  <p v-show="somTu">Ahoj vidis ma lebo somTu je true</p>
  <br><br>
  <button @click="addFakeUser">Pridaj pouzivatela</button>
  <button @click="removeUser">Odober pouzivatela</button>
  <ul>
    <li v-for="item in zoznamMien" :key="item.id">Meno: {{ item.meno }}, Vek: {{ item.vek }}</li>
  </ul>
</div>
</template>

<style scoped>

</style>