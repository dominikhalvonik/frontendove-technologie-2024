<script lang="ts">
import {defineComponent} from 'vue'
import CalcComponent from "@/components/CalcComponent.vue";
import TestComponent from "@/components/TestComponent.vue";

export default defineComponent({
  name: "OurView",
  components: {
    CalcComponent,
    TestComponent
  },
  data() {
    return {
      username: "Peto"
    }
  }
})
</script>

<template>
  <div>
    <RouterLink :to="'/a-component/' + username">A komponent</RouterLink>
    <RouterLink :to="'/b-component/' + username">B component</RouterLink>
    <TestComponent/>
    <CalcComponent/>
  </div>
</template>

<style scoped>

</style>