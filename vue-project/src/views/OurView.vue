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
  },
  methods: {
    goHome() {
      this.$router.push('/')
    }
  }
})
</script>

<template>
  <div>
    <RouterLink to="/component">Component A</RouterLink>
    <RouterLink :to="'/component/' + username">Component B</RouterLink>
    <button @click="goHome">Home</button>
    <TestComponent/>
    <CalcComponent/>
  </div>
</template>

<style scoped>

</style>