<script lang="ts">
import {defineComponent} from 'vue'
import TestComponent from "@/components/TestComponent.vue";
import {useCounterStore} from "@/stores/counter";

export default defineComponent({
  name: "OurView",
  components: {
    TestComponent
  },
  data() {
    return {
      username: "Martin",
      counter: useCounterStore(),
    }
  },
  methods: {
    goToHome() {
      this.$router.push('/')
    }
  }
})
</script>

<template>
  <div>
    <nav>
      <RouterLink to="/component">Component A</RouterLink>
      <RouterLink :to="'/component/' + username">Component B</RouterLink>
      <button @click="goToHome">Home</button>
    </nav>
    {{ counter.count }}
    <TestComponent/>
  </div>
</template>

<style scoped>

</style>