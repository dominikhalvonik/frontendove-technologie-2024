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
  }
})
</script>

<template>
  <div>
    <nav>
      <RouterLink :to="'/a-component/' + username " >Komponent A</RouterLink>
      <RouterLink :to="'/b-component/' + username " >Komponent B</RouterLink>
    </nav>
    <TestComponent/>
  </div>
</template>

<style scoped>

</style>