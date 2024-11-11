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
      username: "Peter"
    }
  }
})
</script>

<template>
  <nav>
    <RouterLink :to="'/a-component/' + username">Component A</RouterLink>
    <RouterLink :to="'/b-component/' + username">Component B</RouterLink>
  </nav>
  <div>
    <TestComponent/>
    <CalcComponent/>
  </div>
</template>

<style scoped>

</style>