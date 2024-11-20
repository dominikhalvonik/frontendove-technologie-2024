<script lang="ts">
import {defineComponent} from 'vue'
import TestComponent from "@/components/TestComponent.vue";

export default defineComponent({
  name: "OurView",
  components: {
    TestComponent
  },
  data() {
    return {
      username: "Martin"
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
    <TestComponent/>
  </div>
</template>

<style scoped>

</style>