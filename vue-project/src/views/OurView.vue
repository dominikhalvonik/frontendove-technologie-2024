<script lang="ts">
import {defineComponent} from 'vue'
import CalcComponent from "@/components/CalcComponent.vue";
import TestComponent from "@/components/TestComponent.vue";
import {useCounterStore} from "@/stores/counter";

export default defineComponent({
  name: "OurView",
  components: {
    CalcComponent,
    TestComponent
  },
  data() {
    return {
      username: "Peter",
      counter: useCounterStore()
    }
  },
})
</script>

<template>

  <div>
    <RouterLink to="/component">Component A</RouterLink>
    <RouterLink :to="'/component/' + username">Component B</RouterLink>
    {{ counter.count }}
    <CalcComponent/>
    <TestComponent/>
  </div>
</template>

<style scoped>

</style>