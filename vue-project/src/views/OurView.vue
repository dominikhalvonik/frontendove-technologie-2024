<script lang="ts">
import {defineComponent} from 'vue'
import TestComponent from "@/components/TestComponent.vue";
import CalcComponent from "@/components/CalcComponent.vue";
import {useCounterStore} from "@/stores/counter";

export default defineComponent({
  name: "OurView",
  components: {
    TestComponent,
    CalcComponent
  },
  data() {
    return {
      username: "Peter",
      counter: useCounterStore()
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
    {{ counter.doubleCount }}
    <TestComponent/>
    <CalcComponent/>
  </div>
</template>

<style scoped>

</style>