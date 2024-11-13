<script lang="ts">
import {defineComponent} from 'vue'

export default defineComponent({
  name: "NewComponent",
  data() {
    return {
      somTu: true,
      cislo: 1,
      zoznamMien: [{id: 1, meno: "Dominik", vek: 22}, { id: 2, meno: "Peter", vek: 23 }]
    }
  },
  props: {
    parentMessage: {
      type: String,
      required: true
    }
  },
  methods: {
    toggle() {
      this.somTu = !this.somTu
    },
    increment() {
      this.cislo++
    },
    vlozitDoZoznamu() {
      this.zoznamMien.push({id: 12, meno: "Test", vek: 14})
    },
    sendToParent()
    {
      this.$emit('childEventtttt', 'Toto je sprava z podradeneho komponentu ' + Math.random())
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
    console.log("Toto sa vykona po aktualizaciou komponentu")
  },
  beforeUnmount() {
    console.log("Toto sa vykona pred vyradenim komponentu")
  },
  unmounted() {
    console.log("Toto sa vykona po vyradenim komponentu")
  },
})
</script>

<template>
<div>
  <button @click="sendToParent">Odosli spravu do rodica</button>
  <p style="color: red">{{ parentMessage }}</p>
  <p v-if="cislo < 5">Teraz ma vidis</p>
  <p v-else-if="cislo > 5 && cislo < 10">Nieco v strede</p>
  <p v-else>Teraz ma nevidis</p>
  <p v-show="somTu">Toto je v-show</p>
  <button @click="toggle">Toggle</button>
  <button @click="increment">Pridaj</button>
  <br><br>
  <button @click="vlozitDoZoznamu">Fake insert</button>
  <ul>
    <li v-for="item in zoznamMien" :key="item.id">{{ item.meno }} {{ item.vek }}</li>
  </ul>
</div>
</template>

<style scoped>

</style>