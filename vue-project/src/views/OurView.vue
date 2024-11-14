<script lang="ts">
import {defineComponent} from 'vue'
import TestComponent from "@/components/TestComponent.vue";
import CalcComponent from "@/components/CalcComponent.vue";

export default defineComponent({
  name: "OurView",
  components: {
    TestComponent,
    CalcComponent
  },
  data() {
    return {
      username: "Martin"
    }
  }
})
</script>

<template>
  <div>
    <RouterLink :to="'/a-component/' + username">A komponent</RouterLink>
    <RouterLink :to="'/b-component/' + username">B komponent</RouterLink>
    <TestComponent/>
    <CalcComponent/>
  </div>
</template>

<style scoped>

</style>